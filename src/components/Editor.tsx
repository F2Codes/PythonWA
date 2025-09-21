import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";

interface EditorProps {
  code: string;
  setCode: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ code, setCode }) => {
  return (
    <CodeMirror
      value={code}
      height="400px"
      extensions={[python()]}
      theme={dracula}
      onChange={(value) => setCode(value)}
    />
  );
};

export default Editor;
