import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Pattern2D from "./Pattern2D";
import Pattern3D from "./Pattern3D";

export default class ThreeScene {
  constructor(canvas) {
    this.canvas = canvas;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    this.camera.position.z = 3;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas,
      alpha: true,
    });
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.minPolarAngle = 0.1;
    this.controls.maxPolarAngle = 3.0;

    this.pattern3D = new Pattern3D();
    this.verticalPattern2D = new Pattern2D();
    this.verticalPattern2D.rotateZ(-Math.PI / 2);
    this.verticalPattern2D.rotateX(-Math.PI / 2);

    this.horizontalPattern2D = new Pattern2D();
    this.horizontalPattern2D.rotateX(Math.PI / 2);
    this.horizontalPattern2D.rotateZ(Math.PI);

    this.scene.add(this.pattern3D);
    this.scene.add(this.verticalPattern2D);
    this.scene.add(this.horizontalPattern2D);

    this.animate = this.animate.bind(this);
    this.handleResize = this.handleResize.bind(this);

    this.animate();

    window.addEventListener("resize", this.handleResize);
  }

  handleResize() {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.renderer.dispose();
    window.removeEventListener("resize", this.handleResize);
  }

  setPattern(horizontal, vertical) {
    this.horizontalPattern2D.setPattern(horizontal);
    this.verticalPattern2D.setPattern(vertical);
    this.pattern3D.setPattern(horizontal, vertical);
  }

  setVisibility({ horizontal, vertical, pattern3d }) {
    this.horizontalPattern2D.visible = horizontal;
    this.verticalPattern2D.visible = vertical;
    this.pattern3D.visible = pattern3d;
  }
}
