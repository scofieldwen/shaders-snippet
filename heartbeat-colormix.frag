#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.149, 0.141, 0.912);
vec3 colorB = vec3(1.000, 0.833, 0.224);

float heartbeat(float t) {
    return 1.0 - pow(abs(t), 3.5);
}

void main() {
    vec3 color = vec3(0.0);
    
    float t = u_time;
    float pct = heartbeat(abs(fract(t)*2.0-1.));
    
    // Mix uses pct (a value from 0-1) to
    // mix the two colors
    color = mix(colorA, colorB, pct);
	
    gl_FragColor = vec4(color, 1.0);
}