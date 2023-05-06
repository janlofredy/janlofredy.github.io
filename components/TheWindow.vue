<script setup lang="ts">
import {
    Scene,
    PerspectiveCamera,
    Mesh,
    MeshBasicMaterial,
    WebGLRenderer,
    SphereGeometry,
    Color,
    Fog
} from "three"
import { Ref } from "vue"
import { useWindowSize } from "@vueuse/core"

let renderer: WebGLRenderer
const { width, height } = useWindowSize()
const windowAspectRatio = computed(() => width.value / height.value)
const displayAspectRatio = computed(() => width.value * 2 / width.value)

const myCanvas: Ref<HTMLCanvasElement| null> = ref(null)
const scene = new Scene()
const bgColor = new Color("#CCFBF1")
scene.fog = new Fog(bgColor, 0.1, 75)
scene.background = bgColor

const camera = new PerspectiveCamera(75, displayAspectRatio, 0.1, 1000)
camera.position.set(0, 0, 4)
scene.add(camera)

const sphere = new Mesh(
    new SphereGeometry(1, 32, 32),
    new MeshBasicMaterial({ color: 0xFF0000 })
)
sphere.position.set(0, 0, 0)
scene.add(sphere)
const sphere2 = new Mesh(
    new SphereGeometry(1, 32, 32),
    new MeshBasicMaterial({ color: 0xFF0000 })
)
sphere2.position.set(0, 0, 10)
scene.add(sphere2)

const setRenderer = () => {
    if (myCanvas.value) {
        renderer = new WebGLRenderer({
            canvas: myCanvas.value,
            alpha: true
        })
        updateCamera()
        updateRenderer()
    }
}

const updateCamera = () => {
    camera.aspect = displayAspectRatio.value
    camera.updateProjectionMatrix()
}
const updateRenderer = () => {
    renderer.setSize(width.value, width.value / 2)
    renderer.render(scene, camera)
}

onMounted(() => {
    setRenderer()
    loop()
})
watch(windowAspectRatio, () => {
    updateCamera()
    updateRenderer()
})

let mouseClickLocationX = 0
let mouseClickLocationY = 0
let dragging = false
// const yLimit = -0.75
// const sphereLimit = -25
const loop = () => {
    // if (sphere.position.z > sphereLimit) {
    //     sphere.position.z -= 0.1
    // }
    // window.console.log("Sphere= " + sphere.position.x)
    // window.console.log("Camera= " + camera.rotation.y)
    // window.console.log(mouseClickLocationX)
    // window.console.log(mouseClickLocationY)
    camera.updateProjectionMatrix()
    renderer.render(scene, camera)
    requestAnimationFrame(loop)
}
window.addEventListener("keydown", (key) => {
    if (key.key === "w") {
        camera.translateZ(-0.75)
    }
    if (key.key === "s") {
        camera.translateZ(0.75)
    }
    if (key.key === "a") {
        camera.translateX(-0.75)
    }
    if (key.key === "d") {
        camera.translateX(0.75)
    }
})
window.addEventListener("mousedown", (mouse) => {
    if (!dragging) {
        mouseClickLocationX = mouse.screenX
        mouseClickLocationY = mouse.screenY
        dragging = true
    }
    // window.console.log(mouse)
})
window.addEventListener("mouseup", () => {
    dragging = false
    // window.console.log(mouse)
})
window.addEventListener("mousemove", (mouse) => {
    if (dragging) {
        // window.console.log(mouse)
        // window.console.log(mouseClickLocationY - mouse.screenY)
        camera.rotateX((mouseClickLocationY - mouse.screenY) / 100)
        camera.rotateY((mouseClickLocationX - mouse.screenX) / 100)
        mouseClickLocationX = mouse.screenX
        mouseClickLocationY = mouse.screenY
    }
})

</script>
<template>
    <div>
        <canvas ref="myCanvas" />
    </div>
</template>
