import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const FloatingSummary = ({ type = "work" }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Determine if it's a mobile/tablet device for click vs hover behavior
  const isMobileTablet = typeof window !== 'undefined' && window.innerWidth <= 1024;
  
  // Enhanced content based on type with more detailed information and styling
  const summaryContent = type === "about" ? {
    // title: "About Me",
    description: (
      <>
        <p className="mb-3 text-base">
          "Hi, I'm Shivesh, a developer based in Greater Noida with a passion for code. 
          Equipped with a Problem-Solving and Competitive-Programming mindset. 
          I approach complex issues with Algorithmic precision and make creative solutions. 
        </p>
        <p className="text-base">
          I specialized in Full-Stack Development with expertise in ReactJS, NodeJS, and modern web technologies. 
          I turn ideas into interactive experiences. The website shouldn't just exist, it should perform."
        </p>
        {/* <div className="mt-4 flex gap-3">
          <span className="px-2 py-1 bg-gray-100 rounded-md text-sm">ReactJS</span>
          <span className="px-2 py-1 bg-gray-100 rounded-md text-sm">NodeJS</span>
          <span className="px-2 py-1 bg-gray-100 rounded-md text-sm">Full-Stack</span>
        </div> */}
      </>
    )
  } : {
    title: "My Work",
    description: (
      <>
        <p className="mb-3 text-base">
          View my projects spanning web development, mobile applications, and more. Each project showcases my technical skills and commitment to excellence.
        </p>
        <p className="text-base">
          The website shouldn't just exist, it should perform. I turn ideas into interactive experiences through modern development practices.
        </p>
      </>
    )
  };
  
  // Handle mouse events for desktop
  const handleMouseEnter = () => {
    if (!isMobileTablet) {
      setIsVisible(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (!isMobileTablet) {
      setIsVisible(false);
    }
  };
  
  // Handle click for mobile/tablet
  const handleClick = () => {
    if (isMobileTablet) {
      setIsVisible(!isVisible);
    }
  };
  
  // Close panel (for mobile/tablet)
  const handleClose = (e) => {
    e.stopPropagation();
    setIsVisible(false);
  };
  
  return (
    <div 
      className={`relative ${type === "about" ? "mb-4" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <button className={`cta-wrapper md:w-80 md:h-16 w-60 h-12 ${isVisible ? 'active' : ''}`}>
        <div className="cta-button cta-button-about group">
          <div className="bg-circle" />
          <p className="text">{type === "about" ? "ABOUT ME!" : "See my Work"}</p>
          <div className="arrow-wrapper right-arrow">
            <img src="/images/arrow-right.svg" alt="arrow" className="arrow-right-animation" />
          </div>
        </div>
      </button>
      
      {isVisible && (
        <div className="floating-summary-panel">
          <div className="floating-summary-content">
            <h3 className="text-xl font-bold mb-3">{summaryContent.title}</h3>
            <div className="text-gray-700">{summaryContent.description}</div>
            
            {isMobileTablet && (
              <button 
                className="floating-summary-close"
                onClick={handleClose}
                aria-label="Close summary panel"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingSummary;