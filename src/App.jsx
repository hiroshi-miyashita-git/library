import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [showImages, setShowImages] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const imageIds = [
    "4092966687",
    "408314016X",
    "4092966377",
    "409296644X",
    "4092966458",
    "409296689X",
    "4591172945",
    "406536907X",
    "4092961057",
    "4323066147",
    "4863899149",
    "4471102974",
    "4046311495",
    "4092966989",
    "4092967063",
    "4010112948",
    "4010112700",
    "409296126X",
    "4092967284",
    "4092591969",
    "4041111080",
    "4092966849",
    "4092966423",
    "4092966385",
    "4092314779",
    "4092312172",
    "4041089441",
    "4591178250",
    "4052041607",
    "4297129116",
    "4092312970",
    "4083140380",
    "4591174301",
    "4299052803"
  ];
  const handleClick = () => {
    setShowImages(prev => !prev); // true→false, false→true を切り替える
    
  };

  return (
    <>
    <div>
      <h1 className="yusei-magic-regular" onClick={handleClick} style={{ cursor: 'pointer' }}>{showImages ? '読んだ本' : 'パパ図書館'}</h1>
      {showImages  && (
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* {imageUrls.map((url, index) => ( */}
          {imageIds.map((id, index) => {
            const imageUrl = `https://images-fe.ssl-images-amazon.com/images/P/${id}.09.LZZZZZZZ`;
            const productUrl = `https://www.amazon.co.jp/dp/${id}`;
            return(
            <a
              key={index}
              href={productUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={imageUrl}
                alt={`book-${index}`}
                style={{ width: '150px', height: 'auto' }}
              />
            </a>
            );
          })}
        </div>
      )}
    </div>
    </>
  )
}
export default App
