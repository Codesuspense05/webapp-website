import React, { useState, useRef } from 'react';
import Barcode from 'react-barcode';
import { useReactToPrint } from 'react-to-print';

function BarcodeCard({ name, code }) {
  return (
    <div className="flex flex-col items-center m-4 h-[100px]">
      <h2 className="text-md font-semibold">{name}</h2>
      <Barcode value={code} />
    </div>
  );
}

function App() {
  const [barcodeData, setBarcodeData] = useState([]);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const addBarcode = () => {
    if (!name.trim() || !code.trim()) {
      alert("Please enter both a name and a code before generating a barcode.");
      return;
    }

      // Check if the code already exists in the barcodeData
  const isDuplicateCode = barcodeData.some((item) => item.code === code);
  if (isDuplicateCode) {
    alert("Code number already exists.");
    return;
  }

    // Check if the combination of name and code already exists in the barcodeData
  const isDuplicate = barcodeData.some((item) => item.name === name && item.code === code);
  if (isDuplicate) {
    alert("This combination of name and code already exists.");
    return;
  }

    const newBarcode = { name, code };
    setBarcodeData([...barcodeData, newBarcode]);
    setName('');
    setCode('');
  };

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Barcode Generator</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Name"
          className="p-2 mr-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Number/Code"
          className="p-2 mr-2 border rounded"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          onClick={addBarcode}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Add Barcode
        </button>
      </div>
      <div className="flex overflow-x-auto">
        {barcodeData.map((data, index) => (
          <BarcodeCard key={index} {...data} />
        ))}
      </div>
      {barcodeData.length > 0 && (
      <button
        onClick={handlePrint}
        className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Print Multiple Barcodes
      </button>
      )}
      <div style={{ display: 'none' }}>
        <div ref={componentRef}>
          {barcodeData.map((data, index) => (
            <BarcodeCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;