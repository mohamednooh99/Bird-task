window.addEventListener("load", function () {
  const container = document.querySelector(".container");
  const eggImg = document.querySelector(".egg-img");
  const basketImg = document.querySelector(".basket-img");
  const scoreDisplay = document.querySelector(".score"); 
  // const missCountDisplay = document.querySelector(".miss-count");


  let eggTop = 0;
  let score = 0;
  let missCount = 0;
  const eggSpeed = 5;
  let eggInterval;

  const dropEgg = () => {
    eggTop += eggSpeed;
    eggImg.style.top = `${eggTop}px`;

    if (eggTop + eggImg.height >= container.clientHeight) {
      const eggRect = eggImg.getBoundingClientRect();
      const basketRect = basketImg.getBoundingClientRect();

      if (
        eggRect.bottom <= basketRect.bottom &&
        eggRect.right >= basketRect.left &&
        eggRect.left <= basketRect.right
      ) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        if (score > 10) {
          clearInterval(eggInterval);
          alert("Congratulations! You won the game!");
          return;
        }
      } else {
        eggImg.src = "./assets/images/Uovo_sorridente.png";
        missCount++;
        if (missCount >= 3) { 
          clearInterval(eggInterval);
          this.alert("Game Over! You missed too many eggs."); 
          return;
        }
      }

      clearInterval(eggInterval);

      setTimeout(() => {
        eggImg.src = "./assets/images/egg3.png";
        eggTop = 0;
        eggImg.style.top = `${eggTop}px`;
        eggInterval = setInterval(dropEgg, 100);
      }, 500);
    }
  };

  container.addEventListener("mousemove", function (e) {
    const containerRect = container.getBoundingClientRect();
    let mouseX = e.clientX - containerRect.left;
    let newLeft = mouseX - basketImg.width / 2;
    if (newLeft < 0) newLeft = 0;
    else if (newLeft + basketImg.width > container.clientWidth)
      newLeft = container.clientWidth - basketImg.width;
    basketImg.style.left = `${newLeft}px`;
  });

  eggInterval = setInterval(dropEgg, 100);
});
