import React from "react";
import Particles from "react-tsparticles";

const ParticlesWrapper = () => (
  <Particles
    canvasClassName="comon"
    options={{
      particles: {
        color: "#64ffda",
        number: {
          value: 150,
        },
        size: {
          value: 3.5,
          random: true,
          anim: {
            speed: 4,
            size_min: 0.3,
          },
        },
        line_linked: {
          enable: true,
          width: 0.5,
          color: "#04e0c3",
          distance: 75,
          opacity: 0.5,
        },
        move: {
          enable: true,
          random: true,
          speed: 1,
          out_mode: "out",
          direction: "top",
        },
      },
      fullScreen: false,
    }}
  />
);

export default ParticlesWrapper;
