import React, { useState, useEffect } from 'react';

const LazyImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(null);

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoading(true);
    setCurrentSrc(null);

    if (!src) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
      setCurrentSrc(src);
    };
  }, [src]);

  return (
    <div className={`image-container ${className}`} style={{ position: 'relative' }}>
      {isLoading && (
        <div 
          className="loading-placeholder"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
      )}
      <img
        src={currentSrc || src}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        width={width}
        height={height}
        onLoad={() => setIsLoading(false)}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
      />
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .image-container {
          overflow: hidden;
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
};

export default LazyImage; 