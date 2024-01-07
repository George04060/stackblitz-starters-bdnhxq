// Home.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedData, setSelectedData] = useState<string>('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedData(event.target.value);
  };

  const handleNavigate = () => {
    if (!selectedData) {
      alert('Please select a data option.');
    } else {
      // Only navigate when a radio option is selected
      navigate('/openai', { state: { selectedData } });
    }
  };
  return (
    <div>
      <h1>Hello Creatopy user!</h1>
      <p className="subtitle">Select dimensions for your banner </p>
      {/* <hr /> */}
      <div className="banners_container">
        <div className="div_banner">
          <label className="banner first_image">
            <input
              type="radio"
              name="banner_radio"
              value="500x500"
              checked={selectedData === '500x500'}
              onChange={handleRadioChange}
              style={{ display: 'none' }}
            />
            <p>500x500</p>
          </label>
          <p className="banner_name">Instagram post</p>
        </div>
        <div className="div_banner">
          <label className="banner second_image">
            <input
              type="radio"
              name="banner_radio"
              value="1500x500"
              checked={selectedData === '1500x500'}
              onChange={handleRadioChange}
              style={{ display: 'none' }}
            />
            <p>1500x500</p>
          </label>
          <p className="banner_name">Twitter Header</p>
        </div>
        <div className="div_banner">
          <label className="banner third_image">
            <input
              type="radio"
              name="banner_radio"
              value="1080x1920"
              checked={selectedData === '1080x1920'}
              onChange={handleRadioChange}
              style={{ display: 'none' }}
            />
            <p>1080x1920</p>
          </label>
          <p className="banner_name">Story</p>
        </div>
      </div>{' '}
      <div className="div_button">
        <button className="select_button" onClick={handleNavigate}>
          Select
        </button>
      </div>
    </div>
  );
};

export default Home;
