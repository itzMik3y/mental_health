import React from 'react';


// --- Include or Import the Placeholder Icons ---
const CloudRainIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M15.75 8a5.76 5.76 0 00-11.46 1.227 6.75 6.75 0 00.12 13.273h11.22a6.75 6.75 0 00.12-13.273A5.76 5.76 0 0015.75 8zM8.91 14.3a.75.75 0 011.06 0l1.5 1.5a.75.75 0 01-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06zm3.6-2.24a.75.75 0 00-1.06 0l-1.5 1.5a.75.75 0 001.06 1.06l1.5-1.5a.75.75 0 000-1.06z" clipRule="evenodd"></path></svg> );
const LightningIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5.268l4.146-4.147a1 1 0 111.414 1.414L13.414 8.68l4.53 4.531a1 1 0 01-1.414 1.414L12 10.094V18a1 1 0 01-1.664.748l-7-10A1 1 0 013 8h4.683L6.46 3.854a1 1 0 011.414-1.414L11.3 1.046z" clipRule="evenodd"></path></svg> );
const BrainIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 5a1 1 0 011 1v1h4V6a1 1 0 112 0v1h1a1 1 0 011 1v2h1a1 1 0 110 2h-1v1a1 1 0 01-1 1h-1v1a1 1 0 01-2 0v-1H8v1a1 1 0 01-2 0v-1H5a1 1 0 01-1-1v-1H3a1 1 0 110-2h1V8a1 1 0 011-1h1V6a1 1 0 011-1zm2 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path><path d="M8 9a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm-2 3a1 1 0 100 2 1 1 0 000-2z"></path></svg> );
// -------------------------------------------------

interface InfoCardData {
  icon: React.FC<{ className?: string }>;
  bannerBgColor: string; // e.g., 'bg-emerald-100'
  iconColor: string;     // e.g., 'text-emerald-700'
  title: string;
  description: string;
  link: string;
}

const UnderstandingSection: React.FC = () => {
  const cards: InfoCardData[] = [
    {
      icon: CloudRainIcon,
      bannerBgColor: 'bg-emerald-100',
      iconColor: 'text-emerald-700',
      title: "Depression: More Dan Just Feeling Sad",
      description: "Learn about the signs of depression, how it affects daily life, and why it's not just \"feeling sad\" or something you can \"shake off.\"",
      link: "https://www.psychiatry.org/patients-families/depression/what-is-depression"
    },
    {
      icon: LightningIcon,
      bannerBgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-700',
      title: "Anxiety: When Worry Tek Control",
      description: "Understand the difference between everyday stress and anxiety disorders, and learn coping strategies that work in a Jamaican context.",
      link: "https://medlineplus.gov/anxiety.html"
    },
    {
      icon: BrainIcon,
      bannerBgColor: 'bg-blue-100',
      iconColor: 'text-blue-700',
      title: "Schizophrenia: Beyond Di Myths",
      description: "Separate fact from fiction about schizophrenia and learn how proper treatment can help people live full, productive lives.",
      link: "https://www.psychiatry.org/patients-families/schizophrenia/what-is-schizophrenia"
    },
  ];

  return (
    <section id="health" className="py-16 lg:py-24 bg-white"> {/* Changed background to white */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Understanding Mental Health
          </h2>
          <p className="text-lg text-gray-600">
            Education is the first step to breaking stigma. Learn about common mental health conditions and how they affect people in Jamaica.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              // Card styling
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col"
            >
              {/* Top Banner with Icon */}
              <div className={`p-4 rounded-t-md ${card.bannerBgColor}`}>
                <card.icon className={`w-8 h-8 ${card.iconColor}`} />
              </div>

              {/* Card Content Area */}
              <div className="p-6 flex flex-col flex-grow"> {/* Padding below banner */}
                {/* Card Title */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-base text-gray-600 mb-4 flex-grow">
                  {card.description}
                </p>

                {/* Read More Link */}
                <a
                  href={card.link}
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 mt-auto self-end" // Aligned to bottom-right
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Button */}
        {/* <div className="text-center">
            <Button variant="primary">
                Explore All Articles
            </Button>
        </div> */}

      </div>
    </section>
  );
};

export default UnderstandingSection;