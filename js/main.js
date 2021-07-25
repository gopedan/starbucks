const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    // 배지숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl,.2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl,.2, {
      x: 100
    });
  }
  }, 300));
// _.throttle(함수, 시간)
// 300 = 0.3초를 의미함 >> 0.3초 단위로 부하를 줘서 함수가 우르르 실행되는 것을 방지


toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

// new Swiper (선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction:'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' >> 기본 값
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal' 기본값
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



const promotionEl = document.querySelector('.promotion'); 
// promotion이라는 클래스를 찾아 promotionEl에 할당
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// toggle-promotion이라는 클래스를 찾아 promotionToggleBtn이라는 변수에 할당

let isHidePromotion = false;
 // 처음에는 promotion의 값이 보여지고 있으므로 flase(이름이 isHidePromotion >> promotion이 숨겨짐? false)
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // 느낌표 뒤에있는 값을 반대로 만들어달라
  if (isHidePromotion) {
    // 숨김처리!
    // promotionEl에 hide라는 클래스가 추가가 된다 >> css 스타일로 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임처리!
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  // 선택자를 요소로 넣으면 알아서 찾아줌
  // random이 반환된 값이 지속시간으로 사용됨
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
  });
}
// (selector, delay, size)
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  // Scene >> 특정한 요소를 감시하는 옵션을 지정해 줌.
  // setClassToggle >> 클래스 속성을 넣었다 뺐다 지정
  new ScrollMagic
    .Scene({
      // section부분에 scroll-spy있는 요소들 중에 하나를 할당 >> 보여짐 여부를 감시할 요소를 지정
      triggerElement: spyEl,
      // 뷰포트 윗부분이 0 아랫부분이 1 >> 뷰포트 0.8부분에 감시되는 걸 판단
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
