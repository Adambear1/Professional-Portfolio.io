window.onload = function () {

  //Food Front
  $('#food-front').prepend('Meal Selector')
  //Food Back
  var videoFood = $('<video loop preload="auto" id="foodMovie" autoplay><source src="video-clips/food.mov" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
  $('#food-back').html(videoFood);
  $('#foodMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/Meal-Finder.io"
  })


  //Scheduler Front
  $('#scheduler-front').prepend('Daily Planner')
  //Scheduler Back
  var videoScheduler = $('<video loop preload="auto" id="schedulerMovie" autoplay><source src="video-clips/scheduler.mp4" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
  $('scheduler-back').html(videoScheduler)
  $('#schedulerMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/Work-Day_scheduler.io"
  })

  //Typer Front
  $('#typer-front').prepend('Speed Typing Game')
  //Typer Back
  var videoTyper = $('<video loop preload="auto" id="typerMovie" autoplay><source src="video-clips/typer.mov" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
  $('#typer-back').html(videoTyper);
  $('#typerMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/Type-Game.io"
  })

  //Music Front
  $('#music-front').prepend('Music Player Application')
  //Music Back
  var videomusic = $('<video loop muted preload="auto" id="musicMovie" autoplay><source src="video-clips/music.mov" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
  $('#music-back').html(videomusic);
  $('#musicMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/Music-Playing-Machine.io"
  })

  //lyricSearch Front
  $('#lyricSearch-front').prepend('LyricSearch')
  //lyricSearch Back
  var videolyricSearch = $('<video loop preload="auto" id="lyricSearchMovie" autoplay><source src="video-clips/lyricSearch.mov" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
  $('#lyricSearch-back').html(videolyricSearch);
  $('#lyricSearchMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/RandomlyricSearchGenerator2.0.io"
  })

  //memoryCard Front
  $('#memoryCard-front').prepend('Memory Card')
  //memoryCard Back
  var videomemoryCard = $('<video loop preload="auto" id="memoryCardMovie" autoplay><source src="video-clips/memoryCard.mov" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
  $('#memoryCard-back').html(videomemoryCard);
  $('#memoryCardMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/RandommemoryCardGenerator2.0.io"
  })

  //meditation Front
  $('#meditation-front').prepend('Meditation')
  //meditation Back
  var videomeditation = $('<video loop preload="auto" id="meditationMovie" autoplay><source src="video-clips/meditation.mov" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
  $('#meditation-back').html(videomeditation);
  $('#meditationMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/RandommeditationGenerator2.0.io"
  })

  //Password Front
  $('#password-front').prepend('Random Password Generator')
  //Password Back
  var videopassword = $('<video loop preload="auto" id="passwordMovie" autoplay><source src="video-clips/password.mov" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
  $('#password-back').html(videopassword);
  $('#passwordMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/RandomPasswordGenerator2.0.io"
  })

  //Movie Front
  $('#movie-front').prepend('Movie Seat Picker')
  //Movie Back
  var videomovie = $('<video loop preload="auto" id="movieMovie" autoplay><source src="video-clips/movie.mov" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
  $('#movie-back').html(videomovie);
  $('#movieMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/movie-seat-picker.io"
  })

  //hangman Front
  $('#hangman-front').prepend('Hangman')
  //hangman Back
  var videohangman = $('<img loop preload="auto" id="hangmanMovie" src="video-clips/hangman.jpg"></img>')
  $('#hangman-back').html(videohangman);
  $('#hangmanMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/hangman.io"
  })

  //quiz Front
  $('#quiz-front').prepend('JavaScript Quiz')
  //quiz Back
  var videoQuiz = $('<video loop preload="auto" id="quizMovie" autoplay><source src="video-clips/quiz.mov" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
  $('#quiz-back').html(videoQuiz);
  $('#quizMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/Quiz.io"
  })

  //rps Front
  $('#rps-front').prepend('Rock Paper Siccors')
  //rps Back
  var videorps = $('<img loop preload="auto" src="video-clips/rps.png" id="rpsMovie"></img>')
  $('#rps-back').html(videorps);
  $('#rpsMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/rps-Playing-Machine.io"
  })

  //calculator Front
  $('#calculator-front').prepend('Calculator')
  //calculator Back
  var videocalculator = $('<video loop preload="auto" id="calculatorMovie" autoplay><source src="video-clips/calculator.mp4" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
  $('#calculator-back').html(videocalculator);
  $('#calculatorMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/Meal-Finder.io"
  })

  //pong Front
  $('#pong-front').prepend('Pong')
  //pong Back
  var videopong = $('<video loop preload="auto" id="pongMovie" autoplay><source src="video-clips/pong.mp4" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
  $('#pong-back').html(videopong);
  $('#pongMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/Meal-Finder.io"
  })

  //ips Front
  $('#ips-front').prepend('Initial Procurement Sheet')
  //ips Back
  var videoips = $('<video loop preload="auto" id="ipsMovie" autoplay><source src="video-clips/ips.mp4" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
  $('#ips-back').html(videoips);
  $('#ipsMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/Meal-Finder.io"
  })

  //rsa Front
  $('#rsa-front').prepend('Resale Application Sheet')
  //rsa Back
  var videorsa = $('<video loop preload="auto" id="rsaMovie" autoplay><source src="video-clips/rsa.mp4" onclick="this.play ? this.pause() : this.play();" autoplay></video>')
  $('#rsa-back').html(videorsa);
  $('#rsaMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/Meal-Finder.io"
  })

  //Mongochat Front
  $('#mongochat-front').prepend('MongoChat')
  //mongochat Back
  var videomongochat = $('<img loop preload="auto" src="video-clips/mongochat.jpg" id="mongochatMovie"></img>')
  $('#mongochat-back').html(videomongochat);
  $('#mongochatMovie').on('dblclick', function () {
    window.location = "https://github.com/Adambear1/Meal-Finder.io"
  })

}

//Contact information popup
$('#popUp').on('click', () => {
  $('.bg-modal').removeClass('invisible')
  $('.div-1, .div-2, .div-3, .div-4, .heading-bar').css('filter', 'blur(3px)')
})

$('.bg-modal').on('click', (e) => {
  $('.bg-modal').addClass('invisible')
  $('.div-1, .div-2, .div-3, .div-4, .heading-bar').css('filter', 'blur(0px)')
}
)




$('#resumeBtn').on('click', () => {
  $('#portfolioBtn').toggle('invisible');
  $('#testimonialBtn').toggle('invisible');
  $('#resumeBtn').toggleClass('btnWidth');
  $('#collapseExample1 .card-body').toggleClass('card-resume');

})


$('#portfolioBtn').on('click', () => {
  $('#resumeBtn').toggle('invisible');
  $('#testimonialBtn').toggle('invisible');
  $('#portfolioBtn').toggleClass('btnWidth');
  $('#collapseExample2 .card-body').toggleClass('card-portfolio');
})

$('#testimonialBtn').on('click', () => {
  $('#resumeBtn').toggle('invisible');
  $('#portfolioBtn').toggle('invisible');
  $('#testimonialBtn').toggleClass('btnWidth');
  $('#collapseExample3 .card-body').toggleClass('card-portfolio');
})


















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
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});







