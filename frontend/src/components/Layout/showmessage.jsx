import React, { useState } from 'react';

const LogoutButton = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here
    // For example, redirect to the login page or clear authentication state
    console.log('Logging out...');
    setShowConfirmation(false); // Close the confirmation modal after logout
  };

  return (
    <div>
      <button onClick={() => setShowConfirmation(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>

      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded">
            <p>Are you sure you want to logout?</p>
            <div className="mt-4 flex justify-end">
              <button onClick={() => setShowConfirmation(false)} className="mr-4 text-gray-600 hover:text-gray-800">
                Cancel
              </button>
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;