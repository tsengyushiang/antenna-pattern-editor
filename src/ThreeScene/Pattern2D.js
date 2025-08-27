import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
#define POINT_COUNT 13

varying vec2 vUv;
uniform float values[POINT_COUNT];
uniform float thickness;

vec4 tex2d(vec2 uv) {

  float stepX = 1.0 / float(POINT_COUNT - 1);
  float interpolatedValue = 0.0;

  for (int i = 0; i < POINT_COUNT - 1; i++) {
    float x0 = float(i) * stepX;
    float x1 = float(i + 1) * stepX;
    if (uv.x >= x0 && uv.x <= x1) {
      float t = (uv.x - x0) / (x1 - x0);
      interpolatedValue = mix(values[i], values[i + 1], t);
    }
  }

  if (abs(uv.y - interpolatedValue) < thickness) {
    return vec4(1.0, 0.0, 0.0, 1.0);
  }

  float threshold = 2e-2;
  vec2 unit = vec2(float(POINT_COUNT)-1.0, 10.0);
  vec2 offsetUV = uv + vec2(1.0/unit.x, 0.0);
  if (abs(trunc(offsetUV.x * unit.x) - offsetUV.x * unit.x) < threshold ||
      abs(trunc(offsetUV.y * unit.y) - offsetUV.y * unit.y) < threshold) {
    return vec4(0.0,0.0,0.0,1.0);
  }

  return vec4(0.0);
}

vec2 cartesianToPolar(vec2 xy) {
  float r = length(xy) / 0.5;
  float theta = atan(xy.y, xy.x) + 3.1415926;
  return vec2(theta / 6.28, r);
}

void main() {
  vec2 uv = vUv;
  vec2 coord = cartesianToPolar(uv - vec2(0.5));

  if (length(uv - vec2(0.5)) > 0.5+1e-2) discard;

  vec4 color = tex2d(coord);
  if(color.a < 1e-3){
    discard;
    return;
  }

  gl_FragColor = color;
}
`;

export default class Pattern2D extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
      uniforms: {
        values: {
          value: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        },
        thickness: {
          value: 2e-2,
        },
      },
    });

    super(geometry, material);
  }

  setPattern(data) {
    if (data.length !== 12) {
      console.warn("invalid pattern data");
      return;
    }
    this.material.uniforms.values.value = [...data, data[0]];
  }
}
