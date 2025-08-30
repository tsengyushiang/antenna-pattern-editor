import { useEffect, useRef } from "react";
import ThreeScene from "./ThreeScene";
import * as dat from "dat.gui";

const patternH = [0.5, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
const patternV = [1, 0.5, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1];
const visibility = {
  horizontal: true,
  vertical: true,
  pattern3d: true,
};

function App() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (mountRef.current) {
      sceneRef.current = new ThreeScene(mountRef.current);
      sceneRef.current.setPattern(patternH, patternV);
      sceneRef.current.setVisibility(visibility);
    }

    const onAngleChange = () => sceneRef.current.setPattern(patternH, patternV);
    const onVisibilityChange = () => sceneRef.current.setVisibility(visibility);
    const gui = new dat.GUI();

    const visibilityFolder = gui.addFolder("Visibility");
    visibilityFolder.add(visibility, "horizontal").onChange(onVisibilityChange);
    visibilityFolder.add(visibility, "vertical").onChange(onVisibilityChange);
    visibilityFolder.add(visibility, "pattern3d").onChange(onVisibilityChange);

    const vertical = gui.addFolder("Vertical Plane");
    patternV.forEach((_, index) => {
      vertical.add(patternV, `${index}`, 0, 1).onChange(onAngleChange);
    });

    const horizontal = gui.addFolder("Horizontal Plane");
    patternH.forEach((_, index) => {
      horizontal.add(patternH, `${index}`, 0, 1).onChange(onAngleChange);
    });

    return () => {
      if (sceneRef.current) {
        sceneRef.current.dispose();
      }
    };
  }, []);

  return <canvas ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}

export default App;
