import React from "react";

interface TopbarProps {
  onRun: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onRun }) => {
  return (
    <div className="h-10 bg-[#333] flex items-center justify-between px-4 text-sm">
      <div className="text-blue-400 font-bold">Py By F2</div>
      <button
        onClick={onRun}
        className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white"
      >
        ▶ Run
      </button>
    </div>
  );
};

export default Topbar;
