import React from 'react';

// --- Include or import placeholder icons/components ---
const VideoIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8H5v-2h10v2z" clipRule="evenodd"></path><path d="M15 7l-3 3 3 3V7z"></path></svg> );
const PlayIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg> );
const Avatar: React.FC<{ src: string; alt: string }> = ({ src, alt }) => ( <img className="w-6 h-6 rounded-full object-cover" src={src} alt={alt} /> );
// ---------------------------------------------------

interface Story {
  id: number;
  type: 'image' | 'video';
  imgSrc?: string; // For type 'image'
  videoPlaceholderBg?: string; // e.g. 'bg-green-200' for type 'video'
  category: string;
  categoryColor: string; // e.g. 'bg-green-100 text-green-800'
  title: string;
  snippet: string;
  avatarSrc: string; // URL for avatar image
  authorName: string;
  authorAge: number;
  videoUrl?: string; // Optional URL for watch link
}

const FeaturedStoriesSection: React.FC = () => {
  // Replace with actual data and image/avatar URLs
  const stories: Story[] = [
    {
      id: 1,
      type: 'image',
      imgSrc: 'https://placehold.co/600x400/E9D5FF/4A044E?text=Story+Image+1', // Placeholder
      category: 'Depression',
      categoryColor: 'bg-emerald-100 text-emerald-800',
      title: 'Mi Journey Through Di Darkness',
      snippet: '"For years mi hide mi depression, thinking it was just weakness. Now mi know seh seeking help is di strongest ting mi ever do."',
      avatarSrc: 'https://placehold.co/40x40/FEE2E2/7F1D1D?text=S', // Placeholder
      authorName: 'Shanice',
      authorAge: 27,
    },
    {
      id: 2,
      type: 'image',
      imgSrc: 'https://placehold.co/600x400/DDD6FE/4338CA?text=Story+Image+2', // Placeholder
      category: 'Anxiety',
      categoryColor: 'bg-indigo-100 text-indigo-800',
      title: 'Finding Peace After Panic',
      snippet: '"Di panic attacks dem did have mi feeling like mi crazy. But therapy show mi how fi breathe through di storm."',
      avatarSrc: 'https://placehold.co/40x40/DBEAFE/1E40AF?text=D', // Placeholder
      authorName: 'Delroy',
      authorAge: 42,
    },
    {
      id: 3,
      type: 'video',
      videoPlaceholderBg: 'bg-emerald-200', // Light green background for video placeholder
      category: 'Video Story',
      categoryColor: 'bg-yellow-100 text-yellow-800',
      title: 'From Darkness to Purpose',
      snippet: '"After mi brother suicide, mi decide fi talk bout mental health. Now mi help others find di help dem need."',
      avatarSrc: 'https://placehold.co/40x40/FEF3C7/92400E?text=M', // Placeholder
      authorName: 'Marcus',
      authorAge: 35,
      videoUrl: '#watch-video-3', // Example link
    },
  ];

  return (
    // Section with light background tint
    <section id="stories" className="py-16 lg:py-24 bg-cyan-50"> {/* Changed background */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Stories
          </h2>
          <a href="#all-stories" className="text-sm font-medium text-brand-green hover:text-teal-800 transition duration-150 ease-in-out">
            View All Stories &rarr;
          </a>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              // Card styling
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col"
            >
              {/* Image or Video Placeholder */}
              <div className="relative">
                {story.type === 'image' && story.imgSrc && (
                  <img src={story.imgSrc} alt={story.title} className="w-full h-48 object-cover"/>
                )}
                {story.type === 'video' && (
                  <div className={`w-full h-48 flex items-center justify-center ${story.videoPlaceholderBg || 'bg-gray-200'}`}>
                    <VideoIcon className="w-16 h-16 text-white opacity-75" />
                  </div>
                )}
              </div>

              {/* Card Content Area */}
              <div className="p-5 flex flex-col flex-grow"> {/* Use flex-grow to push footer down */}
                 {/* Category Tag */}
                 <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full self-start mb-3 ${story.categoryColor}`}>
                   {story.category}
                 </span>

                 {/* Story Title */}
                 <h3 className="text-lg font-semibold mb-2 text-gray-900">
                   {story.title}
                 </h3>

                 {/* Story Snippet */}
                 <p className="text-sm text-gray-600 mb-4 flex-grow"> {/* Use flex-grow to push footer down */}
                   {story.snippet}
                 </p>

                 {/* Footer: Author Info & Watch Link */}
                 <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100"> {/* mt-auto pushes to bottom */}
                   {/* Author */}
                   <div className="flex items-center space-x-2">
                     <Avatar src={story.avatarSrc} alt={story.authorName} />
                     <span className="text-xs text-gray-500">
                       {story.authorName}, {story.authorAge}
                     </span>
                   </div>
                   {/* Watch Link (Conditional) */}
                   {story.type === 'video' && story.videoUrl && (
                     <a href={story.videoUrl} className="flex items-center text-xs font-medium text-brand-green hover:text-teal-800">
                       <PlayIcon className="w-4 h-4 mr-1" />
                       Watch
                     </a>
                   )}
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