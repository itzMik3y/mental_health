import { useState } from 'react';
import ResourceSection from '../components/ResourceSection';
import OnlineSupportSection from '../components/OnlineSupportSection';
import { Resource } from '../types/resource';

// Resource type icons
// const CrisisIcon = ({ className }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 20 20">
//     <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"></path>
//   </svg>
// );

// const TherapistIcon = ({ className }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 20 20">
//     <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
//   </svg>
// );

// const SupportGroupIcon = ({ className }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 20 20">
//     <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
//   </svg>
// );

// --- Sample Data ---
const emergencyResources: Resource[] = [
    {
      id: "er1",
      title: "Suicide Prevention Hotline",
      shortDescription:
        "24/7 confidential support for anyone in suicidal crisis or emotional distress.",
      longDescription:
        "Trained counselors are available around the clock to listen, provide coping strategies, and connect callers with local services. If you or someone you know is thinking about suicide, call immediately. International language options available.",
      phone: "888-639-5433",
      iconBgColor: "bg-red-100",
      iconColor: "text-red-600",
      freeService: true,
    },
    {
      id: "er2",
      title: "Mental Health Crisis Team",
      shortDescription:
        "Emergency psychiatric assessment and intervention services available through major hospitals.",
      longDescription:
        "A mobile team of psychiatrists, social workers, and nurses can be dispatched to homes or public locations when someone is a danger to themselves or others. They also operate a 24‑hour walk‑in clinic at Kingston Public Hospital for acute psychiatric crises.",
      phone: "876-930-1152",
      iconBgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      freeService: true,
    },
    {
      id: "er3",
      title: "Domestic Violence Helpline",
      shortDescription:
        "Support for those experiencing domestic violence or abuse in their relationships.",
      longDescription:
        "The helpline offers safety planning, legal advice referrals, and emotional support. Callers can remain anonymous and interpreters are available. Counsellors can arrange emergency shelter placements across Jamaica.",
      phone: "876-929-2997",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      freeService: true,
    },
  ];

  const communityResources: Resource[] = [
    {
      id: "cr1",
      title: "RISE Life Management",
      shortDescription:
        "Counseling, support groups, and community outreach programs for mental health and substance abuse.",
      longDescription:
        "RISE offers evidence‑based cognitive behavioral therapy, art therapy sessions, and after‑school programs for at‑risk youth. Outreach workers regularly visit rural parishes, making mental‑health support accessible island‑wide.",
      phone: "876-967-3777",
      address: "57 East Street, Kingston",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      freeService: true,
      hours: "Mon–Fri 9 AM–5 PM",
      website: "https://www.riselifejamaica.org",
    },
    {
      id: "cr2",
      title: "Jamaica Mental Health Advocacy Network",
      shortDescription:
        "Peer support, advocacy, and educational resources for mental health awareness.",
      longDescription:
        "JMHAN operates virtual peer‑support circles twice a week via Zoom and hosts monthly webinars featuring local psychiatrists. They lobby government for improved services and stigma reduction.",
      email: "jmhadnetwork@gmail.com",
      address: "Kingston & St. Andrew (Virtual Services Available)",
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
      freeService: true,
      website: "https://www.jmhan.org",
    },
    {
      id: "cr3",
      title: "Child Guidance Clinic",
      shortDescription:
        "Mental health services for children and adolescents, including assessment and therapy.",
      longDescription:
        "Operated by the Ministry of Health, clinics provide play therapy, parent training workshops, and psychiatric evaluations. Sliding‑scale fees mean no child is turned away regardless of ability to pay.",
      phone: "876-922-5131",
      address: "Multiple locations across Jamaica",
      iconBgColor: "bg-amber-100",
      iconColor: "text-amber-600",
      freeService: true,
    },
  ];
  

  const affordableCare: Resource[] = [
    {
      id: "ac1",
      title: "Community Counseling Centers",
      shortDescription:
        "Affordable counseling services with fees based on income and ability to pay.",
      longDescription:
        "Centres are staffed by licensed psychologists and supervised interns. Sliding‑scale rates start at JMD $500. WhatsApp video sessions available for persons outside Kingston.",
      pricing: "$500‑2,000 JMD per session",
      address: "Available in most parishes",
      iconBgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
      slidingScale: true,
      hours: "Mon–Sat 8 AM–8 PM",
    },
    {
      id: "ac2",
      title: "University Psychology Clinics",
      shortDescription:
        "Low‑cost therapy provided by supervised psychology graduate students.",
      longDescription:
        "Clients receive evidence‑based treatment overseen by faculty psychologists. The clinics also run group therapy for anxiety and depression that costs JMD $300 per session.",
      pricing: "$500‑2,000 JMD per session",
      address: "UWI Mona, UTech Jamaica",
      iconBgColor: "bg-pink-100",
      iconColor: "text-pink-600",
      lowCost: true,
      hours: "Semester weeks only",
      website: "https://www.mona.uwi.edu/psychclinic",
    },
    {
      id: "ac3",
      title: "Faith‑Based Counseling",
      shortDescription:
        "Pastoral counseling and support groups through churches and religious organizations.",
      longDescription:
        "Services combine spiritual guidance with basic cognitive‑behavioral techniques. Many congregations operate food pantries and emergency relief funds alongside counseling.",
      address: "Churches throughout Jamaica",
      iconBgColor: "bg-lime-100",
      iconColor: "text-lime-600",
      lowCost: true,
      hours: "Varies by parish – call ahead",
    },
  ];

const HelpHubPage = () => {
    const [filter, setFilter] = useState('all');
    const [searchActive, setSearchActive] = useState(false);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-indigo-900 mb-2">Help Hub</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Affordable and free mental health resources in Jamaica. No shame inna seeking help.
                    </p>
                </div>

                {/* Filtering & Search Area */}
                <div className="mb-8 max-w-md mx-auto">
                    <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="mb-4">
                            <label htmlFor="issue-filter" className="sr-only">Filter by Issue</label>
                            <select
                                id="issue-filter"
                                value={filter}
                                onChange={handleFilterChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="all">All Resources</option>
                                <option value="depression">Depression</option>
                                <option value="anxiety">Anxiety</option>
                                <option value="crisis">Crisis Support</option>
                                <option value="addiction">Addiction</option>
                                <option value="youth">Youth Services</option>
                            </select>
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="location-filter" className="sr-only">Filter by Location</label>
                            <select
                                id="location-filter"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="all">All Parishes</option>
                                <option value="kingston">Kingston & St. Andrew</option>
                                <option value="stjames">St. James</option>
                                <option value="stcatherine">St. Catherine</option>
                                <option value="clarendon">Clarendon</option>
                                <option value="manchester">Manchester</option>
                                <option value="online">Online Only</option>
                            </select>
                        </div>
                        
                        <div>
                            <button
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2"
                                onClick={() => setSearchActive(!searchActive)}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                                <span>Find Resources</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Resource Sections */}
                <ResourceSection title="Emergency Resources" resources={emergencyResources} />
                <ResourceSection title="Free Community Resources" resources={communityResources} />
                <ResourceSection title="Affordable Care Options" resources={affordableCare} />
                
                {/* Special Online Support Section */}
                <OnlineSupportSection />

                {/* Need Help Finding Section */}
                <section className="my-10 p-6 bg-blue-800 rounded-lg text-center">
                    <p className="text-white mb-4">Our team can help guide you. Reach out for a confidential consultation.</p>
                    <button className="bg-white text-white hover:bg-blue-100 py-2 px-6 rounded-md font-medium">
                        Contact Support Team
                    </button>
                </section>

                {/* Submit Resource Link */}
                <div className="text-center my-8">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium">
                        Submit a Resource
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HelpHubPage;