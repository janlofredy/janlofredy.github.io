<script setup lang="ts">
import {
    Scene,
    PerspectiveCamera,
    Mesh,
    MeshStandardMaterial,
    WebGLRenderer,
    SphereGeometry,
    BoxGeometry,
    Color,
    Fog,
    DirectionalLight,
    AmbientLight,
    GridHelper
} from "three"
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js"

const containerRef = ref<HTMLDivElement | null>(null)
const myCanvas = ref<HTMLCanvasElement | null>(null)

let renderer: WebGLRenderer | null = null
let camera: PerspectiveCamera | null = null
let myChar: PointerLockControls | null = null
const isLocked = ref(false)
const flyModeActive = ref(false)

const scene = new Scene()
const bgColor = new Color("#030712") // Deep slate dark
scene.fog = new Fog(bgColor, 0.1, 85)
scene.background = bgColor

// Lighting
const ambientLight = new AmbientLight(0x1e293b, 1.5)
scene.add(ambientLight)

const dirLight = new DirectionalLight(0x2dd4bf, 2)
dirLight.position.set(10, 20, 10)
scene.add(dirLight)

const dirLight2 = new DirectionalLight(0x06b6d4, 1.5)
dirLight2.position.set(-10, -10, -10)
scene.add(dirLight2)

// Grid
const size = 100
const divisions = 100
const gridHelper = new GridHelper(size, divisions, 0x14b8a6, 0x1f2937)
scene.add(gridHelper)

// Meshes (Cyber / Engineering theme)
const boxMaterial = new MeshStandardMaterial({
    color: 0x0f172a,
    roughness: 0.2,
    metalness: 0.8,
})
const accentMaterial = new MeshStandardMaterial({
    color: 0x14b8a6,
    roughness: 0.1,
    metalness: 0.5,
})

const spheres: Mesh[] = []
const boxes: Mesh[] = []

const spherePositions = [
    [0, 2, -10],
    [0, 2, 10],
    [-10, 2, 0],
    [10, 2, 0],
]

spherePositions.forEach(([x, y, z]) => {
    const s = new Mesh(new SphereGeometry(1, 32, 32), accentMaterial)
    s.position.set(x, y, z)
    scene.add(s)
    spheres.push(s)
})

const boxPositions = [
    [0, 2, 0],
    [10, 2, -10],
    [-10, 2, 10],
    [-10, 2, -10],
    [10, 2, 10],
]

boxPositions.forEach(([x, y, z]) => {
    const b = new Mesh(new BoxGeometry(1.2, 1.2, 1.2), boxMaterial)
    b.position.set(x, y, z)
    scene.add(b)
    boxes.push(b)
})

// Movement State
let moveForward = false
let moveLeft = false
let moveBack = false
let moveRight = false
let moveUp = false
let moveDown = false
let flyMode = false
let currentHeight = 2
const floor = 2
let animFrameId: number | null = null

const updateDimensions = () => {
    if (!containerRef.value || !renderer || !camera) return
    const width = containerRef.value.clientWidth
    const height = Math.min(Math.max(width * 0.5625, 360), 600) // 16:9 ratio capped

    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
}

const loop = () => {
    boxes.forEach(b => {
        b.rotation.y -= 0.015
        b.rotation.x -= 0.015
    })

    spheres.forEach((s, idx) => {
        s.position.y = 2 + Math.sin(Date.now() * 0.002 + idx) * 0.4
    })

    if (myChar) {
        const speed = flyMode ? 0.25 : 0.15
        if (moveForward) myChar.moveForward(speed)
        if (moveBack) myChar.moveForward(-speed)
        if (moveRight) myChar.moveRight(speed)
        if (moveLeft) myChar.moveRight(-speed)

        if (moveUp) {
            currentHeight += speed
        }
        if (moveUp && !flyMode) {
            currentHeight += speed
        } else if (moveDown || !flyMode) {
            currentHeight -= speed
            if (currentHeight < floor) currentHeight = floor
        }

        if (camera) {
            camera.position.y = currentHeight
            camera.updateProjectionMatrix()
        }
    }

    if (renderer && camera) {
        renderer.render(scene, camera)
    }

    animFrameId = requestAnimationFrame(loop)
}

const handleKeyDown = (key: KeyboardEvent) => {
    if (!isLocked.value) return
    if (key.key === "w" || key.key === "W") moveForward = true
    if (key.key === "s" || key.key === "S") moveBack = true
    if (key.key === "d" || key.key === "D") moveRight = true
    if (key.key === "a" || key.key === "A") moveLeft = true
    if (key.key === " ") {
        key.preventDefault()
        moveUp = true
    }
    if (key.keyCode === 16) {
        key.preventDefault()
        moveDown = true
    }
}

let lastSpacePressedTime = 0
const doublePressDelayMS = 400

const handleKeyUp = (key: KeyboardEvent) => {
    if (!isLocked.value) return
    if (key.key === "w" || key.key === "W") moveForward = false
    if (key.key === "s" || key.key === "S") moveBack = false
    if (key.key === "d" || key.key === "D") moveRight = false
    if (key.key === "a" || key.key === "A") moveLeft = false
    if (key.key === " ") {
        key.preventDefault()
        moveUp = false
        const pressedNow = Date.now()
        if (pressedNow - lastSpacePressedTime <= doublePressDelayMS) {
            flyMode = !flyMode
            flyModeActive.value = flyMode
        }
        lastSpacePressedTime = pressedNow
    }
    if (key.keyCode === 16) {
        key.preventDefault()
        moveDown = false
    }
}

const lockPointer = () => {
    if (myChar && !myChar.isLocked) {
        myChar.lock()
    }
}

onMounted(() => {
    if (!myCanvas.value || !containerRef.value) return

    const initialWidth = containerRef.value.clientWidth
    const initialHeight = Math.min(Math.max(initialWidth * 0.5625, 360), 600)

    camera = new PerspectiveCamera(75, initialWidth / initialHeight, 0.1, 1000)
    camera.position.set(0, 2, 0)
    scene.add(camera)

    renderer = new WebGLRenderer({
        canvas: myCanvas.value,
        antialias: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(initialWidth, initialHeight)

    myChar = new PointerLockControls(camera, renderer.domElement)

    myChar.addEventListener("lock", () => {
        isLocked.value = true
    })

    myChar.addEventListener("unlock", () => {
        isLocked.value = false
        moveForward = false
        moveBack = false
        moveLeft = false
        moveRight = false
        moveUp = false
        moveDown = false
    })

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
    window.addEventListener("resize", updateDimensions)

    loop()
})

onBeforeUnmount(() => {
    if (animFrameId) cancelAnimationFrame(animFrameId)
    window.removeEventListener("keydown", handleKeyDown)
    window.removeEventListener("keyup", handleKeyUp)
    window.removeEventListener("resize", updateDimensions)
    if (myChar) myChar.dispose()
    if (renderer) renderer.dispose()
})
</script>

<template>
    <div ref="containerRef" class="relative w-full rounded-lg border border-dark-border bg-dark-base overflow-hidden shadow-2xl">
        <!-- Canvas -->
        <canvas ref="myCanvas" class="w-full block cursor-pointer" @click="lockPointer" />

        <!-- Overlay HUD: When Unlocked -->
        <div
            v-if="!isLocked"
            class="absolute inset-0 bg-dark-base/70 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center transition-all cursor-pointer select-none"
            @click="lockPointer"
        >
            <div class="w-12 h-12 rounded-full border border-accent-teal/60 bg-dark-surface/90 flex items-center justify-center text-accent-teal mb-3 shadow-lg group-hover:scale-105 transition-transform">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
            </div>
            <p class="font-mono text-base font-bold text-slate-100">
                Click Inside to Engage 3D Camera Lock
            </p>
            <p class="font-mono text-xs text-slate-400 mt-1 max-w-md">
                PointerLockControls captures mouse coordinates for full first-person navigation.
            </p>

            <div class="flex flex-wrap justify-center gap-2 mt-4 text-[11px] font-mono text-slate-400">
                <span class="px-2 py-0.5 rounded border border-dark-border bg-dark-elevated">W, A, S, D Movement</span>
                <span class="px-2 py-0.5 rounded border border-dark-border bg-dark-elevated">Double Space for Fly Mode</span>
                <span class="px-2 py-0.5 rounded border border-dark-border bg-dark-elevated">ESC to Release Mouse</span>
            </div>
        </div>

        <!-- In-Game HUD: When Locked -->
        <div
            v-else
            class="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none select-none text-[11px] font-mono"
        >
            <div class="flex items-center gap-2 px-2.5 py-1 rounded bg-dark-base/80 border border-dark-border backdrop-blur text-slate-300">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>SYSTEM ACTIVE</span>
                <span v-if="flyModeActive" class="text-accent-teal font-bold ml-1">[FLY MODE ON]</span>
            </div>

            <div class="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded bg-dark-base/80 border border-dark-border backdrop-blur text-slate-400">
                <span>[W/A/S/D] Move</span>
                <span>&bull;</span>
                <span>[Space/Shift] Elevate</span>
                <span>&bull;</span>
                <span class="text-slate-200">[ESC] Exit</span>
            </div>
        </div>

        <!-- Crosshair HUD -->
        <div
            v-if="isLocked"
            class="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
            <div class="w-2 h-2 rounded-full border border-accent-teal/80 bg-accent-teal/30"></div>
        </div>
    </div>
</template>
