// fragment.glsl
uniform float uTime;
uniform vec2 uResolution;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

vec2 rotate(vec2 uv, float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c) * uv;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  uv -= 0.5;
  uv.x *= uResolution.x / uResolution.y;
  
  // Rotate 45 degrees
  uv = rotate(uv, radians(45.0));
  
  // Create flowing wave pattern that affects the stripe position
  // Use multiple octaves of noise for organic movement
  float wave = 0.0;
  wave += sin(uv.x * 2.0 + uTime * 0.5) * 0.4;
  wave += sin(uv.x * 3.0 - uTime * 0.3) * 0.2;
  wave += noise(vec2(uv.x * 1.5, uTime * 0.2)) * 0.3;
  
  // Apply wave to Y coordinate to bend the stripes
  float y = uv.y + wave;
  
  // Create clean stripes from the modified Y
  float stripePattern = sin(y * 8.0);
  float stripes = step(0.0, stripePattern);
  
  vec3 color = mix(
    vec3(0.09, 0.08, 0.08),
    vec3(0.21, 0.20, 0.20),
    stripes
  );

  gl_FragColor = vec4(color, 1.0);
}