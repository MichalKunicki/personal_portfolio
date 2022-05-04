import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { ArcballControls, Stars, useCursor } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import './index.scss'

function Box(props) {
  const ref = useRef()
  const [clicked, click] = useState(false)
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame(
    (state, delta) =>
      (ref.current.rotation.x = ref.current.rotation.y += delta / 6)
  )
  const colorMap = useLoader(TextureLoader, 'code.jpg')

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00735a" map={colorMap} />
    </mesh>
  )
}

export default function Logo() {
  return (
    <div className="canvas">
      <Canvas>
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <ArcballControls />
        <Stars />
        <ambientLight intesity={0.1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
    </div>
  )
}
