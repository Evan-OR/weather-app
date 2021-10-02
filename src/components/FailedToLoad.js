import React from "react";

function FailedToLoad() {
  return (
    <div className="failed-message">
      <h2>
        Failed to find location <i className="fas fa-exclamation-triangle"></i>
      </h2>
      <div>Please try again or try another location</div>
    </div>
  );
}

export default FailedToLoad;
