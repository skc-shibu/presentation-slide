const presentationData = {
  id: "clinePresentation",
  title: "CLINE紹介プレゼンテーション",
  slides: [
    {
      id: "slide1",
      type: "title_subtitle",
      title: "皆さんの開発を変えるCLINE",
      subtitle: "AIがあなたのコードパートナーになります"
    },
    {
      id: "slide2",
      type: "explanation_list",
      title: "CLINEって何？",
      items: [
        { title: "AI搭載のVSCode拡張機能", content: "コード生成/修正/プロジェクト構築をAIが支援する開発者向けツール" },
        { title: "オープンソース＆多モデル対応", content: "OpenAI・Anthropic・Google・DeepSeekなど複数AIモデルと連携可能なカスタマイズ自由な環境" },
        { title: "開発ワークフロー統合", content: "コード編集からエラー修正までエディタ内で完結させる「AIペアプログラミング」を実現" }
      ]
    },
    {
      id: "slide3",
      type: "features_grid",
      title: "こんなに便利！主な機能",
      features: [
        { icon: "💻", title: "コードを自動生成", description: "「こんな機能が欲しい」と伝えるだけで" },
        { icon: "🔧", title: "エラーを自動修正", description: "困った時も安心" },
        { icon: "🌐", title: "APIと簡単連携", description: "外部サービスとの接続も楽々" }
      ],
      footer: [
        { icon: "🚀", text: "生産性向上" },
        { icon: "🧠", text: "学習支援" },
        { icon: "⚡", text: "高速開発" }
      ]
    },
    {
      id: "slide4",
      type: "benefits_list",
      title: "CLINEを使うメリット",
      benefits: [
        { icon: "🚀", title: "開発が速くなる", description: "コード生成で作業時間を大幅短縮" },
        { icon: "🧠", title: "集中力が続く", description: "コンテキストスイッチが減ります" },
        { icon: "🎨", title: "カスタマイズ自由", description: "あなたのスタイルに合わせて調整可能" }
      ],
      footer: [
        { icon: "👍", text: "使いやすい" },
        { icon: "🔌", text: "拡張可能" },
        { icon: "🆓", text: "無料プランあり" }
      ]
    },
    {
      id: "slide5",
      type: "steps_list",
      title: "始め方",
      steps: [
        { number: "1", title: "🔍 インストール", content: "1. VSCodeを開く<br>2. 拡張機能アイコンをクリック<br>3. 'Cline'で検索<br>4. インストール" },
        { number: "2", title: "🔑 API設定", content: "1. Anthropic/OpenAIなど好みのモデル選択<br>2. APIキーを入力<br>(設定は一度だけ)" },
        { number: "3", title: "⚠️ 注意点", content: "• API利用には各プロバイダーのクレジットが必要<br>• 無料プランと有料プランの違い<br>• 別途資料作成中 (詳細は私に声をかけてください)" }
      ],
      footer: [
        { icon: "⏱️", text: "所要時間: 5分" },
        { icon: "💡", text: "すぐに使い始められます" }
      ]
    },
    {
      id: "slide6",
      type: "reveal_text",
      title: "実はお伝えしたいこと...",
      revealText: "このプレゼンサイト自体もCLINEで作成しました",
      highlight: "私が指示しただけでコードは全てAIが生成",
      additionalText: "CLINEの実力を体感してください"
    },
    {
      id: "slide7",
      type: "qa_list",
      title: "質問タイム",
      items: [
        { title: "何か質問はありますか？", content: "CLINEについて気になる点や疑問点をお聞かせください" }
      ]
    },
    {
      id: "slide8",
      type: "closing_title",
      title: "一緒に開発の未来を作りましょう",
      thankYouText: "ご清聴ありがとうございました"
    }
  ]
};

let currentSlideIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  const slideDisplayArea = document.getElementById('slide-display-area');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const progressBar = document.querySelector('.progress-bar');

  function renderSlide(slideIndex) {
    if (!presentationData) {
      console.error(`Presentation data not found.`);
      slideDisplayArea.innerHTML = `<div class="slide active error"><p>Error: Presentation data not found.</p></div>`;
      return;
    }

    if (slideIndex < 0 || slideIndex >= presentationData.slides.length) {
      console.error(`Slide index ${slideIndex} is out of bounds.`);
      return;
    }

    currentSlideIndex = slideIndex;
    const slide = presentationData.slides[slideIndex];
    slideDisplayArea.innerHTML = ''; 

    const slideElement = document.createElement('div');
    slideElement.className = 'slide active';
    slideElement.id = slide.id;

    let contentHTML = '';

    switch (slide.type) {
      case 'title_subtitle':
        contentHTML = `
          <h1 class="title">${slide.title}</h1>
          <h2 class="subtitle">${slide.subtitle}</h2>
        `;
        break;
      case 'explanation_list':
      case 'qa_list':
        contentHTML = `<h2>${slide.title}</h2><div class="explanation-container">`;
        slide.items.forEach(item => {
          contentHTML += `<p data-title="${item.title}" data-content="${item.content}"></p>`;
        });
        contentHTML += `</div>`;
        break;
      case 'features_grid':
        contentHTML = `<h2>${slide.title}</h2><div class="features-grid">`;
        slide.features.forEach(feature => {
          contentHTML += `
            <div class="feature">
              <div class="icon">${feature.icon}</div>
              <h3>${feature.title}</h3>
              <p>${feature.description}</p>
            </div>
          `;
        });
        contentHTML += `</div>`;
        if (slide.footer && slide.footer.length > 0) {
          contentHTML += `<div class="slide-footer">`;
          slide.footer.forEach(item => {
            contentHTML += `
              <div class="footer-item">
                <div class="footer-icon">${item.icon}</div>
                <div class="footer-text">${item.text}</div>
              </div>
            `;
          });
          contentHTML += `</div>`;
        }
        break;
      case 'benefits_list':
        contentHTML = `<h2>${slide.title}</h2><div class="benefits">`;
        slide.benefits.forEach(benefit => {
          contentHTML += `
            <div class="benefit">
              <div class="icon">${benefit.icon}</div>
              <h3>${benefit.title}</h3>
              <p>${benefit.description}</p>
            </div>
          `;
        });
        contentHTML += `</div>`;
        if (slide.footer && slide.footer.length > 0) {
          contentHTML += `<div class="slide-footer">`;
          slide.footer.forEach(item => {
            contentHTML += `
              <div class="footer-item">
                <div class="footer-icon">${item.icon}</div>
                <div class="footer-text">${item.text}</div>
              </div>
            `;
          });
          contentHTML += `</div>`;
        }
        break;
      case 'steps_list':
        contentHTML = `<h2>${slide.title}</h2><div class="modern-steps">`;
        slide.steps.forEach(step => {
          contentHTML += `
            <div class="step-card">
              <div class="step-number">${step.number}</div>
              <div class="step-content">
                <h3><span class="icon">${step.title.includes("🔍") ? "🔍" : step.title.includes("🔑") ? "🔑" : "⚠️"}</span> ${step.title.substring(step.title.indexOf(" ") + 1)}</h3>
                <p>${step.content}</p>
              </div>
            </div>
          `;
        });
        contentHTML += `</div>`;
        if (slide.footer && slide.footer.length > 0) {
          contentHTML += `<div class="slide-footer">`;
          slide.footer.forEach(item => {
            contentHTML += `
              <div class="footer-item">
                <div class="footer-icon">${item.icon}</div>
                <div class="footer-text">${item.text}</div>
              </div>
            `;
          });
          contentHTML += `</div>`;
        }
        break;
      case 'reveal_text':
        contentHTML = `<div class="reveal-slide">
          <h2>${slide.title}</h2>
          <p class="reveal-text">${slide.revealText}</p>
          <p class="highlight">${slide.highlight}</p>
          <p>${slide.additionalText}</p>
        </div>`;
        break;
      case 'closing_title':
        contentHTML = `
          <h1 class="closing-title">${slide.title}</h1>
          <p class="thank-you">${slide.thankYouText}</p>
        `;
        break;
      default:
        contentHTML = `
          <h2>${slide.title || 'Untitled Slide'}</h2>
          <p>Type: ${slide.type}</p>
          <p>(Content rendering for this type is not yet fully implemented or type is unknown.)</p>
        `;
        console.warn(`Unknown slide type: ${slide.type}`);
    }
    slideElement.innerHTML = contentHTML;
    slideDisplayArea.appendChild(slideElement);

    updateProgressBar();
    updateNavigationButtons(); 
    playSlideAnimations(); 
  }

  function updateNavigationButtons() {
    if (!presentationData) { 
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      return;
    }
    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex >= presentationData.slides.length - 1;
  }

  nextBtn.addEventListener('click', () => {
    if (presentationData && currentSlideIndex < presentationData.slides.length - 1) {
      renderSlide(currentSlideIndex + 1);
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
      renderSlide(currentSlideIndex - 1);
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      nextBtn.click();
    } else if (e.key === 'ArrowLeft') {
      prevBtn.click();
    }
  });

  if (presentationData && presentationData.slides.length > 0) {
    renderSlide(0);
  } else {
    slideDisplayArea.innerHTML = '<p>No presentation data available.</p>';
    updateNavigationButtons();
  }

  function updateProgressBar() {
    if (!presentationData || presentationData.slides.length === 0) {
        progressBar.style.setProperty('--progress', `0%`);
        return;
    }
    const progress = ((currentSlideIndex + 1) / presentationData.slides.length) * 100;
    progressBar.style.setProperty('--progress', `${progress}%`);
  }

  function playSlideAnimations() {
    if (!presentationData) return;
    
    const currentSlideData = presentationData.slides[currentSlideIndex];
    const currentSlideElement = document.querySelector(`#slide-display-area #${currentSlideData.id}.slide.active`);

    if (!currentSlideElement) {
        console.warn(`playSlideAnimations: Slide element with ID "${currentSlideData.id}" not found in DOM for animation.`);
        return;
    }
    
    anime({
        targets: currentSlideElement,
        opacity: [0, 1],
        duration: 300, 
        easing: 'easeOutExpo',
        complete: () => { 
            const mainTitle = currentSlideElement.querySelector('h2');
            if (mainTitle && currentSlideData.type !== 'title_subtitle' && currentSlideData.type !== 'closing_title') {
                 anime({
                    targets: mainTitle,
                    opacity: [0, 1],
                    translateY: [-20, 0],
                    duration: 800,
                    easing: 'easeOutExpo'
                });
            }

            if (currentSlideData.type === 'title_subtitle') {
              anime({
                targets: `#${currentSlideData.id} .title`,
                opacity: [0, 1],
                translateY: [-30, 0],
                duration: 1000,
                delay: 200, 
                easing: 'easeOutExpo'
              });
              anime({
                targets: `#${currentSlideData.id} .subtitle`,
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 1000,
                delay: 500, 
                easing: 'easeOutExpo'
              });
            }
            else if (currentSlideData.type === 'explanation_list' || currentSlideData.type === 'qa_list') {
              anime({
                targets: `#${currentSlideData.id} .explanation-container p`,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 800,
                delay: anime.stagger(200, {start: 300}), 
                easing: 'easeOutExpo'
              });
            }
            else if (currentSlideData.type === 'features_grid') {
              anime({
                targets: `#${currentSlideData.id} .feature`,
                opacity: [0, 1],
                scale: [0.8, 1],
                duration: 800,
                delay: anime.stagger(150, {start: 300}),
                easing: 'spring(1, 80, 10, 0)'
              });
               const footer = currentSlideElement.querySelector('.slide-footer');
               if (footer) {
                 anime({ targets: footer, opacity: [0,1], translateY: [15,0], duration: 800, delay: 700, easing: 'easeOutExpo'});
               }
            }
            else if (currentSlideData.type === 'benefits_list') {
              anime({
                targets: `#${currentSlideData.id} .benefit`,
                opacity: [0, 1],
                translateX: [-30, 0],
                duration: 700,
                delay: anime.stagger(200, {start: 300}),
                easing: 'easeOutExpo'
              });
              anime({
                targets: `#${currentSlideData.id} .benefit .icon`,
                rotate: ['-180deg', '0deg'],
                scale: [0,1],
                duration: 1000,
                delay: anime.stagger(200, {start: 400}),
                easing: 'spring(1,80,10,0)'
              });
              const footer = currentSlideElement.querySelector('.slide-footer');
              if (footer) {
                anime({ targets: footer, opacity: [0,1], translateY: [15,0], duration: 800, delay: 800, easing: 'easeOutExpo'});
              }
            }
            else if (currentSlideData.type === 'steps_list') {
              anime({
                targets: `#${currentSlideData.id} .step-card`,
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                delay: anime.stagger(250, {start: 300}),
                easing: 'easeOutExpo'
              });
              const footer = currentSlideElement.querySelector('.slide-footer');
              if (footer) {
                anime({ targets: footer, opacity: [0,1], translateY: [15,0], duration: 800, delay: 900, easing: 'easeOutExpo'});
              }
            }
            else if (currentSlideData.type === 'reveal_text') {
                anime({
                    targets: `#${currentSlideData.id} .reveal-text`,
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 1000,
                    delay: 500, 
                    easing: 'easeOutExpo'
                });
                anime({
                    targets: `#${currentSlideData.id} .highlight`,
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    duration: 1200,
                    delay: 1200, 
                    easing: 'spring(1, 80, 10, 0)'
                });
                const additionalP = currentSlideElement.querySelectorAll('p');
                if(additionalP.length > 2) { 
                     anime({
                        targets: additionalP[additionalP.length -1], 
                        opacity: [0,1],
                        translateY: [20,0],
                        duration: 800,
                        delay: 2000,
                        easing: 'easeOutExpo'
                    });
                }
            }
             else if (currentSlideData.type === 'closing_title') {
              anime({
                targets: `#${currentSlideData.id} .closing-title`,
                opacity: [0, 1],
                scale: [0.9, 1],
                duration: 1200,
                delay: 200,
                easing: 'easeOutExpo'
              });
              anime({
                targets: `#${currentSlideData.id} .thank-you`,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 1000,
                delay: 800,
                easing: 'easeOutExpo'
              });
            }
        }
    });
  }
});
