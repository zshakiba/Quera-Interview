import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex justify-between items-center px-3">
      <div className="flex justify-center items-center w-full">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex-1 cursor-pointer px-4 py-2 flex items-center justify-center ${
              activeTab === index ? "border-b-2 border-primary" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
        <div className="hidden">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
};

export default Tabs;
