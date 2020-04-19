window.onload = function(){

//Food Front
$('#food-front').prepend('Meal Selector')
$('#food-front').append('HTML, CSS, Javascript')
$('#food-front').append('A simple application that allows user to look up specified meals, which then displays origin, ethnicity, and ingredients for corresponding meal')
$('#food-front').append('JQuery & API')
//Food Back
var videoFood = $('<video controls="controls" preload="none" id="foodMovie" autoplay><source src="video-clips/food.mov" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
$('#food-back').html(videoFood);
$('#foodMovie').on('dblclick', function(){
    window.location = "https://github.com/Adambear1/Meal-Finder.io"
})

//calculator Front
$('#calculator-front').prepend('Meal Selector')
$('#calculator-front').append('HTML, CSS, Javascript')
$('#calculator-front').append('A simple application that allows user to look up specified meals, which then displays origin, ethnicity, and ingredients for corresponding meal')
$('#calculator-front').append('JQuery & API')
//calculator Back
var videocalculator = $('<video controls="controls" preload="none" id="calculatorMovie" autoplay><source src="video-clips/calculator.mp4" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
$('#calculator-back').html(videocalculator);
$('#calculatorMovie').on('dblclick', function(){
    window.location = "https://github.com/Adambear1/Meal-Finder.io"
})

//Scheduler Front
$('#scheduler-front').prepend('Daily Planner')
$('#scheduler-front').append('HTML, CSS, Javascript')
$('#scheduler-front').append('A simple application that allows user to mark down special events throughout the day, as well as to save, and later edit such events. Attached to weather and location API for weather updates and notifications as well')
$('#scheduler-front').append('JQuery & API')
//Scheduler Back
var videoScheduler = $('<video controls="controls" preload="none" id="schedulerMovie" autoplay><source src="video-clips/scheduler.mp4" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
$('scheduler-back').html(videoScheduler)
$('#schedulerMovie').on('dblclick', function(){
    window.location = "https://github.com/Adambear1/Work-Day_scheduler.io"
})

//Typer Front
$('#typer-front').prepend('Speed Typing Game')
$('#typer-front').append('HTML, CSS, Javascript')
$('#typer-front').append('A simple application that allows tests the users typing abilities by pulling random computer-themed words to see how many the user can get correct within a set amount of time')
$('#typer-front').append('JQuery & API')
//Typer Back
var videoTyper = $('<video controls="controls" preload="none" id="typerMovie" autoplay><source src="video-clips/typer.mov" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
$('#typer-back').html(videoTyper);
$('#typerMovie').on('dblclick', function(){
    window.location = "https://github.com/Adambear1/Type-Game.io"
})

//Music Front
$('#music-front').prepend('Music Player Application')
$('#music-front').append('HTML, CSS, Javascript')
$('#music-front').append('A simple application that allows the user to play, listen, and follow along to the lyrics of their favorite music. Simply upload the song of your choice to the application and watch the magic!')
$('#music-front').append('JQuery & API')
//Music Back
var videomusic = $('<video controls="controls" preload="none" id="musicMovie"><source src="video-clips/music.mov" onclick="this.pause ? this.play() : this.pause();" autoplay></video>')
$('#music-back').html(videomusic);
$('#musicMovie').on('dblclick', function(){
    window.location = "https://github.com/Adambear1/Music-Playing-Machine.io"
})

//rps Front
$('#rps-front').prepend('rps Player Application')
$('#rps-front').append('HTML, CSS, Javascript')
$('#rps-front').append('A simple application that allows the user to play, listen, and follow along to the lyrics of their favorite rps. Simply upload the song of your choice to the application and watch the magic!')
$('#rps-front').append('JQuery & API')
//rps Back
var videorps = $('<img controls="controls" preload="none" src="video-clips/rps.png" id="rpsMovie"></img>')
$('#rps-back').html(videorps);
$('#rpsMovie').on('dblclick', function(){
    window.location = "https://github.com/Adambear1/rps-Playing-Machine.io"
})

//Password Front
$('#password-front').prepend('password Player Application')
$('#password-front').append('HTML, CSS, Javascript')
$('#password-front').append('A simple application that allows the user to play, listen, and follow along to the lyrics of their favorite password. Simply upload the song of your choice to the application and watch the magic!')
$('#password-front').append('JQuery & API')
//Password Back
var videopassword =  $('<video controls="controls" preload="none" id="passwordMovie" autoplay><source src="video-clips/password.mov" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
$('#password-back').html(videopassword);
$('#passwordMovie').on('dblclick', function(){
    window.location = "https://github.com/Adambear1/RandomPasswordGenerator2.0.io"
})

//Movie Front
$('#movie-front').prepend('movie Player Application')
$('#movie-front').append('HTML, CSS, Javascript')
$('#movie-front').append('A simple application that allows the user to play, listen, and follow along to the lyrics of their favorite movie. Simply upload the song of your choice to the application and watch the magic!')
$('#movie-front').append('JQuery & API')
//Movie Back
var videomovie =  $('<video controls="controls" preload="none" id="movieMovie" autoplay><source src="video-clips/movie.mov" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
$('#movie-back').html(videomovie);
$('#movieMovie').on('dblclick', function(){
    window.location = "https://github.com/Adambear1/movie-seat-picker.io"
})

//hangman Front
$('#hangman-front').prepend('hangman Player Application')
$('#hangman-front').append('HTML, CSS, Javascript')
$('#hangman-front').append('A simple application that allows the user to play, listen, and follow along to the lyrics of their favorite hangman. Simply upload the song of your choice to the application and watch the magic!')
$('#hangman-front').append('JQuery & API')
//hangman Back
var videohangman =  $('<img controls="controls" preload="none" id="hangmanMovie" src="video-clips/hangman.jpg"></img>')
$('#hangman-back').html(videohangman);
$('#hangmanMovie').on('dblclick', function(){
    window.location = "https://github.com/Adambear1/hangman.io"
})

//quiz Front
$('#quiz-front').prepend('quiz Player Application')
$('#quiz-front').append('HTML, CSS, Javascript')
$('#quiz-front').append('A simple application that allows the user to play, listen, and follow along to the lyrics of their favorite quiz. Simply upload the song of your choice to the application and watch the magic!')
$('#quiz-front').append('JQuery & API')
//quiz Back
var videoQuiz =  $('<video controls="controls" preload="none" id="quizMovie" autoplay><source src="video-clips/quiz.mov" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
$('#quiz-back').html(videoQuiz);
$('#quizMovie').on('dblclick', function(){
    window.location = "https://github.com/Adambear1/Quiz.io"
})

//pong Front
$('#pong-front').prepend('Meal Selector')
$('#pong-front').append('HTML, CSS, Javascript')
$('#pong-front').append('A simple application that allows user to look up specified meals, which then displays origin, ethnicity, and ingredients for corresponding meal')
$('#pong-front').append('JQuery & API')
//pong Back
var videopong = $('<video controls="controls" preload="none" id="pongMovie" autoplay><source src="video-clips/pong.mp4" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
$('#pong-back').html(videopong);
$('#pongMovie').on('dblclick', function(){
    window.location = "https://github.com/Adambear1/Meal-Finder.io"
})

//ips Front
$('#ips-front').prepend('Meal Selector')
$('#ips-front').append('HTML, CSS, Javascript')
$('#ips-front').append('A simple application that allows user to look up specified meals, which then displays origin, ethnicity, and ingredients for corresponding meal')
$('#ips-front').append('JQuery & API')
//ips Back
var videoips = $('<video controls="controls" preload="none" id="ipsMovie" autoplay><source src="video-clips/ips.mp4" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
$('#ips-back').html(videoips);
$('#ipsMovie').on('dblclick', function(){
    window.location = "https://github.com/Adambear1/Meal-Finder.io"
})

//rsa Front
$('#rsa-front').prepend('Meal Selector')
$('#rsa-front').append('HTML, CSS, Javascript')
$('#rsa-front').append('A simple application that allows user to look up specified meals, which then displays origin, ethnicity, and ingredients for corresponding meal')
$('#rsa-front').append('JQuery & API')
//rsa Back
var videorsa = $('<video controls="controls" preload="none" id="rsaMovie" autoplay><source src="video-clips/rsa.mp4" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
$('#rsa-back').html(videorsa);
$('#rsaMovie').on('dblclick', function(){
    window.location = "https://github.com/Adambear1/Meal-Finder.io"
})

}

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  var swiper1 = new Swiper('.swiper1', {
    effect: 'flip',
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination1',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper2 = new Swiper('.swiper2', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

// 


