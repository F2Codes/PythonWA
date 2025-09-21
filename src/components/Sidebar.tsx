import React from "react";
import { Folder, Search, GitBranch, Settings } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-12 bg-[#252526] flex flex-col items-center py-4 space-y-6">
      <Folder className="text-gray-400 hover:text-white cursor-pointer" />
      <Search className="text-gray-400 hover:text-white cursor-pointer" />
      <GitBranch className="text-gray-400 hover:text-white cursor-pointer" />
      <Settings className="text-gray-400 hover:text-white cursor-pointer mt-auto" />
    </div>
  );
};

export default Sidebar;
