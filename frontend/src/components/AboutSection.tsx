import React from 'react';

// --- Include or Import the Placeholder Icons from above ---
const HeartIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg> );
const EyeIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg> );
const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.23l4.047.587a1 1 0 01.554 1.705l-2.93 2.856.692 4.031a1 1 0 01-1.451 1.054L12 15.587l-3.617 1.899a1 1 0 01-1.451-1.054l.692-4.031-2.93-2.856a1 1 0 01.554-1.705l4.047-.587L11.033 2.744A1 1 0 0112 2z" clipRule="evenodd"></path></svg> );
// -----------------------------------------------------------

interface CardData {
  icon: React.FC<{ className?: string }>;
  iconBgColor: string; // e.g., 'bg-green-100'
  iconFgColor: string; // e.g., 'text-green-600'
  borderColor: string; // e.g., 'border-green-500'
  title: string;
  description: string;
}

const AboutSection: React.FC = () => {
  const cards: CardData[] = [
    {
      icon: HeartIcon,
      iconBgColor: 'bg-emerald-100', // Using emerald for a green shade
      iconFgColor: 'text-emerald-600',
      borderColor: 'border-emerald-500',
      title: "Our Mission",
      description: "To create a safe space where Jamaicans can share their mental health experiences without fear of judgment, and connect with resources that can help."
    },
    {
      icon: EyeIcon,
      iconBgColor: 'bg-amber-100',
      iconFgColor: 'text-amber-600',
      borderColor: 'border-amber-500',
      title: "Our Vision",
      description: "A Jamaica where mental health is treated with the same importance as physical health, and where everyone has access to the support they need."
    },
    {
      icon: SparklesIcon,
      iconBgColor: 'bg-blue-100',
      iconFgColor: 'text-blue-600',
      borderColor: 'border-blue-500',
      title: "Our Values",
      description: "Compassion, authenticity, and respect guide everything we do. We believe in the power of community and the healing that comes from shared experiences."
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50"> {/* Standard padding */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            About Di Movement
          </h2>
          <p className="text-lg text-gray-600">
            No Shame Inna Mi Mind is a community-driven platform dedicated to changing how we talk about mental health in Jamaica. We believe that by sharing our stories, we can break down stigma and build understanding.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              // Card styling with top border, rounded corners, shadow
              className={`bg-white rounded-lg shadow-md overflow-hidden border-t-4 ${card.borderColor}`}
            >
              <div className="p-6 lg:p-8 text-center"> {/* Padding inside the card */}
                {/* Icon */}
                <div className={`w-16 h-16 p-3 rounded-full inline-flex items-center justify-center mb-6 ${card.iconBgColor}`}>
                   <card.icon className={`w-8 h-8 ${card.iconFgColor}`} />
                </div>

                {/* Card Title */}
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-gray-900">
                    {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-600 text-left"> {/* Description text left-aligned */}
                    {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;