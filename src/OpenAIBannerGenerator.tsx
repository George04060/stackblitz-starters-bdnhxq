import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './OpenAIBannerGenerator.css';

interface BannerProps {
  title: string;
  imageUrl: string;
  dimension: string;
}

const Banner: React.FC<BannerProps> = ({ title, imageUrl, dimension }) => {
  const maxWidth = 500;
  const maxHeight = 500;

  const [width, height] = dimension.split('x').map(Number);

  let proportionalWidth = width;
  let proportionalHeight = height;

  // Calculate proportional size if the dimensions are bigger than the maximum
  if (width > maxWidth || height > maxHeight) {
    const aspectRatio = width / height;

    if (width > maxWidth) {
      proportionalWidth = maxWidth;
      proportionalHeight = maxWidth / aspectRatio;
    }

    if (proportionalHeight > maxHeight) {
      proportionalHeight = maxHeight;
      proportionalWidth = maxHeight * aspectRatio;
    }
  }

  const bannerStyle: React.CSSProperties = {
    width: `${proportionalWidth}px`,
    height: `${proportionalHeight}px`,
    background: `url(${imageUrl}) center/cover`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  };

  const titleStyle: React.CSSProperties = {
    padding: '10px',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  };

  return (
    <div style={bannerStyle}>
      <div style={titleStyle}>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [generatedBanner, setGeneratedBanner] =
    useState<React.ReactNode | null>(null);
  const location = useLocation();
  const selectedData = location.state?.selectedData || 'No data selected';

  const generateBanner = () => {
    const apiKey = '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';

    // Mock API request (replace with actual OpenAI API request)
    if (image) {
      const imageUrl = URL.createObjectURL(image);

      // Set the generated banner with user inputs
      const generatedBanner = (
        <Banner title={title} imageUrl={imageUrl} dimension={selectedData} />
      );
      setGeneratedBanner(generatedBanner);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div>
      <h1>Banner Generator</h1>

      <div className="app">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="dimension">Dimension:</label>
        <span>{selectedData} </span>

        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          id="image"
          onChange={handleImageChange}
        />

        <button onClick={generateBanner}>Generate Banner</button>

        <div className="banner-container">{generatedBanner}</div>
      </div>
    </div>
  );
};

export default App;
