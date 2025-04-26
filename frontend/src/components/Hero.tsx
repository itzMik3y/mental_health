import React from 'react';
import Button from './Button';

// Replace with your actual hero background image
const heroBgImageUrl = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fHx8MTY4MjAzNjAwOA&ixlib=rb-4.0.3&q=80&w=1920'; // Use the actual image URL

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white" // Removed fixed height, padding will determine height
      style={{ backgroundImage: `url(${heroBgImageUrl})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Inner container for constrained, left-aligned content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10 py-24 md:py-36 lg:py-48"> {/* Added vertical padding */}
          <div className="max-w-xl lg:max-w-2xl text-left"> {/* Limit width of text block and align left */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Nuh Hide Yuh Feelings
              </h1>
              <p className="text-lg md:text-xl mb-8 font-light">
                  Breaking the silence around mental health in Jamaica. Everyone has a story, and yours deserves to be heard.
              </p>
              {/* Button Group */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button variant="primary">
                      Share Your Story
                  </Button>
                  <Button variant="primary">
                      Find Help Now
                  </Button>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;