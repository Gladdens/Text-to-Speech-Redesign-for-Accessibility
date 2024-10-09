// *tts = text to speech
// *speak = text to speech function
// *audio = text to speech audio file
// *carousel = stories


// ---------------------- tts function / select sentence for tts to read aloud ----------------------

// Start of code from https://stackoverflow.com/questions/46603956/scroll-text-up-and-hide-it-as-it-gets-read-using-html5-audio
var
  textHighlightOn = true,
  btnToggle = document.getElementById('play'),

  textDiv = document.querySelector('.text-highlight'),
  spns = document.getElementsByClassName('captionE'),
  audi = document.getElementById("adi");

audi.addEventListener("timeupdate", f1);

function f1() {

  // remove all previous actives; Highlighting text while it reads
  [].forEach.call(spns, function(e) {
    e.classList.remove('active');
    e.classList.remove('active-prev');
  });

  var i;
  for (i = 0; i < spns.length; i++) {

    var time = Number(spns[i].id.slice(2));
    if (time < audi.currentTime) {

      if (i > 0) {

        spns[i - 1].classList.remove('active');
        spns[i - 1].classList.add('active-prev');

      }

      spns[i].classList.add('active');

    }

  }
}

// listen for clicks on the span sentences
[].forEach.call(spns, function(spn) {

  spn.addEventListener("click", function() {

    for (var i in spns) {

    }

    var time = Number(this.id.slice(2));
    audi.currentTime = time;

  });

});
//

btnToggle.addEventListener("click", function() {

  if (textHighlightOn) {
    textDiv.classList.add('off');
  } else {
    textDiv.classList.remove('off');
  }

});
// End of code from https://stackoverflow.com/questions/46603956/scroll-text-up-and-hide-it-as-it-gets-read-using-html5-audio



// ---------------------- tts function / control menu ----------------------

// Start of code from https://gist.github.com/vishalkakadiya/8169e79dd38174e224268cd53ffe40da
var
  pause = document.getElementById("pause"),
  play = document.getElementById("play"),
  restart = document.getElementById("restart"),
  audi = document.getElementById("adi");

// ---------------------- Pauses the audio file
pause.onclick = function pause() {
  var player = document.getElementById('adi');
  player.pause();
};
// ---------------------- Plays the audio file
play.onclick = function play() {
  var player = document.getElementById('adi');
  player.play();

};
// ---------------------- Restarts the audio file
restart.onclick = function restart() {
  var player = document.getElementById('adi');
  player.currentTime = 0;
};
// End of code from https://gist.github.com/vishalkakadiya/8169e79dd38174e224268cd53ffe40da



// ---------------------- adds class for highlighting current active button
// Start of code from https://www.fwait.com/how-to-add-active-class-in-javascript/
let buttons = document.querySelectorAll('.iconActives');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(btn => btn.classList.remove('activeBtn'));
    this.classList.add('activeBtn');
  });
});
// End of code from https://www.fwait.com/how-to-add-active-class-in-javascript/



// ---------------------- preserve scroll position ----------------------

// Start of code from OpenAI ChatGPT Version 3.5
var scrollPosition = 0;

// finds window.scrollY
window.addEventListener('scroll', function() {
  scrollPosition = window.scrollY || window.pageYOffset;
});

// Save scroll position to local storage
function saveScrollPosition() {
  localStorage.setItem('scrollPosition', scrollPosition);
}

// Restores scroll position from local storage. Printed out onload of each Body in HTML page
function restoreScrollPosition() {
  var savedScrollPosition = localStorage.getItem('scrollPosition');
  if (savedScrollPosition !== null) {
    window.scrollTo(0, savedScrollPosition);
  }
}

// EventListener OnClick buttons that will store scroll position
document.getElementById('captionContainer').addEventListener('click', saveScrollPosition);
document.getElementById('speak').addEventListener('click', saveScrollPosition);
document.getElementById('lang').addEventListener('click', saveScrollPosition);
document.getElementById('x').addEventListener('click', saveScrollPosition);
// End of code from OpenAI ChatGPT Version 3.5








// ---------------------- EXTRA ----------------------

// ---------------------- Preserve scroll position
// https://css-tricks.com/memorize-scroll-position-across-page-loads/
// https://gist.github.com/evdokimovm/3fe5a8fc4d086ea8e28f


// ---------------------- Gestures
    // gesture codes swipe
    // https://hammerjs.github.io/


// ---------------------- SpeechRecognition
// onclick (language) speak plays to specific language audio file
// SpeechRecognition.start() (Ready to receive a command)

// SpeechRecognition to control audio menu
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API


// ---------------------- Reverse
    // onclick reverseBtn reverse speak by 5 seconds

// ---------------------- Forward ()
    // onclick forwardBtn forward speak by 5 seconds
    // 
