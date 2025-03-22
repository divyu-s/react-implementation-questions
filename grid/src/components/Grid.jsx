import React from "react";
import "./Grid.css";

export const Grid = ({ rows, columns }) => {
  return (
    <div className="grid">
      {Array.from({ length: rows }).map((item, indexRow) => (
        <div className="grid-row" key={indexRow}>
          {Array.from({ length: columns }).map((item, indexColumn) => (
            <div className="grid-column" key={indexColumn}></div>
          ))}
        </div>
      ))}
    </div>
  );
};
