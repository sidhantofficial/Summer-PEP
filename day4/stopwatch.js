let timer;
let startTime;
let elapsedTime = 0;
let running = false;

function updateDisplay() {
  const time = Date.now() - startTime + elapsedTime;
  const totalSeconds = Math.floor(time / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}`;
}

function start() {
  if (!running) {
    running = true;
    startTime = Date.now();
    timer = setInterval(updateDisplay, 1000);
  }
}

function stop() {
  if (running) {
    running = false;
    clearInterval(timer);
    elapsedTime += Date.now() - startTime;
  }
}

function reset() {
  clearInterval(timer);
  running = false;
  elapsedTime = 0;
  document.getElementById('display').textContent = "00:00:00";
}
