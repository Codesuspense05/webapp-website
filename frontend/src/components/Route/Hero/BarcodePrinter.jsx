import React from 'react';
import Barcode from 'react-barcode';

function BarcodeCard({ name, code }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg m-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <div className="my-4">
        <Barcode value={code} />
      </div>
    </div>
  );
}

export default BarcodeCard;