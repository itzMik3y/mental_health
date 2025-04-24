import React from 'react';

// Placeholder Icons (replace with actual icons like FontAwesome or Heroicons)
const LinkedinIcon: React.FC = () => <span className="text-gray-500 hover:text-blue-600">LI</span>;
const TwitterIcon: React.FC = () => <span className="text-gray-500 hover:text-sky-500">TW</span>;

const TeamSection: React.FC = () => {
    // Replace with actual team member data and image URLs
    const teamMembers = [
        { name: "Dr. Evelyn Reed", title: "Clinical Psychologist", img: "https://placehold.co/150x150/a7f3d0/1e40af?text=ER", description: "Specializes in CBT and trauma-informed care. Passionate about destigmatizing mental health." },
        { name: "Mark Chen", title: "Community Manager", img: "https://placehold.co/150x150/bae6fd/4338ca?text=MC", description: "Connects our users with resources and fosters a supportive online community environment." },
        { name: "Aisha Khan", title: "Lead Content Strategist", img: "https://placehold.co/150x150/fecaca/9d174d?text=AK", description: "Develops informative and empathetic content to educate and support our audience." },
    ];

    return (
        <section id="team" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12 text-gray-800">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-brand-green"/>
                            <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                            <p className="text-brand-green font-medium mb-3">{member.title}</p>
                            <p className="text-gray-600 mb-4 text-sm">{member.description}</p>
                            <div className="flex justify-center space-x-3">
                                <a href="#" aria-label={`${member.name} on LinkedIn`}><LinkedinIcon /></a>
                                <a href="#" aria-label={`${member.name} on Twitter`}><TwitterIcon /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;