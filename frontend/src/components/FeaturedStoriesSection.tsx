import React from 'react';
import { Link } from 'react-router-dom';
import { storyData } from '../data/storyData'; // Adjust the import path as necessary

// Icons
const VideoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8H5v-2h10v2z" clipRule="evenodd"></path>
    <path d="M15 7l-3 3 3 3V7z"></path>
  </svg>
);

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
  </svg>
);

const Avatar: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img className="w-6 h-6 rounded-full object-cover" src={src} alt={alt} />
);

const FeaturedStoriesSection: React.FC = () => {
  // Filter for featured stories only (max 3)
  const featuredStories = storyData.filter(story => story.featured).slice(0, 3);

  return (
    <section id="stories" className="py-16 lg:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Stories
          </h2>
          <Link to="/stories" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
            View All Stories &rarr;
          </Link>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col"
            >
              {/* Image or Video Placeholder */}
              <div className="relative">
                {story.type === 'written' && story.imgSrc && (
                  <img src={story.imgSrc} alt={story.title} className="w-full h-48 object-cover" />
                )}
                {story.type === 'video' && (
                  <div className={`w-full h-48 flex items-center justify-center ${story.videoPlaceholderBg || 'bg-gray-200'}`}>
                    <VideoIcon className="w-16 h-16 text-white opacity-75" />
                  </div>
                )}
                <div className="absolute top-2 right-2 rounded text-xs font-semibold px-2 py-1 bg-white text-gray-800">
                  {story.type === 'video' ? 'Video' : 'Written'}
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Category Tag */}
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full self-start mb-3 ${story.categoryColor}`}>
                  {story.category}
                </span>

                {/* Story Title */}
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {story.title}
                </h3>

                {/* Story Snippet */}
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {story.snippet}
                </p>

                {/* Footer: Author Info & Watch/Read Link */}
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  {/* Author */}
                  <div className="flex items-center space-x-2">
                    <Avatar src={story.avatarSrc} alt={story.authorName} />
                    <span className="text-xs text-gray-500">
                      {story.authorName}, {story.authorAge}
                    </span>
                  </div>
                  
                  {/* Watch/Read Link */}
                  <Link 
                    to={`/stories/${story.slug}`} 
                    className="flex items-center text-xs font-medium text-blue-600 hover:text-blue-800"
                  >
                    {story.type === 'video' ? (
                      <>
                        <PlayIcon className="w-4 h-4 mr-1" />
                        Watch
                      </>
                    ) : (
                      <>Read</>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStoriesSection;