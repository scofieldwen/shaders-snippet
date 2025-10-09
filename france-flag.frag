#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// 定义三种颜色（可自由修改）
vec3 colorA = vec3(0.216, 0.471, 0.953); // 蓝（法国旗左）
vec3 colorB = vec3(1.000, 1.000, 1.000); // 白（中）
vec3 colorC = vec3(0.988, 0.000, 0.000); // 红（右）

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

float t = abs(fract(u_time * 0.2)*2.0-1.);
    
void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    
    float stepY1 = step(1.0/3.0, st.x);
    float stepY2 = step(2.0/3.0, st.x);
    
    // vec3 color = vec3(0.0);
    vec3 color = vec3(0.912,0.462,0.231);

    // float pct = plot(st, y);

    // pct.r = smoothstep(0.0, 1.792, st.x);
    // pct.g = sin(st.x*PI);
    // pct.b = pow(t,0.5);

    color = mix(colorA, colorB, stepY1);
    color = mix(color, colorC, stepY2);

    // Plot transition lines for each channel
    // color = mix(color,vec3(1.0,0.0,0.0),plot(st,pct.r));
    // color = mix(color,vec3(0.0,1.0,0.0),plot(st,pct.g));
    // color = mix(color,vec3(0.0,0.0,1.0),plot(st,pct.b));
    
    // color = (1.0-pct)*color+pct*vec3(0.0, 1.0, 0.0);
    // color = (pct)*colorC;

    gl_FragColor = vec4(color,1.0);
}