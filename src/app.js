import mixitup from 'mixitup';

// HTML内のメニューコンテナを取得
const containerEl = document.querySelector('.mix-container');

// MixItUpを初期化（初期状態で .food だけを表示するように設定）
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