export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  preferredSize: string; // "2000" | "2400" | "2800" | "Any"
  budget?: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Visit Scheduled' | 'Closed';
}

export interface Amenity {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface LocationHighlight {
  category: 'Work' | 'Healthcare' | 'Connectivity';
  title: string;
  details: string;
}

export interface SpecificationItem {
  category: string;
  title: string;
  details: string;
}
