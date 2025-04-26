import React, { useState } from 'react';

// Types
interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  youtubeId: string;
  category: string;
  duration: string;
}

const EducationPage: React.FC = () => {
  // State for category filter
  const [activeCategory, setActiveCategory] = useState<string>('all');
  // State for search/filter activation
  const [searchActive, setSearchActive] = useState<boolean>(false);

  // Categories
  const categories = [
    { id: 'all', name: 'All Videos' },
    { id: 'awareness', name: 'Mental Health Awareness' },
    { id: 'coping', name: 'Coping Strategies' },
    { id: 'depression', name: 'Depression' },
    { id: 'anxiety', name: 'Anxiety' },
    { id: 'trauma', name: 'Trauma & PTSD' },
    { id: 'youth', name: 'Youth Mental Health' }
  ];

  // Video data
  const videos: Video[] = [
    {
      id: 'v1',
      title: 'Understanding Depression in Caribbean Communities',
      description: 'Learn about how depression manifests in Caribbean communities and what cultural factors influence mental health perceptions.',
      thumbnailUrl: 'https://img.youtube.com/vi/FKA2D3oH0bo/maxresdefault.jpg', // Replace with actual thumbnail
      youtubeId: 'FKA2D3oH0bo',
      category: 'depression',
      duration: '12:34'
    },
    {
      id: 'v2',
      title: 'Anxiety Management Techniques',
      description: 'Practical techniques to help manage anxiety in daily life, presented by Jamaican mental health professionals.',
      thumbnailUrl: 'https://img.youtube.com/vi/WWloIAQpMcQ/maxresdefault.jpg', // Replace with actual thumbnail
      youtubeId: 'WWloIAQpMcQ',
      category: 'anxiety',
      duration: '8:45'
    },
    {
      id: 'v3',
      title: 'Breaking Mental Health Stigma in Jamaica',
      description: 'A discussion about mental health stigma in Jamaica and how communities can work together to overcome it.',
      thumbnailUrl: 'https://img.youtube.com/vi/eBmBWw_LlTo/maxresdefault.jpg', // Replace with actual thumbnail
      youtubeId: 'eBmBWw_LlTo',
      category: 'awareness',
      duration: '15:20'
    },
    {
      id: 'v4',
      title: 'Mindfulness and Meditation Basics',
      description: 'Learn the fundamentals of mindfulness and meditation practices to improve your mental wellbeing.',
      thumbnailUrl: 'https://img.youtube.com/vi/ZToicYcHIOU/maxresdefault.jpg', // Replace with actual thumbnail
      youtubeId: 'ZToicYcHIOU',
      category: 'coping',
      duration: '10:15'
    },
    {
      id: 'v5',
      title: 'Trauma Recovery: A Caribbean Perspective',
      description: 'Understanding trauma and PTSD through a Caribbean cultural lens, with recovery strategies and resources.',
      thumbnailUrl: 'https://img.youtube.com/vi/q6NPmRWjeUw/maxresdefault.jpg', // Replace with actual thumbnail
      youtubeId: 'q6NPmRWjeUw',
      category: 'trauma',
      duration: '18:30'
    },
    {
      id: 'v6',
      title: 'Supporting Youth Mental Health',
      description: 'How to recognize signs of mental health issues in young people and provide effective support.',
      thumbnailUrl: 'https://img.youtube.com/vi/Uk2pELptaDU/maxresdefault.jpg', // Replace with actual thumbnail
      youtubeId: 'Uk2pELptaDU',
      category: 'youth',
      duration: '14:25'
    },
    {
      id: 'v7',
      title: 'Healthy Coping vs Harmful Coping',
      description: 'Understanding the difference between healthy and harmful coping mechanisms for stress and emotional challenges.',
      thumbnailUrl: 'https://img.youtube.com/vi/9B-wTp2PZH8/maxresdefault.jpg', // Replace with actual thumbnail
      youtubeId: '9B-wTp2PZH8',
      category: 'coping',
      duration: '11:50'
    },
    {
      id: 'v8',
      title: 'Mental Health First Aid Basics',
      description: 'Learn the basics of mental health first aid and how to support someone experiencing a mental health crisis.',
      thumbnailUrl: 'https://img.youtube.com/vi/uuJ0OhPRxJw/maxresdefault.jpg', // Replace with actual thumbnail
      youtubeId: 'uuJ0OhPRxJw',
      category: 'awareness',
      duration: '16:40'
    },
    {
      id: 'v9',
      title: 'Depression in Men: Breaking the Silence',
      description: 'Addressing the unique challenges men face in recognizing and seeking help for depression, with a focus on Caribbean culture.',
      thumbnailUrl: 'https://img.youtube.com/vi/V1RPi2MYptM/maxresdefault.jpg', // Replace with actual thumbnail
      youtubeId: 'V1RPi2MYptM',
      category: 'depression',
      duration: '13:15'
    }
  ];

  // Filter videos based on selected category
  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  // Video modal state
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Mental Health Education</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Watch videos on mental health awareness, coping strategies, and personal experiences to help understand and manage mental wellbeing.
          </p>
        </div>
      </section>

      {/* Filter Panel */}
      <div className="container mx-auto px-4 max-w-6xl pt-6 pb-4">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="mb-4">
            <label htmlFor="category-filter" className="sr-only">Filter by Category</label>
            <select
                id="category-filter"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md  bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label htmlFor="duration-filter" className="sr-only">Filter by Duration</label>
            <select
                id="duration-filter"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
                <option value="all">Any Duration</option>
                <option value="short">Under 10 minutes</option>
                <option value="medium">10-15 minutes</option>
                <option value="long">Over 15 minutes</option>
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
                <span>Find Videos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Category Pills (for larger screens) */}
      <section className="py-4 border-b border-gray-200 bg-white sticky top-0 z-10 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-white hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-6 md:py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
            {activeCategory === 'all' 
              ? 'All Videos' 
              : categories.find(c => c.id === activeCategory)?.name}
          </h2>
          
          {filteredVideos.length === 0 ? (
            <p className="text-gray-600 text-center py-12">No videos found in this category.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredVideos.map(video => (
                <div 
                  key={video.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
                >
                  {/* Video Thumbnail */}
                  <div 
                    className="relative cursor-pointer" 
                    onClick={() => setSelectedVideo(video)}
                  >
                    <img 
                      src={video.thumbnailUrl} 
                      alt={video.title} 
                      className="w-full h-40 sm:h-36 md:h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black bg-opacity-50 flex items-center justify-center">
                        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="p-3 md:p-4 flex-grow flex flex-col">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm md:text-base">
                      {video.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-3 line-clamp-2 md:line-clamp-3 flex-grow">
                      {video.description}
                    </p>
                    <div className="mt-auto">
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {categories.find(c => c.id === video.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-80 flex items-center justify-center p-2 md:p-4">
          <div className="relative bg-white rounded-lg w-full max-w-3xl md:max-w-4xl">
            {/* Close button */}
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-8 md:-top-10 right-0 text-white hover:text-gray-200"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video player */}
            <div className="pt-[56.25%] relative">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video info */}
            <div className="p-3 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{selectedVideo.title}</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">{selectedVideo.description}</p>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {categories.find(c => c.id === selectedVideo.category)?.name}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Resource links */}
      <section className="py-6 md:py-10 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Additional Resources</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-4 md:mb-6 text-sm md:text-base">
            Looking for more information on mental health? Check out these additional resources.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <a 
              href="/help-hub" 
              className="px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition text-sm md:text-base"
            >
              Visit Help Hub
            </a>
            <a 
              href="/stories" 
              className="px-4 md:px-6 py-2 md:py-3 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-900 transition text-sm md:text-base"
            >
              Read Personal Stories
            </a>
          </div>
        </div>
      </section>

      {/* Need Help Finding Section */}
      <section className="my-6 md:my-10 mx-4 md:mx-auto max-w-4xl p-4 md:p-6 bg-blue-800 rounded-lg text-center">
        <p className="text-white mb-3 md:mb-4 text-sm md:text-base">Need help finding the right resources? Our team can guide you.</p>
        <button className="bg-white text-white hover:bg-blue-100 py-2 px-4 md:px-6 rounded-md font-medium text-sm md:text-base">
          Contact Support Team
        </button>
      </section>
    </div>
  );
};

export default EducationPage;