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
        <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
          {/* Content area with flex-grow to push button to bottom */}
          <div className="p-6 flex-grow flex flex-col mt-8">
            {/* Icon and Title Area */}
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                <OnlineIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Online Therapy Platforms
              </h3>
            </div>
            
            {/* Description - Center aligned but better spacing */}
            <p className="text-sm text-gray-600 mb-4 text-center mx-auto max-w-md">
              Connect with licensed therapists via video, phone, or text messaging. Many offer reduced rates for Jamaican residents.
            </p>
            
            {/* List of options with proper alignment */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-baseline">
                <span className="text-blue-500 mr-2 text-lg">•</span>
                <span className="text-sm text-gray-700">BetterHelp - International platform with sliding scale options</span>
              </li>
              <li className="flex items-baseline">
                <span className="text-blue-500 mr-2 text-lg">•</span>
                <span className="text-sm text-gray-700">TherapyRoute - Find therapists offering online sessions</span>
              </li>
              <li className="flex items-baseline">
                <span className="text-blue-500 mr-2 text-lg">•</span>
                <span className="text-sm text-gray-700">Caribbean Teletherapy - Regional therapists familiar with cultural context</span>
              </li>
            </ul>
          </div>
          
          {/* Button container - Fixed at bottom */}
          <div className="px-6 pb-6 mt-auto">
            <a 
              href="#" 
              className="block w-full text-center bg-blue-50 hover:bg-blue-100 text-blue-600 py-3 px-4 text-sm font-medium rounded-md transition duration-150"
            >
              Explore Options
            </a>
          </div>
        </div>
        
        {/* Virtual Support Groups Card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
          {/* Free Service Tag - Full width */}
          <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1.5 text-center">
            Free Service
          </div>
          
          {/* Content area with flex-grow to push button to bottom */}
          <div className="p-6 flex-grow flex flex-col">
            {/* Icon and Title Area */}
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <GroupIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Virtual Support Groups
              </h3>
            </div>
            
            {/* Description - Center aligned but better spacing */}
            <p className="text-sm text-gray-600 mb-4 text-center mx-auto max-w-md">
              Free online communities and support groups focused on specific mental health concerns.
            </p>
            
            {/* List of options with proper alignment */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-baseline">
                <span className="text-blue-500 mr-2 text-lg">•</span>
                <span className="text-sm text-gray-700">Depression & Anxiety Support Circle - Weekly Zoom meetings</span>
              </li>
              <li className="flex items-baseline">
                <span className="text-blue-500 mr-2 text-lg">•</span>
                <span className="text-sm text-gray-700">Grief Recovery Network - Peer support for those experiencing loss</span>
              </li>
              <li className="flex items-baseline">
                <span className="text-blue-500 mr-2 text-lg">•</span>
                <span className="text-sm text-gray-700">ADHD Jamaica - Resources and community support</span>
              </li>
              <li className="flex items-baseline">
                <span className="text-blue-500 mr-2 text-lg">•</span>
                <span className="text-sm text-gray-700">Substance Recovery Jamaica - 12-step programs online</span>
              </li>
            </ul>
          </div>
          
          {/* Button container - Fixed at bottom with same padding as other card */}
          <div className="px-6 pb-6 mt-auto">
            <a 
              href="#" 
              className="block w-full text-center bg-blue-50 hover:bg-blue-700 text-white py-3 px-4 text-sm font-medium rounded-md transition duration-150"
            >
              Join a Group
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineSupportSection;