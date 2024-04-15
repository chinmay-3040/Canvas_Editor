// ImageSelector.js
import React from 'react';
// import { useState } from 'react';


function ImageSelector({ onImageSelect, onCtaChange, onAdChange, onValueChange  }) {

  // const [ctaContent, setCtaContent] = useState('');
  // const [adContent, setAdContent] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const image = new Image();
      image.src = event.target.result;
      image.onload = () => {
        onImageSelect(image);
      };
    };

    reader.readAsDataURL(file);
  };

  const handleCtaChange = (e) => {
    onCtaChange(e.target.value);
  };

  const handleAdChange = (e) => {
    onAdChange(e.target.value);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    onValueChange(newValue); // Call the parent's callback function with the new value
  };

  

  return (
    <div style={{marginLeft:'40px'}}>
      <h2 className="text-xl font-semibold mb-2" style={{margin:'10px'}}>Select Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} style={{margin:'10px'}}/>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2" style={{margin:'10px'}}>CTA</h2>
        <input
          onChange={handleCtaChange}
          rows="4"
          className="w-full px-3 py-2 border rounded-lg form-control"
          // maxLength={10}
          style={{padding:'10px', margin:'10px'}}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Ad Content</h2>
        <input
          onChange={handleAdChange}
          rows="4"
          className="w-full px-3 py-2 border rounded-lg form-control"
          style={{padding:'10px', margin:'10px'}}
          maxLength={9}
        />
      </div>
      <div className="color-picker-container" style={styles.colorPickerContainer}>    
        <input type="color" id="color-picker" onChange={handleInputChange} style={styles.colorInput} />
      </div>
    </div>
  );
}

const styles = {
  colorPickerContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    margin:'10px',
  },
  
  colorDisplay: {
    width: 300,
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '5px solid hsl(0, 0%, 80%)',
    borderRadius: '25px',
    marginBottom: '25px',
    transition: '0.25s ease',
  },
  colorDisplayText: {
    color: 'hsl(0, 0%, 20%)',
    fontSize: '2rem',
    textAlign: 'center',
  },
  label: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  colorInput: {
    width: 75,
    height: 50,
    padding: 5,
    borderRadius: 10,
    border: '3px solid hsl(0, 0%, 80%)',
  },
};

export default ImageSelector;
