let pyodide: any = null;

export async function initPyodide() {
  if (!pyodide) {
    // @ts-ignore
    pyodide = await (window as any).loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/"
    });
  }
  return pyodide;
}

export async function runPython(code: string): Promise<string> {
  const py = await initPyodide();
  try {
    // redirect stdout
    await py.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
`);
    await py.runPythonAsync(code);
    const output = py.runPython("sys.stdout.getvalue()");
    return output;
  } catch (err: any) {
    return "⚠️ Error: " + String(err);
  }
}
