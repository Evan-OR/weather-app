import React from 'react';

function Loading() {
  return (
    <div className="loading-message">
      <h2>Loading</h2>
      <div id="spinner" className="loading-spinner">
        <i className="fas fa-spinner"></i>
      </div>
    </div>
  );
}

export default Loading;
