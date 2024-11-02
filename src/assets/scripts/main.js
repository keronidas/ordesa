import { Howl } from 'howler';
document.addEventListener("DOMContentLoaded", function () {

  +(function () {
    const university = "UOC";
    console.log(`Hello, ${university}!`);
  })();




  const sound = new Howl({
    src: ['assets/sounds/piano.mp3'],
  });
});
