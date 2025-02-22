export function startTextAnimation() {
  const textDisplay = document.getElementById("text");
  let currentPhrase = [];
  let i = 0, j = 0;
  let isDeleting = false, isEnd = false;

  const phrases = [
    "Hi, this is Jim’s portfolio",
    "こんにちはこれはジムのポートフォリオです",
    "Thanks for visiting！",
    "よろしくお願いします！",
  ];

  function loop() {
    isEnd = false;
    textDisplay.innerHTML = phrases[0];

    if (i < phrases.length) {
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
        textDisplay.innerHTML = currentPhrase.join("");
      }

      if (isDeleting && j <= phrases[i].length) {
        currentPhrase.pop();
        j--;
        textDisplay.innerHTML = currentPhrase.join("");
      }

      if (j == phrases[i].length) {
        isEnd = true;
        isDeleting = true;
      }

      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i === phrases.length) {
          i = 0;
        }
      }
    }

    const spedUp = Math.random() * 100;
    const normalSpeed = Math.random() * 300;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
  }

  loop();
}
