document.addEventListener('DOMContentLoaded', () => {
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const progressBar = document.querySelector('.progress-bar');
const totalSlides = slides.length;
let currentSlide = 0;

  // 初期化
  initSlides();
  updateProgressBar();

  // スライドナビゲーション
  nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  });

  // キーボードナビゲーション
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      nextBtn.click();
    } else if (e.key === 'ArrowLeft') {
      prevBtn.click();
    }
  });

  // スライド切り替え関数
  function goToSlide(index) {
    // ボタンを無効化
    prevBtn.disabled = true;
    nextBtn.disabled = true;

    // 現在のスライドを非表示
    slides[currentSlide].style.opacity = 0;
    
    setTimeout(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = index;
      slides[currentSlide].classList.add('active');
      slides[currentSlide].style.opacity = 1;
      updateProgressBar();
      playSlideAnimations();
      
      // アニメーション後にボタンを再有効化
      setTimeout(() => {
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
      }, 1000);
    }, 500);
  }

  // スライド初期化
  function initSlides() {
    slides.forEach((slide, index) => {
      if (index === 0) {
        slide.classList.add('active');
        slide.style.opacity = 1;
      } else {
        slide.classList.remove('active');
        slide.style.opacity = 0;
      }
    });
    playSlideAnimations();
    
    // 初期ボタン状態
    prevBtn.disabled = true;
    nextBtn.disabled = totalSlides <= 1;
  }

  // プログレスバー更新
  function updateProgressBar() {
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.setProperty('--progress', `${progress}%`);
  }

  // スライドごとのアニメーション
  function playSlideAnimations() {
    const currentSlideElement = slides[currentSlide];
    
    // スライド6（実は...スライド）の特別なアニメーション
    if (currentSlideElement.id === 'slide6') {
      anime({
        targets: '.reveal-text',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        delay: 500,
        easing: 'easeOutExpo'
      });

      anime({
        targets: '.highlight',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 1500,
        delay: 1500,
        easing: 'spring(1, 80, 10, 0)'
      });

      // 背景のコードアニメーション
      const codeLines = [
        "function createPresentation() {",
        "  const slides = [];",
        "  slides.push(new Slide('CLINE紹介'));",
        "  slides.push(new Slide('主要機能'));",
        "  slides.push(new Slide('実は...'));",
        "  return slides;",
        "}"
      ];

      const codeElement = document.createElement('div');
      codeElement.className = 'code-background';
      codeElement.style.position = 'absolute';
      codeElement.style.top = '0';
      codeElement.style.left = '0';
      codeElement.style.width = '100%';
      codeElement.style.height = '100%';
      codeElement.style.opacity = '0.1';
      codeElement.style.fontFamily = "'Fira Code', monospace";
      codeElement.style.whiteSpace = 'pre';
      codeElement.style.overflow = 'hidden';
      codeElement.style.zIndex = '-1';
      codeElement.style.padding = '2rem';
      codeElement.style.fontSize = '1.2rem';
      codeElement.style.color = '#4299E1';

      currentSlideElement.appendChild(codeElement);

      anime({
        targets: codeElement,
        innerHTML: [codeLines[0], codeLines.join('\n')],
        duration: 3000,
        easing: 'linear',
        update: function(anim) {
          codeElement.innerHTML = anim.animatables[0].target.innerHTML.replace(/\n/g, '<br>');
        }
      });

    // スライド7（質問タイム）の特別なアニメーション
    } else if (currentSlideElement.id === 'slide7') {
      anime({
        targets: '.explanation-container p',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        delay: anime.stagger(300),
        easing: 'easeOutExpo'
      });
    }

    // スライド1のタイトルアニメーション
    if (currentSlideElement.id === 'slide1') {
      anime({
        targets: '.title',
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 1500,
        easing: 'easeOutExpo'
      });

      anime({
        targets: '.subtitle',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1500,
        delay: 1000,
        easing: 'easeOutExpo'
      });
    }

    // スライド2のリストアニメーション
    if (currentSlideElement.id === 'slide2') {
      anime({
        targets: '.features li',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        delay: anime.stagger(300),
        easing: 'easeOutExpo'
      });
    }

    // スライド3のグリッドアニメーション
    if (currentSlideElement.id === 'slide3') {
      anime({
        targets: '.feature',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 1000,
        delay: anime.stagger(200),
        easing: 'spring(1, 80, 10, 0)'
      });
    }

    // スライド4のメリットアニメーション
    if (currentSlideElement.id === 'slide4') {
      anime({
        targets: '.benefit',
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 800,
        delay: anime.stagger(300),
        easing: 'easeOutExpo'
      });

      anime({
        targets: '.benefit .icon',
        rotate: ['-180deg', '0deg'],
        scale: [0, 1],
        duration: 1200,
        delay: anime.stagger(300),
        easing: 'spring(1, 80, 10, 0)'
      });

      // スライド4のフッターアニメーション
      anime({
        targets: '.slide-footer',
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 1000,
        delay: 1200,
        easing: 'easeOutExpo'
      });
    }

    // スライド3のフッターアニメーション
    if (currentSlideElement.id === 'slide3') {
      anime({
        targets: '.slide-footer',
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 1000,
        delay: 1200,
        easing: 'easeOutExpo'
      });
    }
  }
});
