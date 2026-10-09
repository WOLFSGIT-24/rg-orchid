/**
 * Sends form data to the Make (Integromat) webhook configured in VITE_WEBHOOK_URL.
 * The payload always includes an `timestamp_ist` field in IST (Asia/Kolkata, UTC+5:30).
 */
export async function sendToWebhook(data: Record<string, string>): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const webhookUrl = (import.meta as any).env?.VITE_WEBHOOK_URL as string | undefined;

  if (!webhookUrl) {
    console.warn('[webhook] VITE_WEBHOOK_URL is not set. Skipping webhook call.');
    return;
  }

  // Generate IST timestamp (Asia/Kolkata = UTC+5:30)
  const now = new Date();
  const timestamp_ist = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const payload = {
    ...data,
    timestamp_ist,
  };

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    // Log but do not surface to the user — form submission should still succeed
    console.error('[webhook] Failed to send data to webhook:', err);
  }
}
