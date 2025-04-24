

// Icons
const OnlineIcon = () => (
  <svg className="w-5 h-5 text-indigo-700" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
  </svg>
);

const GroupIcon = () => (
  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
  </svg>
);

const OnlineSupportSection = () => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-blue-900 mb-2 text-center">Online Support Options</h2>
      
      {/* Underline below title */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-1 bg-blue-600"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Online Therapy Platforms Card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden p-4">
          {/* Icon and Title Area */}
          <div className="flex items-center mb-3">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
              <OnlineIcon />
            </div>
            <h3 className="text-base font-semibold text-gray-900">
              Online Therapy Platforms
            </h3>
          </div>
          
          {/* Description - Text-center */}
          <p className="text-sm text-gray-600 mb-3 text-center">
            Connect with licensed therapists via video, phone, or text messaging. Many offer reduced rates for Jamaican residents.
          </p>
          
          {/* List of options with blue dots */}
          <ul className="mb-5 space-y-1 pl-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1">•</span>
              <span className="text-sm">BetterHelp - International platform with sliding scale options</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1">•</span>
              <span className="text-sm">TherapyRoute - Find therapists offering online sessions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1">•</span>
              <span className="text-sm">Caribbean Teletherapy - Regional therapists familiar with cultural context</span>
            </li>
          </ul>
          
          {/* Button - Centered */}
          <div className="text-center mt-auto">
            <a 
              href="#" 
              className="inline-block text-blue-600 py-2 px-4 text-sm font-medium"
            >
              Explore Options
            </a>
          </div>
        </div>
        
        {/* Virtual Support Groups Card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Free Service Tag - Full width */}
          <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 text-center">
            Free Service
          </div>
          
          <div className="p-4">
            {/* Icon and Title Area */}
            <div className="flex items-center mb-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <GroupIcon />
              </div>
              <h3 className="text-base font-semibold text-gray-900">
                Virtual Support Groups
              </h3>
            </div>
            
            {/* Description - Text-center */}
            <p className="text-sm text-gray-600 mb-3 text-center">
              Free online communities and support groups focused on specific mental health concerns.
            </p>
            
            {/* List of options with blue dots */}
            <ul className="mb-5 space-y-1 pl-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span className="text-sm">Depression & Anxiety Support Circle - Weekly Zoom meetings</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span className="text-sm">Grief Recovery Network - Peer support for those experiencing loss</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span className="text-sm">ADHD Jamaica - Resources and community support</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span className="text-sm">Substance Recovery Jamaica - 12-step programs online</span>
              </li>
            </ul>
            
            {/* Button - Full width blue */}
            <div className="mt-auto">
              <a 
                href="#" 
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 text-sm font-medium"
              >
                Join a Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineSupportSection;