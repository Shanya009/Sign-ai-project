// ---------- 1. Grab elements ----------
const fileInput = document.getElementById("fileInput");
const dropzone = document.getElementById("dropzone");
const dropzoneHint = document.getElementById("dropzoneHint");
const preview = document.getElementById("preview");
const fileName = document.getElementById("fileName");
const translateBtn = document.getElementById("translateBtn");
const translateText = translateBtn.querySelector(".btn__text");
const clearBtn = document.getElementById("clearBtn");

const result = document.getElementById("result");
const resultLetter = document.getElementById("resultLetter");
const confValue = document.getElementById("confValue");
const ringFg = document.getElementById("ringFg");
const scanText = document.getElementById("scanText");
const errorText = document.getElementById("errorText");

const historyList = document.getElementById("history");
const signsGrid = document.getElementById("signsGrid");
const toast = document.getElementById("toast");

// ---------- 2. Settings ----------
const MAX_SIZE_MB = 5;
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp"];
const SIGNS = "ABCDEFGHIKLMNOPQRSTUVWXYZ0123456789".split(""); // J remains motion-based; Z and digits are included for demo coverage
const RING_LENGTH = 326.7; // 2 * PI * r (r = 52)

let selectedFile = null;
let busy = false;
let toastTimer = null;

// ---------- 3. Helpers ----------
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function setState(state) {
  result.dataset.state = state;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-show"), 2600);
}

function showError(message) {
  errorText.textContent = message;
  setState("error");
}

function buildSignsGrid() {
  signsGrid.innerHTML = SIGNS.map(
    (s) => `<div class="sign" data-sign="${s}">${s}</div>`
  ).join("");
}

function highlightSign(letter) {
  signsGrid.querySelectorAll(".sign").forEach((el) => {
    el.classList.toggle("is-hit", el.dataset.sign === letter);
  });
}

function addToHistory(letter, confidence) {
  const empty = historyList.querySelector(".history__empty");
  if (empty) empty.remove();

  const chip = document.createElement("li");
  chip.className = "chip";
  chip.innerHTML = `<b>${letter}</b><span>${confidence}%</span>`;
  historyList.prepend(chip);

  // Keep only the last 6
  while (historyList.children.length > 6) {
    historyList.lastElementChild.remove();
  }
}

function animateNumber(el, to, duration = 1100) {
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(to * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function showResult(letter, confidence) {
  resultLetter.textContent = letter;
  confValue.textContent = "0";

  // Reset ring without animation, then animate to the new value
  ringFg.style.transition = "none";
  ringFg.style.strokeDashoffset = RING_LENGTH;
  void ringFg.getBoundingClientRect(); // force reflow
  ringFg.style.transition = "";

  setState("done");

  requestAnimationFrame(() => {
    ringFg.style.strokeDashoffset = RING_LENGTH * (1 - confidence / 100);
    animateNumber(confValue, confidence);
  });

  addToHistory(letter, confidence);
  highlightSign(letter);
}

function handleFile(file) {
  if (!file) return;

  if (!ALLOWED_TYPES.includes(file.type)) {
    showError("Unsupported file type. Please upload a PNG, JPG or WEBP image.");
    return;
  }

  if (file.size > MAX_SIZE_MB * 1024 * 1024) {
    showError(`Image is too large. Maximum size is ${MAX_SIZE_MB} MB.`);
    return;
  }

  selectedFile = file;
  setState("idle");
  highlightSign(null);

  if (preview.src) URL.revokeObjectURL(preview.src);
  preview.src = URL.createObjectURL(file);
  preview.hidden = false;
  dropzoneHint.hidden = true;

  fileName.textContent = file.name;
  translateBtn.disabled = false;
}

function clearAll() {
  if (busy) return;

  selectedFile = null;
  fileInput.value = "";

  if (preview.src) URL.revokeObjectURL(preview.src);
  preview.removeAttribute("src");
  preview.hidden = true;
  dropzoneHint.hidden = false;

  fileName.textContent = "";
  translateBtn.disabled = true;
  setState("idle");
  highlightSign(null);
}

// ---------- 4. Translate (demo for now) ----------
async function translate() {
  if (!selectedFile || busy) return;

  busy = true;
  translateBtn.disabled = true;
  translateText.textContent = "Analyzing…";
  dropzone.classList.add("is-scanning");
  setState("scanning");

  // Cycle through status messages while "analyzing"
  const messages = ["Detecting hand…", "Reading hand shape…", "Matching sign…"];
  let i = 0;
  scanText.textContent = messages[0];
  const msgTimer = setInterval(() => {
    i = (i + 1) % messages.length;
    scanText.textContent = messages[i];
  }, 650);

  await wait(1900);

  clearInterval(msgTimer);
  dropzone.classList.remove("is-scanning");

  // DEMO ONLY: a random letter. In Week 4 this becomes a real fetch() to Flask.
  const letter = SIGNS[Math.floor(Math.random() * SIGNS.length)];
  const confidence = 86 + Math.floor(Math.random() * 13);
  showResult(letter, confidence);
  showToast("Demo prediction. The model isn't connected yet.");

  translateText.textContent = "Translate";
  translateBtn.disabled = false;
  busy = false;

  // Real version (later):
  // const formData = new FormData();
  // formData.append("image", selectedFile);
  // const res = await fetch("http://localhost:5000/predict", { method: "POST", body: formData });
  // const data = await res.json();
  // showResult(data.prediction, Math.round(data.confidence * 100));
}

// ---------- 5. Events ----------
fileInput.addEventListener("change", (e) => handleFile(e.target.files[0]));

["dragenter", "dragover"].forEach((evt) =>
  dropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    dropzone.classList.add("is-dragover");
  })
);

["dragleave", "drop"].forEach((evt) =>
  dropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    dropzone.classList.remove("is-dragover");
  })
);

dropzone.addEventListener("drop", (e) => handleFile(e.dataTransfer.files[0]));

// Paste an image from the clipboard
document.addEventListener("paste", (e) => {
  const file = e.clipboardData && e.clipboardData.files[0];
  if (file) {
    handleFile(file);
    showToast("Image pasted");
  }
});

translateBtn.addEventListener("click", translate);
clearBtn.addEventListener("click", clearAll);

// ---------- 6. Visual polish ----------

// Cursor spotlight
document.addEventListener("pointermove", (e) => {
  document.documentElement.style.setProperty("--mx", e.clientX + "px");
  document.documentElement.style.setProperty("--my", e.clientY + "px");
});

// Reveal sections on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ---------- 7. Init ----------
buildSignsGrid();