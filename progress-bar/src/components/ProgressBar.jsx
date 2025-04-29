import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
  const [sanitizedProgress, setSanitizedProgress] = useState(0);
  //const sanitizedProgress = Math.min(Math.max(progress, 0), 100);

  useEffect(() => {
    // Handle invalid values and convert them to be within [0, 100].
    setTimeout(
      () => setSanitizedProgress(Math.min(Math.max(progress, 0), 100)),
      100
    );
  }, []);

  return (
    <div className="progress-bar-outer">
      <div
        className="progress-bar-inner"
        style={{
          width: sanitizedProgress + "%",
        }}
      >
        {sanitizedProgress + "%"}
      </div>
    </div>
  );
};

export default ProgressBar;
