import React from 'react';

// Card component with updated button styling
const ResourceCard = ({ resource }) => {
  // Select appropriate icon based on resource type or title
  let IconComponent = resource.icon || (() => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
    </svg>
  ));
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Service type tag */}
      {resource.freeService && (
        <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5">
          Free Service
        </div>
      )}
      {resource.lowCost && (
        <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5">
          Low Cost
        </div>
      )}
      {resource.slidingScale && (
        <div className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-0.5">
          Sliding Scale
        </div>
      )}

      {/* Card content */}
      <div className="p-4">
        {/* Title with icon */}
        <div className="flex items-start space-x-3 mb-3">
          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${resource.iconBgColor || 'bg-blue-100'}`}>
            <IconComponent className={`w-4 h-4 ${resource.iconColor || 'text-blue-600'}`} />
          </div>
          <h3 className="text-base font-semibold text-gray-900">{resource.title}</h3>
        </div>
        
        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">{resource.shortDescription}</p>
        
        {/* Info items */}
        <div className="space-y-1 mb-4">
          {resource.address && (
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{resource.address}</span>
            </div>
          )}
          
          {resource.phone && (
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>{resource.phone}</span>
            </div>
          )}
          
          {resource.email && (
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-blue-600">{resource.email}</span>
            </div>
          )}

          {resource.pricing && (
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
              <span>{resource.pricing}</span>
            </div>
          )}
        </div>
        
        {/* Button - UPDATED to match the design */}
        <div className="mt-auto pt-2">
          <a 
            href="#" 
            className="block text-center bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 text-sm font-medium rounded-md"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;