import { useEffect, useRef } from "react";
import ThreeScene from "./ThreeScene";

function App() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (mountRef.current) {
      sceneRef.current = new ThreeScene(mountRef.current);
      sceneRef.current.setPattern(
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1]
      );
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
