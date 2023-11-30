// App.js
import React, { useState } from 'react';


const Popup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isButton2Visible, setButton2Visibility] = useState(true);

  const handleClickButton1 = () => {
    // Toggle the visibility of button2
    setButton2Visibility(!isButton2Visible);
  };
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openPopup}
      >
        Open Coupon Form
      </button>

      {isPopupOpen && (
        <div className="w-full fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="max-400px:w-[90%] 400px:w-[90%] max-500px:w-[60%] 800px:w-[30%]  bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Coupon Form</h2>
            {/* Your form content goes here */}
            <form>
              {/* Form fields go here */}
              <button
                type="button"
                className="bg-red-500 text-white py-2 px-4 rounded"
                onClick={closePopup}
              >
                Close
              </button>
            </form>
          </div>
          <div>
      <button onClick={handleClickButton1}>Button 1</button>

      {/* Render button2 only if isButton2Visible is true */}
      {isButton2Visible && <button>Button 2</button>}
    </div>
        </div>
      )}
    </div>
  );
};

export default Popup;