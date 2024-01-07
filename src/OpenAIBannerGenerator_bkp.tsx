// trying to make a file where I can connect my project to OpenAI API

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './OpenAIBannerGenerator.css';

// const OpenAIBannerGenerator: React.FC = () => {
//   const [description, setDescription] = useState<string>('');
//   const [image, setImage] = useState<File | null>(null);
//   const [generatedBanner, setGeneratedBanner] = useState<string>('');
//   const [error, setError] = useState<string | null>(null);
//   const location = useLocation();
//   const selectedData = location.state?.selectedData || 'No data selected';

//   const generateBanner = async () => {
//     const apiKey = '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';
//     // trying different endpoints
//     // const endpoint = 'https://api.openai.com/v1/images/generations';
//     const endpoint =
//       'https://api.openai.com/v1/engines/davinci-codex/completions';

//     if (!description && !image) {
//       setError('Please enter a description or upload an image.');
//       return;
//     }

//     setError(null);

//     const prompt = `Generate a banner: ${description}`;
//     const maxTokens = 150; // Adjust as needed

//     const formData = new FormData();
//     formData.append('prompt', prompt);
//     formData.append('max_tokens', maxTokens.toString());
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       const response = await fetch(endpoint, {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${apiKey}`,
//         },
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch data from OpenAI API');
//       }

//       const data = await response.json();

//       // Extract the generated text from the OpenAI API response
//       const generatedText = data.choices[0]?.text || '';

//       setGeneratedBanner(generatedText);
//     } catch (error) {
//       setError('Error fetching data from OpenAI API. Please try again later.');
//       console.error('Error fetching data:', error.message);
//     }
//   };

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     if (files && files.length > 0) {
//       setImage(files[0]);
//     }
//   };

//   return (
//     <div>
//       <h1>Generează-ți propriul banner</h1>
//       <p className="subtitle">
//         Alege componentele și detaliile potrivite pentru banner-ul tău:
//       </p>

//       <div className="openai-banner-generator-container">
//         <form
//           className="form-container"
//           onSubmit={(e) => {
//             e.preventDefault();
//             generateBanner();
//           }}
//         >
//           <div className="banner_details">
//             <p>
//               Dimensiunea selectată: <span>{selectedData} </span>
//             </p>
//             <label>
//               Titlu:
//               <input
//                 className="input-field"
//                 type="text"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </label>

//             <label>
//               Adaugă imagine:
//               <input
//                 className="input-field-image"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//             </label>

//             <button className="generate-button" type="submit">
//               Generare banner
//             </button>
//           </div>
//         </form>

//         {error && <p className="error-message">{error}</p>}

//         <div className="generated-banner-container">
//           <h2>Banner-ul tău:</h2>
//           <div
//             className="generated-banner"
//             style={{ border: '1px solid #ccc', padding: '100px' }}
//           >
//             {generatedBanner}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OpenAIBannerGenerator;
