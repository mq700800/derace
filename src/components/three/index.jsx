import { Environment, OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei';
import { angleToRadians } from '../../utils/angle';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
// import { Car } from './Car';
import { Gari } from './Gari';
import {Road} from './Road';
import { Building } from './Building';
import { RoadZebra } from './RoadZebra';
import { Building2 } from './Building2';
import { SmallBuildings } from './SmallBuildings';

function Three() {
  // if wanted to use texture (map) in three js
  // const [colorMapTexture,dispMapTexture] = useTexture(['kdkkfjkjfkjkfj' , 'jkjfkjfkjfkfjfk']);

  const orbitControlsRef = useRef(null);
  // useFrame((state)=>
  // {
  //   if(!!orbitControlsRef.current)
  //   {
  //   const { x , y } = state.mouse;
  //   orbitControlsRef.current.setAzimuthalAngle(-x , angleToRadians(45));
  //   orbitControlsRef.current.setPolarAngle((y+1) , angleToRadians(90-30));
  //   orbitControlsRef.current.update();
  //   }
  //   // console.log(state.mouse);
  // })

  // Same work like useFrame but in javascript
  // requestAnimationFrame(()=>
  // {

  // })
  const ballRef = useRef(null);
  const carRef = useRef(null);
  useEffect(()=>
  {
    if(!!ballRef.current)
    {
      console.log(ballRef.current);
      // if we want to make both the animations work at the same time we use timeline.

      const timeLine = gsap.timeline({paused:true});
      timeLine.to(ballRef.current.position , {
        x:1,
        duration:3,
        // ease:"Power2.out",
      });  

      timeLine.from(ballRef.current.position , {
        y:2.5,
        duration:3,
        ease:'bounce.out',
      } , "<");


      timeLine.play();



      // gsap.to(ballRef.current.position , {
      //   x:1,
      //   duration:2,
      //   // ease:"Power2.out",
      // });  

      // gsap.from(ballRef.current.position , {
      //   y:2.5,
      //   duration:2,
      //   ease:'bounce',
      // })
    }
        if(!!carRef.current)
    {
      console.log(carRef.current)
      gsap.to(carRef.current.position , {
        x:-4,
        duration:10,
      });  

    }
  } , [carRef.current])
  // useEffect(()=>
  // {
  //   if(!!orbitControlsRef.current)
  //   {
  //     console.log(orbitControlsRef.current)
  //   }
  // } , [orbitControlsRef.current])
  return (
    <>
      <PerspectiveCamera makeDefault position={[4, 20, 10]} />
      <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(70)} minAzimuthAngle={angleToRadians(20)} maxAzimuthAngle={angleToRadians(40)}/>
      {/* <OrbitControls/> */}
      {/* <mesh position={[-2, 0.5, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#fffffff" metalness={0.6} roughness={0.3}/>
      </mesh> */}

      {/* <mesh position={[-1,0,0]} castShadow> */}
      {/* <Car position={[-1,0,0]} scale={0.5} rotation={[0 ,angleToRadians(270) ,0]} castShadow={true}/> */}
      <Gari position={[0,0,0]} scale={0.2} rotation={[0 ,angleToRadians(270) ,0]} castShadow={true} ref={carRef}/>
      {/* </mesh> */}
      <Building position={[15,0,-4]} scale={2.30}/>
      <Building position={[-10.20,0,-26.30]} scale={2.30} rotation={[0,angleToRadians(90) ,0]}/>
      <Building2 position={[-14,0,-24.50]} scale={2.30} rotation={[0,angleToRadians(90) ,0]} />
      <SmallBuildings scale={2.30} position={[10 , 0 , -2]}/>
      <Road scale={0.15} position={[0,0,-0.5]}/>
      <Road scale={0.15} position={[-13.80,0,-14.30]} rotation={[0,angleToRadians(90) ,0]}/>
      <Road scale={0.15} position={[0,0,-28.10]}/>
      <Road scale={0.15} position={[13.80,0,-14.30]} rotation={[0,angleToRadians(90) ,0]}/>
      <RoadZebra position={[-13.80,0,-8]} scale={0.15}/>
      <RoadZebra position={[-13.80,0,-35.60]} scale={0.15}/>
      <RoadZebra position={[13.80,0,-35.60]} scale={0.15}/>
      <RoadZebra position={[13.80,0,-8]} scale={0.15}/>


      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow position={[0,0,-14.50]}>
        <planeGeometry args={[22,22.20 ]} />
        <meshStandardMaterial color="lightgreen"  />
        {/* if we want to use texture then we use map and pass our texture here */}
        {/* <meshStandardMaterial color="#1ea3d8" map={colorMapTexture} /> */}

      </mesh>
      <ambientLight args={['#fffffff', 3]} />
      {/* <directionalLight args={["#ffffff" , 1]} position={[-4,1,0]}/> */}
      {/* <pointLight args={["#ffffff" , 1]} position={[-4,1,0]}/> */}
      {/* <spotLight args={["#ffffff" , 10 , 10 , angleToRadians(75) , 0.4]} position={[-3,1,0]} castShadow/> */}

      <Environment background>
        <mesh>
        <sphereGeometry args={[50 , 100 , 100]}/>
        <meshBasicMaterial color="#2280cc" side={THREE.BackSide} />
        </mesh>
      </Environment>

    </>
  );
}

export default Three;
