window.addEventListener("load", function () {
  // select img and div

  let div = document.querySelector(".bird");
  let bird = document.images[0];

  let birdTop = 0;
  let birdLeft = 0;
  let speed = 15;
  let maxClk = 10;
  let birdFired = false;

  //move bird inside box
  const move = function () {
    if (!birdFired) {
      birdLeft += speed;

      if (birdLeft + bird.clientWidth >= div.offsetWidth) {
        bird.style.display = "none";
        setTimeout(() => {
          birdLeft = -bird.clientWidth;
          birdTop = Math.random() * (div.clientHeight - bird.clientHeight);
          bird.style.top = `${birdTop}px`;
          bird.style.left = `${birdLeft}px`;
          bird.style.display = "block";
        }, 500);
      } else {
        bird.style.left = `${birdLeft}px`;
      }
    }
  };

  // click bird and count the times clicked
  let count = 0;

  bird.addEventListener("click", function (e) {
    let score = document.querySelector(".score");
    count++;

    score.innerHTML = `your score is : ${count} `;
    bird.src = "./assets/images/fireBird.gif";

    // make sound when hot bird 

    let sound = document.createElement("audio");
    sound.src = "./assets/sounds/sounds_blackShot.mp3";
    sound.play();

    if (maxClk < count) {
      alert("you won the game");
      clearInterval(birdInterval);
      return;
    }

    // if bird fired, it's fall down and disappear
    const fallInterval = function () {
      birdTop += 20;
      bird.style.top = `${birdTop}px`;
      if (birdTop >= div.clientHeight) {
        clearInterval(birdFallInterval);
        bird.style.display = "none";
        birdFired = false;
        bird.src = "./assets/images/normalBird.gif";
        birdLeft = -bird.clientWidth;
        birdTop = Math.random() * (div.clientHeight - bird.clientHeight);
        bird.style.top = `${birdTop}px`;
        bird.style.left = `${birdLeft}px`;
        bird.style.display = "block";
      }
    };



    const birdFallInterval = setInterval(fallInterval, 100);

    setTimeout(() => {
      //    randomDirection();
      bird.src = "./assets/images/normalBird.gif";
      bird.style.display = "block";
    }, 1000);
  }); // end of click event

  const birdInterval = setInterval(move, 100);
});
