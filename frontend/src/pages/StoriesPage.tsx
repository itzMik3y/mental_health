import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { storyData, Story } from '../data/storyData';

// Icons
const VideoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8H5v-2h10v2z"></path>
    <path d="M15 7l-3 3 3 3V7z"></path>
  </svg>
);

const AudioIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd"></path>
  </svg>
);

const Avatar: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img className="w-8 h-8 rounded-full object-cover" src={src} alt={alt} />
);

// Filter Button Component
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
        : 'bg-gray-100 text-white hover:bg-gray-200'
    } transition-colors duration-200`}
  >
    {children}
  </button>
);

const StoriesPage: React.FC = () => {
  // State for filters
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [filteredStories, setFilteredStories] = useState<Story[]>(storyData);

  // Update filtered stories when filters change
  useEffect(() => {
    let result = [...storyData];
    
    // Apply category filter
    if (categoryFilter !== 'all') {
      result = result.filter(story => 
        story.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }
    
    // Apply type filter
    if (typeFilter !== 'all') {
      result = result.filter(story => story.type === typeFilter);
    }
    
    // Sort by publish date (newest first)
    result.sort((a, b) => 
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
    
    setFilteredStories(result);
  }, [categoryFilter, typeFilter]);

  // Extract unique categories for filter buttons
  const categories = ['all', ...new Set(storyData.map(story => story.category.toLowerCase()))];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Stories</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Real experiences from Jamaicans who've struggled with mental health challenges.
            We share these stories to build understanding and reduce stigma.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-sm font-medium text-gray-700 mb-2">Filter by:</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <FilterButton
                    key={category}
                    active={categoryFilter === category}
                    onClick={() => setCategoryFilter(category)}
                  >
                    {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </FilterButton>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-medium text-gray-700 mb-2">Format:</h2>
              <div className="flex flex-wrap gap-2">
                <FilterButton
                  active={typeFilter === 'all'}
                  onClick={() => setTypeFilter('all')}
                >
                  All
                </FilterButton>
                <FilterButton
                  active={typeFilter === 'written'}
                  onClick={() => setTypeFilter('written')}
                >
                  Written
                </FilterButton>
                <FilterButton
                  active={typeFilter === 'video'}
                  onClick={() => setTypeFilter('video')}
                >
                  Video
                </FilterButton>
                <FilterButton
                  active={typeFilter === 'audio'}
                  onClick={() => setTypeFilter('audio')}
                >
                  Audio
                </FilterButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredStories.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No stories match your filters</h3>
              <button 
                onClick={() => {setCategoryFilter('all'); setTypeFilter('all');}}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col h-full"
                >
                  {/* Card Image/Thumbnail */}
                  <div className="relative">
                    <img 
                      src={story.imgSrc} 
                      alt={story.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 rounded text-xs font-semibold px-2 py-1 bg-white text-gray-800 flex items-center">
                      {story.type === 'video' && <VideoIcon className="w-3 h-3 mr-1" />}
                      {story.type === 'audio' && <AudioIcon className="w-3 h-3 mr-1" />}
                      {story.type.charAt(0).toUpperCase() + story.type.slice(1)}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    {/* Category */}
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full self-start mb-3 ${story.categoryColor}`}>
                      {story.category}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      {story.title}
                    </h3>
                    
                    {/* Snippet */}
                    <p className="text-sm text-gray-600 mb-4 flex-grow">
                      {story.snippet}
                    </p>
                    
                    {/* Footer */}
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                      {/* Author */}
                      <div className="flex items-center space-x-2">
                        <Avatar src={story.avatarSrc} alt={story.authorName} />
                        <div className="flex flex-col">
                          <span className="text-xs font-medium">{story.authorName}</span>
                          <span className="text-xs text-gray-500">{story.authorAge} years old</span>
                        </div>
                      </div>
                      
                      {/* Link */}
                      <Link 
                        to={`/stories/${story.slug}`} 
                        className="flex items-center text-xs font-medium text-blue-600 hover:text-blue-800"
                      >
                        {story.type === 'video' 
                          ? 'Watch Story' 
                          : story.type === 'audio' 
                            ? 'Listen to Story' 
                            : 'Read Story'}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Share Your Story</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Your experience matters and could help someone else feel less alone. Share your mental health journey with our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/submit-story" 
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
            >
              Submit Written Story
            </Link>
            <Link 
              to="/record-story" 
              className="px-6 py-3 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-900 transition"
            >
              Record Video/Audio
            </Link>
          </div>
        </div>
      </section>

      {/* Pagination - Optional */}
      {/* 
      <div className="container mx-auto px-4 flex justify-center mt-8 mb-16">
        <nav className="flex items-center space-x-2">
          <a href="#" className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">Previous</a>
          <a href="#" className="px-3 py-1 rounded bg-blue-600 text-white">1</a>
          <a href="#" className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">2</a>
          <a href="#" className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">3</a>
          <a href="#" className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">Next</a>
        </nav>
      </div>
      */}
    </div>
  );
};

export default StoriesPage;