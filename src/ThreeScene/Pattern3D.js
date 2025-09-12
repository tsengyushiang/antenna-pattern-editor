import * as THREE from "three";

const uvToIntensity = `
#define POINT_COUNT 13

uniform float horizontal[POINT_COUNT];
uniform float vertical[POINT_COUNT];

float transformY(vec2 uv) {
  float y = uv.y / 2.0;
  if (uv.x > 0.5) {
    return (0.5 - y) + 0.5;
  }
  return y;
}

float uvToIntensity(vec2 uv) {
  float stepX = 1.0 / float(POINT_COUNT - 1);

  float interpolatedHorizontalValue = 0.0;
  for (int i = 0; i < POINT_COUNT - 1; i++) {
    float x0 = float(i) * stepX;
    float x1 = float(i + 1) * stepX;
    if (uv.x >= x0 && uv.x <= x1) {
      float t = (uv.x - x0) / (x1 - x0);
      interpolatedHorizontalValue = mix(horizontal[i], horizontal[i + 1], t);
    }
  }
  float interpolatedVerticalValue = 0.0;
  for (int i = 0; i < POINT_COUNT - 1; i++) {
    float y = transformY(uv);
    float y0 = float(i) * stepX;
    float y1 = float(i + 1) * stepX;
    if (y >= y0 && y <= y1) {
      float t = (y - y0) / (y1 - y0);
      interpolatedVerticalValue = mix(vertical[i], vertical[i + 1], t);
    }
  }

  float value = min(interpolatedVerticalValue, interpolatedHorizontalValue);

  return value;
}
`;

const vertexShader = `
varying vec2 vUv;
varying float vIntensity;

${uvToIntensity}

vec3 uvToSphere(vec2 uv, float r) {
  float theta = uv.y * 3.14159265359;
  float phi = uv.x * 6.28318530718;
  float sinTheta = sin(theta);
  return vec3(
    r * sinTheta * cos(phi),
    r * cos(theta),
    r * sinTheta * sin(phi)
  );
}

void main() {
  vUv = position.xy;
  vIntensity = uvToIntensity(vUv);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(uvToSphere(vUv, vIntensity), 1.0);
}
`;

const fragmentShader = `
varying float vIntensity;

${uvToIntensity}

vec3 hue2rgb(float h) {
  h = fract(h) * 6.0;
  vec3 rgb = clamp(
    abs(mod(h + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0,
    0.0,
    1.0
  );
  return rgb;
}

void main() {
  vec3 color = hue2rgb(1.0 - vIntensity);
  gl_FragColor = vec4(color, 0.8);
}
`;

export default class Pattern3D extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.BufferGeometry();

    const segments = 100;
    const uvs = [];
    for (let row = 0; row < segments; row++) {
      for (let col = 0; col < segments; col++) {
        const uv00 = [row, col, 0];
        const uv01 = [row, col + 1, 0];
        const uv10 = [(row + 1) % segments, col, 0];
        const uv11 = [(row + 1) % segments, col + 1, 0];

        uvs.push(...uv00, ...uv10, ...uv11);
        uvs.push(...uv00, ...uv11, ...uv01);
      }
    }
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array(uvs.map((uv) => uv / segments)),
        3
      )
    );

    const material = new THREE.ShaderMaterial({
      transparent: true,
      vertexShader,
      fragmentShader,
      uniforms: {
        horizontal: {
          value: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        },
        vertical: {
          value: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        },
      },
    });

    super(geometry, material);

    this.geometry = geometry;
  }

  setPattern(horizontal, vertical) {
    if (horizontal.length !== 12 || vertical.length !== 12) {
      console.warn("invalid pattern data");
      return;
    }
    this.material.uniforms.horizontal.value = [...horizontal, horizontal[0]];
    this.material.uniforms.vertical.value = [...vertical, vertical[0]];
  }
}
