import React, { useState } from 'react';

function App() {
  const [isRefreshing, setRefreshing] = useState(false);

  const handleScroll = (e) => {
    const { scrollTop } = e.target.documentElement;

    if (scrollTop === 0) {
      setRefreshing(true);

      // Simulate refreshing for a few seconds
      setTimeout(() => {
        setRefreshing(false);

        // Redirect to the home page
        window.location.reload() ; // Replace this with your actual home page URL
      }, 2000); // Adjust the time as needed
    }
  };

  return (
    <div onScroll={handleScroll} style={{ overflowY: 'auto', height: '100vh' }}>
      {isRefreshing && <div className="text-center">Refreshing...</div>}
      <div className="text-center">
        <button onClick={() => window.location.href = '/'}>Home</button>
      </div>
    </div>
  );
}

export default App;