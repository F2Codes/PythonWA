import React from "react";

interface TerminalProps {
  output: string;
}

const Terminal: React.FC<TerminalProps> = ({ output }) => {
  return (
    <div className="h-40 bg-black text-green-400 font-mono p-2 overflow-y-auto">
      {output || ">>> waiting for code..."}
    </div>
  );
};

export default Terminal;
