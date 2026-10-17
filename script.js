const messages = [
  "hello",
  "hey",
  "hi",
  "sup",
  "yo",
  "wyd?",
  "you there?",
  "got a sec?",
  "quick question",
  "u busy?",
  "morning",
  "ping",
];

const typedEl = document.querySelector("#typed");

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (reduceMotion) {
  typedEl.textContent = "hello";
} else if (window.Typed) {
  typedEl.textContent = "";

  new Typed("#typed", {
    strings: messages,
    typeSpeed: 85,
    backSpeed: 50,
    backDelay: 2300,
    startDelay: 400,
    smartBackspace: false,
    loop: true,
    cursorChar: "|",
    showCursor: true,
  });
}
