import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import OpenAIBannerGenerator from './OpenAIBannerGenerator';

const App: React.FC = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/openai" element={<OpenAIBannerGenerator />} />
      </Routes>
  
  );
};

export default App;
