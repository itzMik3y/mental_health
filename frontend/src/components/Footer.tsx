import React from 'react';
import Button from './Button'; // Assuming Button component exists

// --- Include or import placeholder icons ---
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.2 406.3c-33.8-94.2-128.9-172.7-233.9-187.9-131.5-19.1-526-19.1-657.4 0-105 15.2-200.1 93.8-233.9 187.9-19.1 53.2-19.1 175.9 0 229.1 33.8 94.2 128.9 172.7 233.9 187.9 131.5 19.1 526 19.1 657.4 0 105-15.2 200.1-93.8 233.9-187.9 19.1-53.1 19.1-175.9 0-229.1zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.4-399.7c-26.2 0-47.4-21.2-47.4-47.4s21.2-47.4 47.4-47.4 47.4 21.2 47.4 47.4-21.2 47.4-47.4 47.4z"></path></svg> );
const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M938 499.2c0-101.6-.2-296.2-138.6-296.2H675V96h-144v107H387.4V96h-144v107H90.8C29 203 0 245 0 374v276c0 129 29 171 90.8 171h152.6V548H90.8V410h152.6V203h144v207h144V203h144v207h163.4V499.2M713 829H311V548h402v281z"></path></svg> );
const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.6-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.1 30.1 111.4 76 142.1a169.91 169.91 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.8 180.8 0 0 1-44.9 5.7 170.3 170.3 0 0 1-32.2-3.1c21.7 67.9 84.8 117.3 159.4 118.6a341.33 341.33 0 0 1-211.2 73.1 353.65 353.65 0 0 1-40.8-2.1c69.7 45.1 152.9 71.4 242.7 71.4 290.2 0 449.2-240.1 449.2-449.1 0-6.8-.2-13.7-.4-20.5 30.9-22.1 57.7-49.6 79-79.9z"></path></svg> );
const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c21.3 70.1 73.4 90.1 148.5 96.6 70.4 18.9 424.7 18.9 424.7 18.9s280.2 0 350.1-18.7c75.1-6.5 127.2-26.5 148.5-96.6C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path></svg> );
const MailIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> );
const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg> );
const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg> );
const LogoIcon: React.FC = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2"><circle cx="12" cy="12" r="10" fill="#34D399"/> </svg>);
// -----------------------------------------

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    // Define link styles for reuse
    const linkStyle = "text-sm text-gray-600 hover:text-brand-green transition duration-150 ease-in-out";
    const titleStyle = "text-base font-semibold text-gray-900 mb-4";
    const iconStyle = "w-5 h-5"; // For top section social icons
    const smallIconStyle = "w-4 h-4"; // For footer social/contact icons

    return (
        <>
            {/* === Top Green Section: Join Di Movement === */}
            {/* Use brand-green defined in config, or a default like emerald-600 */}
            <section className="bg-teal-700  text-white py-12 lg:py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Di Movement</h2>
                    <p className="max-w-2xl mx-auto mb-8 text-gray-100">
                        Help us break the stigma around mental health in Jamaica. Sign up for our newsletter to get updates, resources, and inspiration.
                    </p>

                    {/* Newsletter Form */}
                    <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-lg mx-auto mb-8">
                        <label htmlFor="footer-email" className="sr-only">Email address</label>
                        <input
                            type="email"
                            id="footer-email"
                            required
                            placeholder="Your email address"
                            // Slightly darker green input - adjust colors as needed
                            className="w-full sm:flex-grow px-4 py-2 rounded-md bg-emerald-700 text-white placeholder-gray-300 border border-emerald-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                        />
                        <Button type="submit" variant="primary" className="w-full sm:w-auto flex-shrink-0">
                            Subscribe
                        </Button>
                    </form>

                    {/* Social Icons (Top Section) */}
                    <div className="flex justify-center space-x-6">
                        <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity"><InstagramIcon className={iconStyle} /></a>
                        <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity"><FacebookIcon className={iconStyle} /></a>
                        <a href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity"><TwitterIcon className={iconStyle} /></a>
                        <a href="#" aria-label="YouTube" className="hover:opacity-80 transition-opacity"><YoutubeIcon className={iconStyle} /></a>
                    </div>
                </div>
            </section>

            {/* === Bottom White Section: Main Footer === */}
            <footer className="bg-white text-gray-600 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    {/* 4-Column Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

                        {/* Column 1: Logo, Desc, Social */}
                        <div className="space-y-4">
                            <a href="#" className="flex items-center text-lg font-bold text-gray-800 hover:text-brand-green">
                                <LogoIcon />
                                No Shame Inna Mi Mind
                            </a>
                            <p className="text-sm">
                                Breaking the silence around mental health in Jamaica, one story at a time.
                            </p>
                            <div className="flex space-x-4">
                                {/* Smaller, darker icons */}
                                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-brand-green"><InstagramIcon className={smallIconStyle} /></a>
                                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-brand-green"><FacebookIcon className={smallIconStyle} /></a>
                                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-brand-green"><TwitterIcon className={smallIconStyle} /></a>
                                <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-brand-green"><YoutubeIcon className={smallIconStyle} /></a>
                            </div>
                        </div>

                        {/* Column 2: Site Links */}
                        <div>
                            <h5 className={titleStyle}>Quick Links</h5>
                            <ul className="space-y-2">
                                <li><a href="#" className={linkStyle}>Home</a></li>
                                <li><a href="#stories" className={linkStyle}>Stories</a></li>
                                <li><a href="#health" className={linkStyle}>Education</a></li>
                                <li><a href="#help" className={linkStyle}>Help Hub</a></li>
                                <li><a href="#" className={linkStyle}>Voices</a></li>
                                <li><a href="#" className={linkStyle}>Interactive</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Resource Links */}
                         <div>
                            <h5 className={titleStyle}>Resources</h5>
                            <ul className="space-y-2">
                                <li><a href="tel:888-639-5433" className={linkStyle}>Mental Health Crisis Hotline</a></li>
                                <li><a href="#" className={linkStyle}>Child Guidance Clinics</a></li>
                                <li><a href="#" className={linkStyle}>RISE Life Management</a></li>
                                <li><a href="#" className={linkStyle}>Jamaica Mental Health Advocacy</a></li>
                                <li><a href="#" className={linkStyle}>Support Groups</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Contact Info */}
                        <div>
                            <h5 className={titleStyle}>Contact Us</h5>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-2">
                                    <MailIcon className={`flex-shrink-0 ${smallIconStyle} mt-1 text-gray-400`} />
                                    <a href="mailto:info@noshameinnamiind.org" className={linkStyle}>info@noshameinnamiind.org</a>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <PhoneIcon className={`flex-shrink-0 ${smallIconStyle} mt-1 text-gray-400`} />
                                    <a href="tel:876-123-4567" className={linkStyle}>876-123-4567</a>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <MapPinIcon className={`flex-shrink-0 ${smallIconStyle} mt-1 text-gray-400`} />
                                    {/* Using current location from context */}
                                    <span className={linkStyle}>Kingston, Jamaica</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 pt-8">
                        {/* Copyright & Legal Links */}
                        <div className="text-center sm:flex sm:justify-between sm:items-center">
                             <p className="text-sm text-gray-500 mb-4 sm:mb-0">
                                &copy; {currentYear} No Shame Inna Mi Mind. All rights reserved.
                             </p>
                             <div className="flex justify-center space-x-4">
                                <a href="#" className="text-sm text-gray-500 hover:text-brand-green">Privacy Policy</a>
                                <a href="#" className="text-sm text-gray-500 hover:text-brand-green">Terms of Service</a>
                                <a href="#" className="text-sm text-gray-500 hover:text-brand-green">Cookie Policy</a>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;