
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: { enable: true, value_area: 800 }
    },
    color: {
      value: ["#7c3aed", "#d4af37"]
    },
    shape: {
      type: "edge"
    },
    opacity: {
      value: 0.6,
      random: true
    },
    size: {
      value: 2.5,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#d4af37",
      opacity: 0.5,
      width: 1.5
    },
    move: {
      enable: true,
      speed: 3.2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      repulse: {
        distance: 130,
        duration: 0.4
      },
      push: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
