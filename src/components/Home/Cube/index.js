import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars, useCursor } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import './cube.scss'

function Cube(props) {
  const ref = useRef()
  const [clicked, click] = useState(false)
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame(
    (state, delta) =>
      (ref.current.rotation.x = ref.current.rotation.y += delta / 10)
  )
  const colorMap = useLoader(TextureLoader, 'code.jpg')

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1.7, 1.7, 1.7]} />
      <meshBasicMaterial color="#009c0d" map={colorMap} />
    </mesh>
  )
}

export default function Logo() {
  return (
    <div className="canvas">
      <Canvas>
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} /> */}
        <OrbitControls />
        <Stars
          radius={100}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
          speed={2}
        />
        <ambientLight intesity={0.5} />
        <Suspense fallback={null}>
          <Cube />
        </Suspense>
      </Canvas>
    </div>
  )
}
