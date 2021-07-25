 // youtube iframe 삽입에 대한~ 홈페이지에서 가져온 코드

 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 
 // onYouTube~Ready 이름은 유튜브 라이브러리가 이 함수를 자동적으로 찾게 되어 있기 때문에 수정 엑스
 function onYouTubeIframeAPIReady() {
   // 밑의 player은 html의 <div id="player"></div> #작성 엑스
    new YT.Player('player', {
     videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상
     PlayerVars: {
       autoplay: true, // 자동 재생 유무
       loop: true, // 반복 재생 유무
       playlist: "An6LvWQuj_8" // 반복 재생할 유튜브 영상 ID 목록
      },
      events: {
        onReady: function (event) {
          event.target.mute() // 음소거
        }
      }
     });
 }