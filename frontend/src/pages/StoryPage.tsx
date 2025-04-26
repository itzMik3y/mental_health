import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getStoryBySlug, Story } from '../data/storyData';

// Video Player Component
// Video Player Component
const VideoPlayer: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
    // Check if it's a YouTube URL
    const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
    
    if (isYouTube) {
      // Extract video ID or use the whole embed URL
      // This is a simple check - might need enhancement for various YouTube URL formats
      let embedUrl = videoUrl;
      if (videoUrl.includes('watch?v=')) {
        const videoId = videoUrl.split('watch?v=')[1].split('&')[0];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      } else if (videoUrl.includes('youtu.be/')) {
        const videoId = videoUrl.split('youtu.be/')[1];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
      
      return (
        <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-black">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
    
    // Regular video file
    return (
      <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-black">
        <video 
          className="absolute inset-0 w-full h-full"
          controls
          poster="/images/video-placeholder.jpg"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
// Audio Player Component 
const AudioPlayer: React.FC<{ audioUrl: string }> = ({ audioUrl }) => (
  <div className="bg-gray-100 rounded-lg p-4">
    <audio 
      className="w-full" 
      controls
    >
      <source src={audioUrl} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
);

// Author Card Component
const AuthorCard: React.FC<{ story: Story }> = ({ story }) => (
  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
    <img 
      src={story.avatarSrc} 
      alt={story.authorName} 
      className="w-16 h-16 rounded-full object-cover"
    />
    <div>
      <h3 className="font-medium text-gray-900">{story.authorName}</h3>
      <p className="text-gray-600 text-sm">{story.authorAge} years old</p>
      <p className="text-gray-500 text-xs mt-1">
        Published on {new Date(story.publishDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
    </div>
  </div>
);

// Related Stories Component
const RelatedStories: React.FC<{ currentStoryId: number; category: string }> = ({ currentStoryId, category }) => {
  const [relatedStories, setRelatedStories] = useState<Story[]>([]);
  
  useEffect(() => {
    // Import function to get stories by category
    import('../data/storyData').then(module => {
      const { getStoriesByCategory } = module;
      // Get stories in the same category, excluding current story
      const stories = getStoriesByCategory(category)
        .filter(story => story.id !== currentStoryId)
        .slice(0, 3); // Limit to 3 stories
      
      setRelatedStories(stories);
    });
  }, [currentStoryId, category]);
  
  if (relatedStories.length === 0) return null;
  
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Related Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedStories.map(story => (
          <Link 
            key={story.id}
            to={`/stories/${story.slug}`}
            className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <img 
              src={story.imgSrc} 
              alt={story.title} 
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${story.categoryColor}`}>
                {story.category}
              </span>
              <h3 className="font-medium mt-2 text-gray-900">{story.title}</h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">{story.snippet}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const StoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    setLoading(true);
    
    if (!slug) {
      setError('Story not found');
      setLoading(false);
      return;
    }
    
    const foundStory = getStoryBySlug(slug);
    if (foundStory) {
      setStory(foundStory);
      setError(null);
      
      // Update page title
      document.title = `${foundStory.title} - No Shame Inna Mi Mind`;
    } else {
      setStory(null);
      setError('Story not found');
    }
    
    setLoading(false);
  }, [slug]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  if (error || !story) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Sorry, {error}</h1>
        <p className="text-gray-600 mb-6">The story you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/stories" 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Browse All Stories
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Story Header */}
      {/* Story Header */}
    <header className="bg-blue-700 text-white py-16 md:py-20"> {/* Increased padding */}
    <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto ">
            <Link 
                to="/stories" 
                className="inline-flex items-center text-white hover:text-white mb-8 absolute left-0 top-0.5" // Increased margin-bottom
            >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Stories
            </Link>
            
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-opacity-20 bg-white ${story.categoryColor.replace('bg-', 'text-')}`}>
                {story.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl font-bold mt-4">{story.title}</h1> {/* Added margin-top */}
        </div>
    </div>
    </header>
      {/* Story Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Media Section */}
            {story.type === 'video' && story.videoUrl && (
              <div className="mb-8">
                <VideoPlayer videoUrl={story.videoUrl} />
              </div>
            )}
            
            {story.type === 'audio' && story.audioUrl && (
              <div className="mb-8">
                <AudioPlayer audioUrl={story.audioUrl} />
              </div>
            )}
            
            {(story.type === 'written' || !story.videoUrl && !story.audioUrl) && (
              <div className="mb-8">
                <img 
                  src={story.imgSrc} 
                  alt={story.title} 
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
                />
              </div>
            )}
            
            {/* Author Information */}
            <div className="mb-8">
              <AuthorCard story={story} />
            </div>
            
            {/* Written Content */}
            {story.fullContent && (
              <div className="prose prose-lg max-w-none">
                {story.fullContent.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-gray-800">{paragraph}</p>
                ))}
              </div>
            )}
            
            {/* Share Story */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium mb-3">Share this story</h3>
              <div className="flex space-x-4">
                <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </button>
                <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-.21-.005-.418-.015-.628.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </button>
                <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 11H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1zm0 2v8H4v-8h16zM15 4h2a1 1 0 0 1 1 1v4h-4V5a1 1 0 0 1 1-1zM7 4h2a1 1 0 0 1 1 1v4H6V5a1 1 0 0 1 1-1z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Related Stories */}
            <RelatedStories currentStoryId={story.id} category={story.category} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default StoryDetailPage;