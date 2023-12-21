import React, { useState } from 'react';
import useQrReader from 'react-qr-reader';
import jsQR from 'jsqr';

const BarcodeScanner = () => {
  const [scannedProducts, setScannedProducts] = useState([]);

  const handleScan = (data) => {
    if (data) {
      // Use jsQR to decode the barcode data
      const code = jsQR(data, data.length, data.length);

      if (code) {
        // Assuming the barcode contains a JSON string with product information
        try {
          const productInfo = JSON.parse(code.data);

          // Update state with the scanned product
          setScannedProducts((prevProducts) => [...prevProducts, productInfo]);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      }
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <useQrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <div>
        <h2>Scanned Products</h2>
        <ul>
          {scannedProducts.map((product, index) => (
            <li key={index}>
              {/* Display relevant details from the product information */}
              {`Product #${index + 1}: ${product.name} - ${product.price}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BarcodeScanner;