import React, { useEffect } from "react";
//@ts-ignore
import PlaneScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
const Plane = ({ isRotating, ...props }) => {
  const ref = React.useRef(null);
  const { scene, animations } = useGLTF(PlaneScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
      if (actions['Take 001']) {
          if (isRotating) {
              actions["Take 001"].play();
          } else {
              actions["Take 001"].stop();
          }
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
