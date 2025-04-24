import React from 'react';
import Button from './Button';

const ShareThoughtsSection: React.FC = () => {
    return (
        <section id="contact" className="py-16 bg-teal-50">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Share Your Thoughts</h2>
                    <p className="text-center text-gray-600 mb-8">We value your feedback and suggestions. Let us know how we can improve.</p>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name (Optional)</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email (Optional)</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green"
                                placeholder="Tell us what you think..."
                            ></textarea>
                        </div>
                         <div>
                            <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">Overall Rating</label>
                            {/* Basic Rating - Replace with a star rating component if needed */}
                            <select id="rating" name="rating" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green bg-white">
                                <option>Select Rating</option>
                                <option value="5">5 - Excellent</option>
                                <option value="4">4 - Good</option>
                                <option value="3">3 - Average</option>
                                <option value="2">2 - Fair</option>
                                <option value="1">1 - Poor</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <Button type="submit">Submit Feedback</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ShareThoughtsSection;