import { useEffect, useRef } from "react";
import ThreeScene from "./ThreeScene";

function App() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (mountRef.current) {
      sceneRef.current = new ThreeScene(mountRef.current);
    }

    return () => {
      if (sceneRef.current) {
        sceneRef.current.dispose();
      }
    };
  }, []);

  return <canvas ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}

export default App;
