const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "Hello, World!,we love programming";
let idx = 1;
let speed = 300 / speedEl.value;

const WriteText = () => {
  textEl.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(WriteText, speed);
};

WriteText();

speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
