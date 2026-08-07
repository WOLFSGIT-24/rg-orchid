import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Calendar, Phone, Mail, CheckCircle2, RefreshCw, BarChart2, ShieldAlert } from 'lucide-react';
import { Enquiry } from '../types';

interface LeadsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  refreshTrigger: boolean;
  onUpdateStatus: () => void;
}

export default function LeadsPanel({ isOpen, onClose, refreshTrigger, onUpdateStatus }: LeadsPanelProps) {
  const [leads, setLeads] = useState<Enquiry[]>([]);
  const [filterSize, setFilterSize] = useState<string>('All');

  // Load leads from LocalStorage
  const loadLeads = () => {
    const list: Enquiry[] = JSON.parse(localStorage.getItem('rg_enquiries') || '[]');
    setLeads(list);
  };

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen, refreshTrigger]);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this enquiry from the local database?')) {
      const existing: Enquiry[] = JSON.parse(localStorage.getItem('rg_enquiries') || '[]');
      const filtered = existing.filter((item) => item.id !== id);
      localStorage.setItem('rg_enquiries', JSON.stringify(filtered));
      loadLeads();
      onUpdateStatus();
    }
  };

  const handleStatusChange = (id: string, newStatus: Enquiry['status']) => {
    const existing: Enquiry[] = JSON.parse(localStorage.getItem('rg_enquiries') || '[]');
    const updated = existing.map((item) => {
      if (item.id === id) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    localStorage.setItem('rg_enquiries', JSON.stringify(updated));
    loadLeads();
    onUpdateStatus();
  };

  const filteredLeads = leads.filter((lead) => {
    if (filterSize === 'All') return true;
    return lead.preferredSize === filterSize;
  });

  // Calculate quick analytics
  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === 'New').length,
    contacted: leads.filter((l) => l.status === 'Contacted').length,
    visit: leads.filter((l) => l.status === 'Visit Scheduled').length,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-[#191c1d]/60 backdrop-blur-sm"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xl bg-[#faf9f8] shadow-2xl border-l border-[#e3e2e1] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#e3e2e1] flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <h3 className="font-serif text-lg font-bold text-[#191C1D] uppercase tracking-wide">
                  Real-Time Enquiry Panel
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-[#faf9f8] rounded-full border border-transparent hover:border-[#e3e2e1] text-[#4d463a] transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="p-6 bg-[#faf9f8] border-b border-[#e3e2e1]">
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded-sm border border-[#e3e2e1] text-center">
                  <span className="block text-[10px] font-sans font-bold tracking-wider text-[#4d463a]/60 uppercase">
                    Total
                  </span>
                  <span className="font-serif text-xl font-bold text-[#735b2b]">{stats.total}</span>
                </div>
                <div className="bg-white p-3 rounded-sm border border-[#e3e2e1] text-center">
                  <span className="block text-[10px] font-sans font-bold tracking-wider text-[#4d463a]/60 uppercase">
                    New
                  </span>
                  <span className="font-serif text-xl font-bold text-[#d4b47c]">{stats.new}</span>
                </div>
                <div className="bg-white p-3 rounded-sm border border-[#e3e2e1] text-center">
                  <span className="block text-[10px] font-sans font-bold tracking-wider text-[#4d463a]/60 uppercase">
                    Contact
                  </span>
                  <span className="font-serif text-xl font-bold text-blue-500">{stats.contacted}</span>
                </div>
                <div className="bg-white p-3 rounded-sm border border-[#e3e2e1] text-center">
                  <span className="block text-[10px] font-sans font-bold tracking-wider text-[#4d463a]/60 uppercase">
                    Visits
                  </span>
                  <span className="font-serif text-xl font-bold text-green-500">{stats.visit}</span>
                </div>
              </div>

              {/* Filters */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#e3e2e1]/60">
                <span className="font-sans text-[10px] font-bold tracking-widest text-[#4d463a] uppercase">
                  Filter layout size:
                </span>
                <div className="flex gap-1.5">
                  {['All', '2000', '2400', '2800', 'Any'].map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setFilterSize(sz)}
                      className={`px-2 py-1 text-[10px] font-sans font-bold tracking-wider rounded-sm border transition-all cursor-pointer ${
                        filterSize === sz
                          ? 'border-[#735b2b] bg-[#735b2b] text-white'
                          : 'border-[#d0c5b6] bg-white text-[#4d463a]/75 hover:border-[#735b2b]'
                      }`}
                    >
                      {sz === 'All' ? 'ALL' : sz === 'Any' ? 'ANY' : `${sz} SFT`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {filteredLeads.length > 0 ? (
                filteredLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="bg-white p-4 rounded-sm border border-[#e3e2e1] shadow-sm relative group/card"
                  >
                    {/* Timestamp & delete icon */}
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="font-mono text-[10px] font-bold text-[#735b2b] uppercase bg-[#735b2b]/5 px-2 py-0.5 rounded-full">
                          {lead.id}
                        </span>
                        <span className="text-[10px] font-sans text-[#4d463a]/60 ml-2">
                          {new Date(lead.createdAt).toLocaleString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDelete(lead.id)}
                        className="text-[#4d463a]/40 hover:text-red-500 p-1 rounded transition-all cursor-pointer"
                        title="Delete Lead"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <h4 className="font-serif text-base font-bold text-[#191C1D] mb-2">{lead.name}</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 border-t border-[#faf9f8] pt-2">
                      <a
                        href={`tel:${lead.phone}`}
                        className="flex items-center gap-1.5 text-xs text-[#4d463a] hover:text-[#735b2b]"
                      >
                        <Phone size={12} className="text-[#D4B47C]" />
                        {lead.phone}
                      </a>
                      <a
                        href={`mailto:${lead.email}`}
                        className="flex items-center gap-1.5 text-xs text-[#4d463a] hover:text-[#735b2b] truncate"
                      >
                        <Mail size={12} className="text-[#D4B47C]" />
                        {lead.email}
                      </a>
                    </div>

                    {/* SFT preferred */}
                    <div className="flex items-center justify-between border-t border-[#e3e2e1]/40 pt-2.5">
                      <span className="font-sans text-[10px] tracking-wider font-bold text-[#4d463a]/60 uppercase">
                        Layout preference: <strong className="text-[#191C1D]">{lead.preferredSize === 'Any' ? 'Any' : `${lead.preferredSize} SFT`}</strong>
                      </span>

                      {/* Status select dropdown */}
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value as Enquiry['status'])}
                        className={`text-[10px] font-sans font-bold tracking-wider uppercase border rounded-sm px-2 py-1 focus:outline-none transition-all ${
                          lead.status === 'New'
                            ? 'border-[#D4B47C] bg-[#735b2b]/5 text-[#735b2b]'
                            : lead.status === 'Contacted'
                            ? 'border-blue-300 bg-blue-50 text-blue-600'
                            : lead.status === 'Visit Scheduled'
                            ? 'border-green-300 bg-green-50 text-green-600'
                            : 'border-gray-300 bg-gray-50 text-gray-600'
                        }`}
                      >
                        <option value="New">New Lead</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Visit Scheduled">Visit Scheduled</option>
                        <option value="Closed">Closed / Sold</option>
                      </select>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-20 border-2 border-dashed border-[#e3e2e1] rounded-sm bg-white p-6">
                  <ShieldAlert size={36} className="text-[#735b2b]/30 mb-3 animate-bounce" />
                  <h4 className="font-serif text-base font-bold text-[#191C1D]">No enquiries found</h4>
                  <p className="font-sans text-xs text-[#4d463a]/70 mt-1 max-w-xs">
                    Configure the Cost Planner and register a test enquiry in the form below to watch submissions load here instantly in real-time.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-[#e3e2e1] text-center text-[10px] font-sans text-[#4d463a]/60">
              *Enquiries are safely synchronized and saved locally to offline-first cache (localStorage).
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
