import mixitup from 'mixitup';


const containerEl = document.querySelector('.menu-container');

const mixer = mixitup(containerEl, {
  selectors: {
    target: '.mix'
  },
  animation: {
    duration: 300,
    effects: 'fade translateY(10px)'
  }
});