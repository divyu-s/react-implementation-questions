import { useState } from "react";
export default function Tabs({ items }) {
  const [selectedTab, setSelectedTab] = useState(items[0].value);

  return (
    <div>
      <div className="tab-container">
        {items.map(({ label, value }) => {
          return (
            <button
              className={selectedTab === value && "selected"}
              onClick={() => setSelectedTab(value)}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div>
        {items.map(({ content, value }) => {
          return <p hidden={selectedTab !== value}>{content}</p>;
        })}
      </div>
    </div>
  );
}
