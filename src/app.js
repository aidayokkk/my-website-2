import mixitup from 'mixitup';


const containerEl = document.querySelector('.mix-container');


const mixer = mixitup(containerEl, {
  selectors: {
    target: '.mix'
  },
  load: {
    filter: '.food'
  },
  animation: {
    duration: 350,
    effects: 'fade translateY(8px)',
    easing: 'ease-in-out'
  }
});