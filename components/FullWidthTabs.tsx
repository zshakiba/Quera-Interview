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
    <>
      <div className="flex justify-between items-center px-3">
        <div className="flex justify-center items-center w-full">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex-1 cursor-pointer px-4 py-2 flex items-center justify-center font-bold text-gray-600 border-b-2 border-gray-300 ${
                activeTab === index ? "border-b-2 border-cyan-500" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div
                className={`${
                  activeTab === index ? "text-cyan-500 text-lg font-bold" : ""
                }`}
              >
                {tab.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex">{tabs[activeTab].content}</div>
    </>
  );
};

export default Tabs;
