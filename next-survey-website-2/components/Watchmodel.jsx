import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import { useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';

function Watchmodel()
{
    const gltf = useLoader(GLTFLoader, '/3dModel/scene.gltf');
    const texture=useLoader(TextureLoader,'/3dModel/textures/texture.png');
    return (
    <group>
      <mesh
        receiveShadow
        castShadow
        position={[0,0,0]}
      >
        <primitive object={gltf.scene}
        scale={[35,35,35]}
        rotation={[0,0,0]}
        />
        <meshStandardMaterial map={texture}
        />


        
        
      </mesh>
    </group>
  );
}

export default Watchmodel