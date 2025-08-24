import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;

vec4 tex2d(vec2 uv) {

  const int POINT_COUNT = 13;
  const float thickness = 1e-2;
  const float values[POINT_COUNT] = float[POINT_COUNT](
  1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0
  );

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

  float threshold = 1e-1;
  vec2 unit = vec2(float(POINT_COUNT)-1.0, 10.0);
  vec2 offsetUV = uv + vec2(1.0/unit.x, 0.0);
  if (abs(trunc(offsetUV.x * unit.x) - offsetUV.x * unit.x) < threshold ||
      abs(trunc(offsetUV.y * unit.y) - offsetUV.y * unit.y) < threshold) {
    return vec4(0.0,0.0,0.0,1.0);
  }

  return vec4(1.0);
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

  gl_FragColor = tex2d(coord);
}
`;

export default class Pattern2D extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
    });

    super(geometry, material);
  }
}
