particlesJS(
  "galaxy", {
    "particles": {
      "number": {
        "value": 8,
        "density": {
          "enable": true,
          "value_area": 90
        }
      },
      "color": {
        "value": ["#de0061", "#00a2a5", "#a8c94d"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 4,
          "color": "rgba(119, 197, 187, 0.38)"
        },
      },
      "opacity": {
      "value": 0.8,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 10,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "push": {
        "particles_nb": 10
      }
    }
  },    
  "push": {
    "particles_nb": 2
  },
  "retina_detect": true
});