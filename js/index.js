const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


function car() {
  const carImg = new Image();

}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const img = new Image();
    img.addEventListener('load', () => {
      ctx.drawImage(img, 0, 0);
    })
    img.src = './images/road.png';
    const carImg = new Image();
    carImg.addEventListener('load', () => {
      ctx.drawImage(carImg, 60, 120);
    })
    carImg.src = './images/car.png'
  };
}
