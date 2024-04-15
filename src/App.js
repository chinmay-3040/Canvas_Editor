// App.js
import React, { useState } from 'react';
import Canvas from './canvas';
import ImageSelector from './Components/CanvasEditor';
import mask from './assets/mask.png';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ctaContent, setCtaContent] = useState('');
  const [adContent, setAdContent] = useState('');

  const [parentData, setParentData] = useState('rgb(99,99,99)');
  const handleValueFromChild = (value) => {
    setParentData(value);
  };


 
  return (
    <div className="container mx-auto" >
      <h1 className="text-3xl font-bold mb-4" style={{textAlign:'center', backgroundColor:'grey', padding:'10px', marginBottom:'20px'}}>Canvas Editor</h1>
      <div className="grid grid-cols-2 gap-4">
      <div style={{display:'flex' , marginBottom:'100px'}}>
        <div style={{ backgroundColor: parentData, marginLeft:'50px', borderRadius:'20px'}}>
              <Canvas
                selectedImage={selectedImage}
                ctaContent={ctaContent}
                adContent={adContent}
                staticImage={mask}
                buttonColor = {parentData}
              />
        </div>
        <div >
            <ImageSelector
              onImageSelect={setSelectedImage}
              onCtaChange={setCtaContent}
              onAdChange={setAdContent}
              onValueChange={handleValueFromChild}
              
            />
        </div>
        
      </div>
      </div>
      
    </div>
  );
}

export default App;
