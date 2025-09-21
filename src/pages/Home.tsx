import React, { useEffect, useState } from "react";
import Editor from "../components/Editor";
import Terminal from "../components/Terminal";
import { initPyodide, runPython } from "../utils/pyodide";

const Home: React.FC = () => {
  const [code, setCode] = useState("print('Hello PyF2')");
  const [output, setOutput] = useState("");

  useEffect(() => {
    initPyodide();
  }, []);

  const handleRun = async () => {
    const result = await runPython(code);
    setOutput(result);
  };

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6 font-roboto">
      <div className="flex-1">
        <Editor code={code} setCode={setCode} />
        <button
          onClick={handleRun}
          className="mt-4 bg-pyf2Blue hover:bg-pyf2Blue-dark text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          Run
        </button>
      </div>
      <div className="flex-1">
        <Terminal output={output} />
      </div>
    </div>
  );
};

export default Home;
