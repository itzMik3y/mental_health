import React, { useState, useEffect } from 'react';
import ConfessionCard from '../components/ConfessionCards';
import ConfessionForm from '../components/ConfessionForm';
import { Confession } from '../types/confessionTypes';
import { confessionService } from '../data/confessionService';

// Filter button component
interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium ${
      active
        ? 'bg-blue-600 text-white'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    } transition-colors duration-200`}
  >
    {children}
  </button>
);

const ConfessionsPage: React.FC = () => {
  // State for confessions data
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Filter state
  const [filter, setFilter] = useState<'all' | 'popular'>('all');
  
  // Load confessions on mount
  useEffect(() => {
    const loadConfessions = async () => {
      setIsLoading(true);
      try {
        const data = await confessionService.getFilteredConfessions(filter);
        setConfessions(data);
      } catch (error) {
        console.error("Failed to load confessions:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadConfessions();
  }, [filter]);
  
  // Handle new confession submission
  const handleSubmitConfession = async (confessionText: string, isAnonymous: boolean, username: string) => {
    try {
      // Create new confession object
      const confessionData = {
        text: confessionText,
        username: username,
        timestamp: new Date().toISOString(),
        likes: 0,
        comments: 0,
        isAnonymous: isAnonymous
      };
      
      // Save to service
      const newConfession = await confessionService.addConfession(confessionData);
      
      // Update state with new confession at the beginning
      setConfessions([newConfession, ...confessions]);
    } catch (error) {
      console.error("Failed to submit confession:", error);
    }
  };
  
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Mental Health Confessions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A safe space to share your thoughts, feelings, and experiences anonymously.
            No judgment, just support from others who understand.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Form */}
          <div className="md:w-1/3">
            <ConfessionForm onSubmit={handleSubmitConfession} />
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">About This Space</h3>
              <p className="text-gray-700 text-sm mb-4">
                Mental health confessions is a safe space for Jamaicans to share their 
                mental health experiences anonymously. Your stories can help others feel less alone.
              </p>
              <h4 className="font-medium text-gray-800 mb-2 text-sm">Guidelines:</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                <li>Be respectful and supportive</li>
                <li>No hate speech or bullying</li>
                <li>Don't include personally identifiable information</li>
                <li>If in crisis, please call our hotline: 888-639-5433</li>
              </ul>
            </div>
          </div>
          
          {/* Right Column - Confessions Feed */}
          <div className="md:w-2/3">
            {/* Filters */}
            <div className="flex mb-6 space-x-2 overflow-x-auto pb-2">
              <FilterButton 
                active={filter === 'all'} 
                onClick={() => setFilter('all')}
              >
                Recent
              </FilterButton>
              <FilterButton 
                active={filter === 'popular'} 
                onClick={() => setFilter('popular')}
              >
                Popular
              </FilterButton>
            </div>
            
            {/* Loading State */}
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
              </div>
            ) : confessions.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">No confessions yet. Be the first to share!</p>
              </div>
            ) : (
              /* Confessions List */
              <div className="space-y-4">
                {confessions.map(confession => (
                  <ConfessionCard
                    key={confession.id}
                    confession={confession}
                  />
                ))}
                
                {/* Load More Button */}
                {confessions.length >= 5 && (
                  <div className="text-center mt-8">
                    <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md font-medium hover:bg-gray-200 transition">
                      Load More
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfessionsPage;