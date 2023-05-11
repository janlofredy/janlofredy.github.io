<script setup lang="ts">
import {
    Scene,
    PerspectiveCamera,
    Mesh,
    MeshPhongMaterial,
    WebGLRenderer,
    SphereGeometry,
    BoxGeometry,
    Color,
    Fog,
    HemisphereLight,
    AmbientLight,
    GridHelper
} from "three"
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js"
import { Ref } from "vue"
import { useWindowSize } from "@vueuse/core"

let renderer: WebGLRenderer
const { width, height } = useWindowSize()
const windowAspectRatio = computed(() => width.value / height.value)
// const displayAspectRatio = computed(() => (width.value - 20) * 2 / (width.value - 20))

const myCanvas: Ref<HTMLCanvasElement| null> = ref(null)
const scene = new Scene()
const bgColor = new Color("#CCFBF1")
scene.fog = new Fog(bgColor, 0.1, 75)
scene.background = bgColor

const light = new AmbientLight(0x4F4F4F, 1)
// scene.add(light)
const light2 = new HemisphereLight(0xFFFFBB, 0x080820, 1)
scene.add(light2)
window.console.log(light)

const camera = new PerspectiveCamera(75, windowAspectRatio, 0.1, 1000)
camera.position.set(0, 2, 0)
scene.add(camera)

let myChar: PointerLockControls

const size = 100
const divisions = 500
const gridHelper = new GridHelper(size, divisions)
scene.add(gridHelper)

const sphere = new Mesh(
    new SphereGeometry(1, 32, 32),
    new MeshPhongMaterial({ color: 0xA855F7 })
)
sphere.position.set(0, 2, -10)
scene.add(sphere)
const sphere2 = new Mesh(
    new SphereGeometry(1, 32, 32),
    new MeshPhongMaterial({ color: 0xA855F7 })
)
sphere2.position.set(0, 2, 10)
scene.add(sphere2)

const sphere3 = new Mesh(
    new SphereGeometry(1, 32, 32),
    new MeshPhongMaterial({ color: 0xA855F7 })
)
sphere3.position.set(-10, 2, 0)
scene.add(sphere3)
const sphere4 = new Mesh(
    new SphereGeometry(1, 32, 32),
    new MeshPhongMaterial({ color: 0xA855F7 })
)
sphere4.position.set(10, 2, 0)
scene.add(sphere4)

const boxy = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshPhongMaterial({ color: 0xA855F7 })
)
boxy.position.set(0, 2, 0)
scene.add(boxy)
const box = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshPhongMaterial({ color: 0xA855F7 })
)
box.position.set(10, 2, -10)
scene.add(box)
const box2 = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshPhongMaterial({ color: 0xA855F7 })
)
box2.position.set(-10, 2, 10)
scene.add(box2)

const box3 = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshPhongMaterial({ color: 0xA855F7 })
)
box3.position.set(-10, 2, -10)
scene.add(box3)
const box4 = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshPhongMaterial({ color: 0xA855F7 })
)
box4.position.set(10, 2, 10)
scene.add(box4)

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
    camera.aspect = windowAspectRatio.value
    camera.updateProjectionMatrix()
}
const updateRenderer = () => {
    // renderer.setSize(width.value - 20, (width.value - 20) / 2)
    renderer.setSize(width.value / 1.10, height.value / 1.10)
    renderer.render(scene, camera)
}

onMounted(() => {
    setRenderer()
    myChar = new PointerLockControls(camera, renderer.domElement)
    myChar.enabled = true
    myChar.dragToLook = true
    myChar.movementSpeed = 0.5
    loop()
})
watch(windowAspectRatio, () => {
    updateCamera()
    updateRenderer()
})

// let mouseClickLocationX = 0
// let mouseClickLocationY = 0
let maxXrot = 0
let maxYrot = 0
let minXrot = 0
let minYrot = 0
let maxZrot = 0
let minZrot = 0
// let dragging = false
let currentHeight = 2
const floor = 2
let moveForward = false
let moveLeft = false
let moveBack = false
let moveRight = false
let moveUp = false
let moveDown = false
let flyMode = false
// const yLimit = -0.75
// const sphereLimit = -25
const loop = () => {
    box.rotation.y -= 0.025
    box2.rotation.y -= 0.025
    box3.rotation.y -= 0.025
    box4.rotation.y -= 0.025
    box.rotation.x -= 0.025
    box2.rotation.x -= 0.025
    box3.rotation.x -= 0.025
    box4.rotation.x -= 0.025
    boxy.rotation.y -= 0.025
    boxy.rotation.x -= 0.025
    // myChar.update(1.0)
    // if (sphere.position.z > sphereLimit) {
    //     sphere.position.z -= 0.1
    // }
    // window.console.log("Sphere= " + sphere.position.x)
    // window.console.log("Camera= " + camera.rotation.y)
    // window.console.log(mouseClickLocationX)
    // window.console.log(mouseClickLocationY)
    if (minXrot < camera.rotation.x) {
        minXrot = camera.rotation.x
    }
    if (maxXrot > camera.rotation.x) {
        maxXrot = camera.rotation.x
    }
    if (minYrot < camera.rotation.y) {
        minYrot = camera.rotation.y
    }
    if (maxYrot > camera.rotation.y) {
        maxYrot = camera.rotation.y
    }
    if (minZrot < camera.rotation.z) {
        minZrot = camera.rotation.z
    }
    if (maxZrot > camera.rotation.z) {
        maxZrot = camera.rotation.z
    }
    // xrot = +-3.2;
    // yrot = +-1.5;
    // zrot = +-3.1
    // window.console.log(minXrot)
    // window.console.log(maxXrot)
    // window.console.log(minYrot)
    // window.console.log(maxYrot)
    // window.console.log(minZrot)
    // window.console.log(maxZrot)
    if (moveForward) {
        myChar.moveForward(0.175)
    }
    if (moveBack) {
        myChar.moveForward(-0.175)
    }
    if (moveRight) {
        myChar.moveRight(0.175)
    }
    if (moveLeft) {
        myChar.moveRight(-0.175)
    }
    if (moveUp) {
        currentHeight += 0.175
    }
    if (moveUp && !flyMode) {
        currentHeight += 0.175
    } else if (moveDown || !flyMode) {
        currentHeight -= 0.175
        if (currentHeight < floor) {
            currentHeight = 2
        }
    }
    camera.position.y = currentHeight
    camera.updateProjectionMatrix()
    renderer.render(scene, camera)
    requestAnimationFrame(loop)
}
window.addEventListener("keydown", (key) => {
    if (key.key === "w") {
        moveForward = true
    }
    if (key.key === "s") {
        moveBack = true
    }
    if (key.key === "d") {
        moveRight = true
    }
    if (key.key === "a") {
        moveLeft = true
    }
    if (key.key === " ") {
        moveUp = true
    }
    if (key.keyCode === 16) {
        moveDown = true
    }
})
let lastSpacePressedTime = 0
const doublePressDelayMS = 500
window.addEventListener("keyup", (key) => {
    if (key.key === "w") {
        moveForward = false
    }
    if (key.key === "s") {
        moveBack = false
    }
    if (key.key === "d") {
        moveRight = false
    }
    if (key.key === "a") {
        moveLeft = false
    }
    if (key.key === " ") {
        moveUp = false
        const pressedNow = new Date()
        if (pressedNow - lastSpacePressedTime <= doublePressDelayMS) {
            flyMode = !flyMode
            lastSpacePressedTime = pressedNow
        }
        lastSpacePressedTime = pressedNow
    }
    if (key.keyCode === 16) {
        moveDown = false
    }
})
window.addEventListener("dblclick", () => {
    if (!myChar.isLocked) {
        myChar.lock()
    }
    // window.console.log(mouse)
})
// window.addEventListener("mousedown", () => {
//     if (!dragging) {
//         // mouseClickLocationX = mouse.screenX
//         // mouseClickLocationY = mouse.screenY
//         dragging = true
//     }
//     // window.console.log(mouse)
// })
// window.addEventListener("mouseup", () => {
//     dragging = false
//     // window.console.log(mouse)
// })
// window.addEventListener("mousemove", () => {
//     if (dragging) {
//         // mouse

//         // window.console.log(camera.rotation.x)
//         // window.console.log(mouseClickLocationY - mouse.screenY)
//         // window.console.log(mouseClickLocationX - mouse.screenX)
//         const test = new Vector3(0, 0, 0)
//         window.console.log(test)
//         // if (camera.rotation.x <= 1 && (mouseClickLocationY - mouse.screenY) > 0) {
//         // }
//         // if (camera.rotation.x >= -1 && (mouseClickLocationY - mouse.screenY) < 0) {
//         // }
//         // camera.rotateOnAxis(new Vector3(1, 0, 0), (mouseClickLocationY - mouse.screenY) / 100)
//         // camera.rotateOnWorldAxis(new Vector3(1, 0, 0), (mouseClickLocationY - mouse.screenY) / 100)
//         // camera.rotateOnWorldAxis(new Vector3(0, 1, 0), (mouseClickLocationX - mouse.screenX) / 100)
//         // mouseClickLocationX = mouse.screenX
//         // mouseClickLocationY = mouse.screenY
//         // camera.rotation.z = 0
//     }
// })

</script>
<template>
    <div>
        <canvas ref="myCanvas" />
    </div>
</template>
