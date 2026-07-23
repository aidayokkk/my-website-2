import './styles.css'; 
import mixitup from 'mixitup';

const containerEl = document.querySelector('.mix-container');

const mixer = mixitup(containerEl, {
  selectors: {
    target: '.mix'
  },
  animation: {
    duration: 300,
    effects: 'fade translateY(10px)'
  }
});