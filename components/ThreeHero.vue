<template>
  <!-- <div ref="container" style="width: 100%; height: 100%; opacity: 0"></div> -->
  <canvas id="canvas" ref="container" style="width: 100%; height: 100%; opacity: 0"></canvas>
</template>

<script setup>
import {
  PerspectiveCamera,
  Scene,
  TextureLoader,
  MeshPhongMaterial,
  Mesh,
  WebGLRenderer,
  IcosahedronGeometry,
  DirectionalLight,
  AmbientLight,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// const container = ref();

// index or about
const props = defineProps({
  textureUrl: {
    type: String,
    default: '/5.avif',
  },
  page: {
    type: String,
    default: 'index',
  },
});

let camera,
  scene,
  renderer,
  raf,
  canvas,
  controls,
  timeout_Debounce,
  noise = new SimplexNoise(),
  mesh,
  meshsSpeed = 0.1,
  blobScale = 3,
  minX = -110,
  maxX = 110,
  minY = -70,
  maxY = 70;
// minX = -60,
// maxX = 60,
// minY = -40,
// maxY = 40;

const target = {
  position: {
    x: null,
    y: null,
  },
};

const funcResize = () => {
  clearTimeout(timeout_Debounce);
  timeout_Debounce = setTimeout(onWindowResize, 80);
};

const onWindowResize = () => {
  // camera.aspect = container.value.clientWidth / container.value.clientHeight;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  // renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
};

const animate = () => {
  mesh.geometry.vertices.forEach(function (v) {
    let time = Date.now();
    v.normalize();
    let distance =
      mesh.geometry.parameters.radius +
      noise.noise3D(v.x + time * 0.0005, v.y + time * 0.0003, v.z + time * 0.0008) * blobScale;
    v.multiplyScalar(distance);
  });

  mesh.geometry.verticesNeedUpdate = true;
  mesh.geometry.normalsNeedUpdate = true;
  mesh.geometry.computeVertexNormals();
  mesh.geometry.computeFaceNormals();

  if (props.page === 'index') {
    if (mesh.position.x < minX) mesh.position.x = minX;
    if (mesh.position.x > maxX) mesh.position.x = maxX;
    if (mesh.position.y < minY) mesh.position.y = minY;
    if (mesh.position.y > maxY) mesh.position.y = maxY;

    if (target.position.x && target.position.y) {
      if (mesh.position.x / 8 <= target.position.x) {
        mesh.position.x += meshsSpeed;
      }
      if (mesh.position.x / 8 >= target.position.x) {
        mesh.position.x -= meshsSpeed;
      }
      if (mesh.position.y / 8 <= target.position.y) {
        mesh.position.y += meshsSpeed;
      }
      if (mesh.position.y / 8 >= target.position.y) {
        mesh.position.y -= meshsSpeed;
      }
    }
  }

  mesh.rotation.y += 0.006;
  controls.update();

  renderer.render(scene, camera);
};

const onMouseMove = (e) => {
  var centerX = window.innerWidth * 0.5;
  var centerY = window.innerHeight * 0.5;

  target.position.x = (e.clientX - centerX) * 0.02;
  target.position.y = (e.clientY - centerY) * 0.02;
};

const run = () => {
  raf = requestAnimationFrame(run);
  animate();
};

onMounted(() => {
  console.log('THREE onMounted');
  init();

  run();

  setTimeout(() => {
    // container.value.style.opacity = '1';
    canvas.style.opacity = '1';
  }, 1000);

  function init() {
    canvas = document.getElementById('canvas');
    if (props.page === 'index') {
      // camera = new PerspectiveCamera(
      //   45,
      //   container.value.clientWidth / container.value.clientHeight,
      //   0.01,
      //   1000
      // );
      camera = new PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.01, 1000);
      camera.position.set(0, 0, 200);
    } else if (props.page === 'about') {
      camera = new PerspectiveCamera(30, canvas.clientWidth / canvas.clientHeight, 0.01, 1000);
      // camera = new PerspectiveCamera(
      //   30,
      //   container.value.clientWidth / container.value.clientHeight,
      //   0.01,
      //   1000
      // );
      if (window.innerWidth < 768) {
        camera.position.set(0, 0, 200);
      } else {
        camera.position.set(0, 0, 170);
      }
    }

    scene = new Scene();
    const geometry = new IcosahedronGeometry(30, 10);

    // const gridHelper = new GridHelper(100, 20);
    // scene.add(gridHelper);

    const directionalLight = new DirectionalLight('#fff', 2);
    directionalLight.position.set(0, 50, -20);
    scene.add(directionalLight);

    const ambientLight = new AmbientLight('#fff', 1);
    ambientLight.position.set(0, 20, 20);
    scene.add(ambientLight);

    const texture = new TextureLoader().load(props.textureUrl);
    texture.anisotropy = 16;
    const material = new MeshPhongMaterial({ map: texture });
    mesh = new Mesh(geometry, material);

    if (window.innerWidth < 768) {
      mesh.position.set(0, 0, 0);
    } else {
      if (props.page === 'index') {
        mesh.position.set(-35, 20, 0);
      } else {
        mesh.position.set(0, 0, 0);
      }
    }
    scene.add(mesh);
    renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize(container.value.clientWidth, container.value.clientHeight);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    controls = new OrbitControls(camera, renderer.domElement);
    // controls.autoRotate = true;
    // controls.autoRotateSpeed = 4;
    controls.maxDistance = 350;
    controls.minDistance = 150;
    controls.enablePan = false;

    // container.value.appendChild(renderer.domElement);
    // container.value.append(renderer.domElement);
    // container.value.style.touchAction = 'none';
    canvas.style.touchAction = 'none';
    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('resize', funcResize);
  }
});

function disposeObject(object) {
  if (!object) return;
  const geometries = new Map();
  const materials = new Map();
  const textures = new Map();
  object.traverse((object) => {
    const mesh = object;
    if (mesh.isMesh) {
      const geometry = mesh.geometry;
      if (geometry) {
        geometries.set(geometry.uuid, geometry);
      }
      const material = mesh.material;
      if (material) {
        materials.set(material.uuid, material);
        for (const key in material) {
          const texture = material[key];
          if (texture && texture.isTexture) {
            textures.set(texture.uuid, texture);
          }
        }
      }
    }
  });
  for (const entry of textures) {
    entry[1].dispose();
  }
  for (const entry of materials) {
    entry[1].dispose();
  }
  for (const entry of geometries) {
    entry[1].dispose();
  }
}

function cleanUpThree(scene, renderer) {
  disposeObject(scene);
  renderer.dispose();
}

onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  cleanUpThree(scene, renderer);
});

onUnmounted(() => {
  console.log('onUnmounted');
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('resize', funcResize);
});
</script>
