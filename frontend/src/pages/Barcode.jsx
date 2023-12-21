import React, { useState, useRef } from 'react';
import Barcode from 'react-barcode';
import { BiBarcodeReader } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';
import { TbBarcodeOff } from 'react-icons/tb';
import { Link } from 'react-router-dom';
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
    <div className=" flex items-start justify-center  w-full mt-8">
      
      <div className="w-full mx-8 pt-1 mt-10 ">
         
          </div>
         
            <div className="fixed top-0 left-0 w-full h-screen bg-[#00000062] z-[20000] flex items-center justify-center">
              <div className=" w-[90%] 800px:w-[40%] h-[80vh] bg-white rounded-md shadow p-4">
             <div className='flex justify-end'> <Link to={"/dashboard"}> <RxCross1 size={30} className='flex justify-end'/></Link></div>
                <h5 className="flex items-center justify-center text-[30px] font-Poppins text-center">
                  Generate Barcode <BiBarcodeReader/>
                </h5>
                <br />
                <br />
                {/* create coupoun code */}
                <div className="flex items-center mb-4">
                  
        <input
          type="text"
          placeholder="Name"
          className="p-2 mr-2 border rounded w-[50%] border-gray-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number/Code"
          className="p-2 mr-2 border rounded w-[50%] border-gray-500"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <BiBarcodeReader
        onClick={addBarcode}
        size={40}
        />
     
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
            </div>
        
        </div>
   
    
  );
}

export default App;