<template>
  <header style="z-index: 1;" ref="header" class="header_">
    <a class="sphere-dev" href="/">
      <svg viewBox="0 0 450 310" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M449.4 12.32V297.67C449.4 304.36 443.98 309.79 437.28 309.79H182.63C176.28 309.79 170.97 304.89 170.56 298.55C165 213.57 96.82 145.38 11.84 139.81C5.5 139.39 0.600006 134.09 0.600006 127.74V12.58C0.600006 5.72999 6.26999 0.189991 13.11 0.459991C91.11 3.53999 163.98 35.38 219.49 90.91C244.72 116.14 265.06 144.95 280.03 176.22C284.77 186.1 288.97 196.22 292.61 206.57C293.88 210.64 297.99 213.48 302.61 212.76C307.05 212.07 310.15 207.94 310.15 203.44V12.33C310.15 5.63999 315.57 0.209991 322.27 0.209991H437.27C443.96 0.209991 449.39 5.62999 449.39 12.33L449.4 12.32Z"
          fill="white" />
      </svg>
    </a>

  </header>

  <img ref="myImage" id="myImage" src="~/assets/artboard.png"
    style="z-index: 1; position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); opacity: 0; width: 200px; height: 200px;">
  <div ref="myText" id="myText"
    style="z-index: 1; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white;">
    <span class="letter">S</span>
    <span class="letter">p</span>
    <span class="letter">h</span>
    <span class="letter">e</span>
    <span class="letter">r</span>
    <span class="letter">e</span>
    <span class="letter">.</span>
    <span class="letter">d</span>
    <span class="letter">e</span>
    <span class="letter">v</span>
  </div>

  <div>
    <div ref="threeContainer" class="o-page__gl three-container"></div>
    <main>
      <section class="o-hero">
        <div class="o-hero__center">
          <div class="center_text">
            <div class="o-hero__heading">
              <h1 id="mainHeading" class="is-b is-in-view" ref="title">
                <span>Digital Agency,</span>
                <br>
                <span>Creative</span>
                <br>
                <span>& Web Development,</span>
                <br>
                <span>based in Nancy</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section class="o-projects">
        <div class="center_text">
          <h3 class="h1_prop" ref="contact">Contact Us</h3>
          <!-- <p style="margin-bottom: 50%;">
            if you want to work with us, or just say hello, don't hesitate to send us an email at contact@spheredev.studio
            </p> -->
        </div>
      </section>

    </main>
  </div>


</template>

<style>
@media(max-width: 575px) {
  .o-footer__talk {
    padding-top: 5rem
  }
}

.o-projects {
  padding: 9.375rem 0 0
}

@media(max-width: 1280px) {
  .o-projects {
    padding-bottom: 9.375rem
  }
}

@media(max-width: 767px) {
  .o-projects {
    padding: 6.25rem 0
  }
}

@media(max-width: 575px) {
  .o-projects {
    padding: 4.375rem 0
  }
}

.o-hero {
  display: table;
  height: 100vh;
  position: relative;
  width: 100%;
}

.o-hero__center {
  display: table-cell;
  vertical-align: middle;

}

.o-hero__heading {
  position: relative;
}

main {
  contain: content;
  width: 100%;
}

.o-page__gl {
  pointer-events: none
}

.o-page__gl canvas {
  contain: layout style size;
  left: 0;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0;
  -ms-touch-action: none;
  touch-action: none
}

.three-container {
  z-index: -1;
}

/* .three-container canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
} */

.menu {
  position: absolute;
  height: 2.3125rem;
  width: 5.8125rem;
  right: 5.8125rem;
  top: 5.875rem;
  /* display: none; */
  text-transform: uppercase;
  font-weight: 700;
}

@media (max-width: 1024px) {
  .menu {
    display: block;
    /* Le menu s'affiche sur les petits écrans */
  }
}

@media (max-width: 575px) {
  .menu {
    right: 0.1rem;
    top: 1.8rem;
  }
}

.sphere-dev {
  left: 5.8125rem;
  top: 5.875rem;
  position: absolute;
  height: 2.3125rem;
  width: 2.8125rem;
}

@media (max-width: 575px) {
  .sphere-dev {
    left: 1.875rem;
    top: 1.875rem;
  }
}

a {
  color: #FFF;
}

a,
b,
body,
canvas,
code,
div,
footer,
form,
h1,
h2,
h3,
h4,
h5,
header,
html,
i,
img,
label,
li,
main,
nav,
p,
section,
small,
span,
tr,
ul {
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  text-size-adjust: none;
  border: 0;
  font-size: 100%;
  font: inherit;
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  vertical-align: baseline
}

.header_ {
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  position: fixed;
  justify-content: space-between;
  opacity: 0;
}

.center_text {
  margin: 0 auto;
  max-width: 146.75rem;
  padding: 0 13.75rem
}

@media(max-width: 1780px) {
  .center_text {
    padding: 0 9.375rem
  }
}

@media(max-width: 1023px) {
  .center_text {
    padding: 0 5.625rem;
    margin-bottom: 1.25rem;
  }
}

@media(max-width: 575px) {
  .center_text {
    padding: 0 1.875rem
  }
}

.center_text_position {
  position: relative;
}

.three-container {
  width: 100%;
  height: 100%;
}

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  font-synthesis: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  height: 100%;
  overflow: hidden;
  width: 100%
}

footer,
header,
main,
nav,
section {
  display: block
}

.letter {
  opacity: 0;
  display: inline-block;
  font-size: 5.75rem;
  font-weight: 500;
}

@media (max-width: 575px) {
  .letter {
    opacity: 0;
    font-size: 2.25rem;
  }
}

.h1_prop,
h1 {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  color: #fff;
  font-size: 7.875rem;
  font-weight: 500;
  line-height: .95;
  margin: .9375rem 0 1.25rem;
  text-indent: -.3125rem;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  opacity: 0;
}

@media(max-width: 1280px) {

  .h1-prop,
  h1 {
    font-size: 8rem;
    text-indent: -1.5px
  }
}

@media(max-width: 1023px) {

  .h1-prop,
  h1 {
    font-size: 8rem
  }
}

@media(max-width: 767px) {

  .h1-prop,
  h1 {
    font-size: 5.625rem;
    text-indent: -.125rem
  }
}

@media(max-width: 575px) {

  .h1-prop,
  h1 {
    font-size: 3.75rem
  }
}

h1.is-b {
  font-size: 6.5rem
}

@media(max-width: 1780px) {
  h1.is-b {
    font-size: 5.875rem
  }
}

@media(max-width: 767px) {
  h1.is-b {
    font-size: 4.625rem
  }
}

@media(max-width: 575px) {
  h1.is-b {
    font-size: 2.75rem
  }
}

.h1.is-in-view {
  -webkit-transform: translateX(-105%);
  -ms-transform: translateX(-105%);
  transform: translateX(-105%)
}

h3 {
  font-size: 4rem;
  line-height: 1.2
}
</style>

<script>
import * as THREE from 'three';
import Lenis from '@studio-freight/lenis'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
import { gsap } from 'gsap';

export default {
  data() {
    return {
      isCameraAnimationComplete: false,
      targetZ: 30,
      isMenuOpen: false,
    };
  },
  mounted() {
    this.initThreeScene();
    this.animate();
    this.animateCameraPosition();
    this.scrollSmooth();
  },
  beforeDestroy() {
    cancelAnimationFrame(this.animationFrameId);
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {

    destroyMyTextAndMyImage() {
      if (this.$refs.myText) {
        this.$refs.myText.remove();
      }
      if (this.$refs.myImage) {
        this.$refs.myImage.remove();
      }
    },

    scrollSmooth() {
      const lenis = new Lenis()

      lenis.on('scroll', (e) => {
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    },

    animateH1() {
      gsap.fromTo(
        this.$refs.title,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: 'power4.out',
        }
      )
    },

    animateContact() {
      gsap.fromTo(
        this.$refs.contact,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: 'power4.out',
        }
      )
    },

    displayHeader() {
      gsap.to(this.$refs.header, {
        duration: 1.5,
        opacity: 1,
        ease: "power2.inOut",
      });
    },


    initThreeScene() {
      this.scene = new THREE.Scene();
      const canvas = this.$refs.threeContainer;
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      canvas.appendChild(this.renderer.domElement);

      const geometry = new THREE.IcosahedronGeometry(10, 64);

      this.camera.position.z = 200;

      let speed = 0.09;

      this.uniforms = {
        uTime: { value: 0.0 },
        uSpeed: { value: speed },
        uNoiseDensity: { value: 0.6 },
        uNoiseStrength: { value: 0.18 },
        uFrequency: { value: 3 },
        uAmplitude: { value: 6 },
        uHue: { value: 0.5 },
        color1: { value: new THREE.Color(0x181338) },
        color2: { value: new THREE.Color(0xe45500) },
        color3: { value: new THREE.Color(0xeb4217) },
        uAlpha: { value: 1.0 },
        defines: {
          PI: Math.PI
        },
      };

      // Vertex Shader
      const vertexShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPos;
    varying float vDistort;
  
    uniform float uTime;
    uniform float uSpeed;
    uniform float uNoiseDensity;
    uniform float uNoiseStrength;
    uniform float uFrequency;
    uniform float uAmplitude;
    uniform float uOffset;
  
  vec3 mod289(vec3 x)
  {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec4 mod289(vec4 x)
  {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec4 permute(vec4 x)
  {
    return mod289(((x*34.0)+1.0)*x);
  }
  
  vec4 taylorInvSqrt(vec4 r)
  {
    return 1.79284291400159 - 0.85373472095314 * r;
  }
  
  vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
  }
  
  float pnoise(vec3 P, vec3 rep)
  {
    vec3 Pi0 = mod(floor(P), rep);
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P);
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
  
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
  
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  
    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
  
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
  
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
  
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
  }
  
    mat3 rotation3dY(float angle) {
      float s = sin(angle);
      float c = cos(angle);
      return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
    }
  
    vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }
  
  
  float map(float value, float inMin, float inMax, float outMin, float outMax) {
    return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
  }
  
  void main() {
    vUv = uv;
    
    float t = uTime * uSpeed;
    float distortion = pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;
  
    vec3 pos = position + (normal * distortion);
    float angle = sin(uv.y * uFrequency + t) * uAmplitude;
    pos = rotateY(pos, angle);
  
    pos *= map(sin(uTime + uOffset), -1.0, 1.0, 1.0, 1.2);
  
    vDistort = distortion;
  
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
  }
  `;

      const fragmentShader = `
  varying vec2 vUv;
  varying float vDistort;
  
  uniform float uTime;
  uniform float uHue;
  uniform float uAlpha;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform vec3 color3;
  
  vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
    return a + b * cos(6.28318 * (c * t + d));
  }   
  
  void main() {
    float distort = vDistort * 2.0;
  
    vec3 brightness = vec3(0.5, 0.5, 0.9);
    vec3 contrast = vec3(1, 1, 1);
    vec3 oscilation = vec3(1, 1, 1);
    vec3 phase = vec3(0.0, 0.1, 0.2);
  
    vec3 color = cosPalette(uHue + distort, brightness, contrast, oscilation, phase);
  
    gl_FragColor = vec4(color, uAlpha);
  }
  `;

      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
      };

      window.addEventListener('resize', () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        this.camera.aspect = sizes.width / sizes.height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(sizes.width, sizes.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      // Continuer l'initialisation comme avant...
      const material = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms: this.uniforms,
      });

      this.composer = new EffectComposer(this.renderer);
      this.composer.addPass(new RenderPass(this.scene, this.camera));

      const filmPass = new FilmPass(0.1, 0.025, 648, false);
      this.composer.addPass(filmPass);


      const directionalLight = new THREE.DirectionalLight('#ffffff', 3)
      const ambientLight = new THREE.AmbientLight('#ffffff', 1)
      directionalLight.position.set(10, 10, 10)
      this.scene.add(ambientLight)
      this.scene.add(directionalLight)

      const sphere = new THREE.Mesh(geometry, material);
      this.scene.add(sphere);


      //when the animation is complete, we rotate the sphere and the camera
      gsap.to(sphere.rotation, {
        delay: 3,
        duration: 4,
        x: 1.5,
        ease: "power2.inOut"
      });

      gsap.to(this.camera.position, {
        delay: 5,
        duration: 3,
        z: 13,
        ease: "power2.inOut"
      }).then(() => {
        this.animateH1();
        this.animateContact();
        // this.animateP();
        this.displayHeader();
        this.destroyMyTextAndMyImage();
      });
      ;

      gsap.to(".letter", {
        delay: 1,
        duration: 1.5,
        opacity: 1,
        stagger: 0.03, // Délai entre l'animation de chaque lettre
        ease: "power2.inOut", // Type d'effet d'ease
        onComplete: () => {
          fadeOutLetters();
          fadeOutImage();
        }
      });

      function fadeOutLetters() {
        gsap.to(".letter", {
          duration: 0.5,
          opacity: 0,
          stagger: 0.1,
          delay: 0.5,
          ease: "power2.inOut"
        });
      }

      //animation pour logo
      gsap.to("#myImage", {
        delay: 1.5, // Ou après l'animation du texte
        duration: 1.5,
        opacity: 1,
        ease: "power2.inOut",
        onComplete: fadeOutImage
      });

      function fadeOutImage() {
        gsap.to("#myImage", {
          duration: 0.5,
          opacity: 0,
          stagger: 0.1,
          delay: 1,
          ease: "power2.inOut",
        });
        speed = 0.009;
      }
    },

    animateCameraPosition() {
      if (!this.isCameraAnimationComplete) {
        gsap.to(this.camera.position, {
          z: this.targetZ,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
          },
          onComplete: () => {
            this.isCameraAnimationComplete = true;
          }
        });
      }
    },

    animate() {
      this.animationFrameId = requestAnimationFrame(this.animate);
      this.uniforms.uTime.value += 0.01;
      this.composer.render();
    },
  },
}
</script>