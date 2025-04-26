import React, { useState } from 'react';
import Button from './Button';

interface ConfessionFormProps {
  onSubmit: (confessionText: string, isAnonymous: boolean, username: string) => void;
}

const ConfessionForm: React.FC<ConfessionFormProps> = ({ onSubmit }) => {
  const [confessionText, setConfessionText] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [username, setUsername] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  
  const MAX_CHARS = 280; // Twitter-like character limit
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    
    // Enforce character limit
    if (text.length <= MAX_CHARS) {
      setConfessionText(text);
      setCharacterCount(text.length);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (confessionText.trim() !== '') {
      // Generate username for anonymous posts
      const anonymousUsername = isAnonymous 
        ? `Anonymous_${['Kingston', 'MoBay', 'Portmore', 'Ocho', 'Student', 'UWI'][Math.floor(Math.random() * 6)]}`
        : username;
      
      onSubmit(confessionText, isAnonymous, anonymousUsername);
      
      // Reset form
      setConfessionText('');
      setCharacterCount(0);
      setUsername('');
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Share Your Confession</h2>
      <p className="text-gray-600 mb-4">
        Express yourself freely. All confessions can be anonymous - no judgment here.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Confession Text */}
        <div>
          <textarea
            id="confession"
            placeholder="What's on your mind? Share your mental health journey..."
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-32 resize-none"
            value={confessionText}
            onChange={handleTextChange}
            required
          ></textarea>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Be respectful and supportive</span>
            <span className={characterCount > MAX_CHARS * 0.8 ? 'text-red-500' : ''}>
              {characterCount}/{MAX_CHARS}
            </span>
          </div>
        </div>
        
        {/* Anonymous Toggle */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="anonymous"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
          />
          <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
            Post anonymously
          </label>
        </div>
        
        {/* Username (if not anonymous) */}
        {!isAnonymous && (
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Your Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}
        
        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="primary"
            disabled={confessionText.trim() === '' || (!isAnonymous && username.trim() === '') || characterCount > MAX_CHARS}
          >
            Share Confession
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ConfessionForm;