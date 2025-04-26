import React, { useState } from 'react';
import { Confession } from '../types/confessionTypes';
import { confessionService } from '../data/confessionService';

// Default avatar placeholder
const defaultAvatar = '/assets/images/avatar-placeholder.png';

// Format date to show how long ago
const formatTimestamp = (timestamp: string): string => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  
  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  
  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
};

interface ConfessionCardProps {
  confession: Confession;
}

const ConfessionCard: React.FC<ConfessionCardProps> = ({ confession }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(confession.likes);
  
  const handleLikeClick = async () => {
    try {
      // Update local state first for immediate feedback
      const newLikeCount = liked ? likeCount - 1 : likeCount + 1;
      setLikeCount(newLikeCount);
      setLiked(!liked);
      
      // Then update in the service
      await confessionService.updateConfession(confession.id, {
        likes: newLikeCount
      });
    } catch (error) {
      // Revert on error
      console.error("Failed to update likes:", error);
      setLikeCount(confession.likes);
      setLiked(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 border border-gray-200">
      {/* Header: Username & timestamp */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          {/* Avatar */}
          <div className="flex-shrink-0 mr-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src={defaultAvatar} 
                alt={confession.username} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">
              {confession.username}
            </h3>
            {confession.isAnonymous && (
              <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                Anonymous
              </span>
            )}
          </div>
        </div>
        <span className="text-xs text-gray-500">
          {formatTimestamp(confession.timestamp)}
        </span>
      </div>
      
      {/* Confession text - now left-aligned and directly under the header */}
      <div className="pl-0 text-left mb-3">
        <p className="text-gray-800">
          {confession.text}
        </p>
      </div>
      
      {/* Actions */}
      <div className="flex items-center space-x-4 text-gray-500 text-sm mt-4">
        {/* Like button */}
        <button 
          onClick={handleLikeClick}
          className={`flex items-center space-x-1 hover:text-blue-600 transition-colors text-white ${liked ? 'text-blue-600' : ''}`}
        >
          <svg 
            className="w-4 h-4" 
            fill={liked ? "currentColor" : "none"} 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            >
            </path>
          </svg>
          <span>{likeCount}</span>
        </button>
        
        {/* Comment button */}
        <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            >
            </path>
          </svg>
          <span>{confession.comments}</span>
        </button>
        
        {/* Share button */}
        <button className="flex items-center space-x-1 hover:text-blue-600 text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            >
            </path>
          </svg>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default ConfessionCard;