import React from 'react';
import Button from './Button'; // Import updated Button

// --- Include or import placeholder icons ---
const PhoneIconSolid: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg> );
const UsersIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0110 11.83c0 .34.024.673.07 1a.97.97 0 01-1.94 0c-.046.327-.07.66-.07 1 0 1.03.204 2 .778 3.22A10.01 10.01 0 0010 19c.7 0 1.37-.094 2-.26-.045-.326-.075-.66-.075-1a6.97 6.97 0 011.5-4.33A5.01 5.01 0 0012 11.83c0-.34-.024-.673-.07-1 .97.03.94.03 1.94 0 .045-.327.07-.66.07-.998z"></path></svg> );
// ------------------------------------------

// Custom List Item component for green bullets
const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="relative pl-6 text-gray-700">
        <span className="absolute left-0 top-1.5 w-2 h-2 bg-brand-green rounded-full"></span>
        {children}
    </li>
);


const NeedHelpSection: React.FC = () => {
    return (
        // Using brand-green-dark defined in tailwind.config.js or a default like teal-800
        <section id="help" className="py-16 lg:py-24 bg-[#0D9488] text-white">
            <div className="container mx-auto px-4">
                 {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Need Help? We're Here
                    </h2>
                    <p className="text-lg text-gray-200"> {/* Lighter text color */}
                        Finding affordable mental health support in Jamaica shouldn't be hard. Here are resources that can help right now.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

                    {/* Card 1: Emergency Support */}
                    <div className="bg-white p-8 rounded-lg text-gray-900 flex flex-col">
                        <div className="flex items-start space-x-4 mb-5">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                                <PhoneIconSolid className="w-6 h-6 text-red-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Emergency Support</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    If you or someone you know is in immediate danger or having thoughts of suicide, please reach out now:
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-6 text-sm">
                           <ListItem>Mental Health Crisis Hotline: <a href="tel:888-639-5433" className="font-medium text-brand-green hover:underline">888-639-5433</a></ListItem>
                           <ListItem>Choose Life International: <a href="tel:876-920-7487" className="font-medium text-brand-green hover:underline">876-920-7487</a></ListItem>
                        </ul>

                        <div className="mt-auto"> {/* Pushes button to bottom */}
                            <Button variant="primary">
                                Call Now
                            </Button>
                            {/* Note: The 'Call Now' button might need JS to dial the primary number, or link to 'tel:' */}
                        </div>
                    </div>

                    {/* Card 2: Free & Affordable Resources */}
                    <div className="bg-white p-8 rounded-lg text-gray-900 flex flex-col">
                         <div className="flex items-start space-x-4 mb-5">
                             <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                                <UsersIcon className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Free & Affordable Resources</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    These organizations offer low-cost or free mental health services across Jamaica:
                                </p>
                            </div>
                        </div>

                         <ul className="space-y-3 mb-6 text-sm">
                           <ListItem>Child Guidance Clinics (nationwide)</ListItem>
                           <ListItem>RISE Life Management Services</ListItem>
                           <ListItem>Jamaica Mental Health Advocacy Network</ListItem>
                        </ul>

                         <div className="mt-auto"> {/* Pushes button to bottom */}
                            <Button variant="primary" className="self-start"> {/* Align button left */}
                                View Full Directory
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NeedHelpSection;