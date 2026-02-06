const colors = [
  { title: "Красный", hex: "#E32636" },
  { title: "Желтый", hex: "#FDE910" },
  { title: "Зеленый", hex: "#138808" },
  { title: "Синий", hex: "#1560BD" }
];

const stage = document.getElementById("stage");
const warning = document.getElementById("warning");

const btnCircle = document.getElementById("btnCircle");
const btnSquare = document.getElementById("btnSquare");
const btnClear = document.getElementById("btnClear");

const colorsPanel = document.getElementById("colorsPanel");

let currentShape = null;

function showWarning() {
  warning.style.display = "block";
}
function hideWarning() {
  warning.style.display = "none";
}

function renderShape(type) {
  stage.innerHTML = "";

  const shape = document.createElement("div");
  shape.classList.add("shape");

  if (type === "circle") shape.classList.add("circle");
  if (type === "square") shape.classList.add("square");

  stage.appendChild(shape);
  currentShape = shape;

  hideWarning();
}

function setColor(hex) {
  if (!currentShape) {
    showWarning();
    return;
  }

  currentShape.style.backgroundColor = hex;
  hideWarning();
}

function clearStage() {
  if (!currentShape) return;
  stage.innerHTML = "";
  currentShape = null;
  hideWarning();
}

function renderColorButtons() {
  colorsPanel.innerHTML = "";

  for (let i = 0; i < colors.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("color-btn");
    btn.textContent = colors[i].title;

    btn.addEventListener("click", () => {
      setColor(colors[i].hex);
    });

    colorsPanel.appendChild(btn);
  }
}

btnCircle.addEventListener("click", () => renderShape("circle"));
btnSquare.addEventListener("click", () => renderShape("square"));

btnClear.addEventListener("click", clearStage);

renderColorButtons();
