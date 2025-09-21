import React, { useState } from "react";
import Editor from "./components/Editor";
import Terminal from "./components/Terminal";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Statusbar from "./components/Statusbar";
import { runPython } from "./utils/pyodide";

const App: React.FC = () => {
  const [code, setCode] = useState("print('Hello PyF2!')");
  const [output, setOutput] = useState<string>("");

  const handleRun = async () => {
    const result = await runPython(code);
    setOutput(result);
  };

  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e] text-white font-['Roboto']">
      <Topbar onRun={handleRun} />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Editor code={code} setCode={setCode} />
          <Terminal output={output} />
        </div>
      </div>
      <Statusbar />
    </div>
  );
};

export default App;
