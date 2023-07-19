const display = document.querySelector(".display");
const buttons = document.querySelector("button");

// Add números ao display
const numToDisplay = (element) => {
  this.display.value += element;
};

// Add operadores ao display sem repetir operador ou ponto
const operatorToDisplay = (operator) => {
  const displayValue = this.display.value;
  const lastChar = displayValue[displayValue.length - 1];

  if (isOperator(lastChar)) {
    this.display.value = displayValue.slice(0, -1) + operator;
  } else {
    this.display.value += operator;
  }
};
// Verifica se o caractere é um operador ou ponto
const isOperator = (character) => {
  const operators = ["+", "-", "/", "*", "."];
  return operators.includes(character);
};

// Deleta último elemento
const deleteToDisplay = () => {
  this.display.value = this.display.value.slice(0, -1);
};

// Reseta display
const clearDisplay = () => {
  this.display.value = "";
};

// Resultado do display
const resultDisplay = () => {
  this.display.value = eval(this.display.value);
};

const clickButtons = () => {
  document.addEventListener("click", (e) => {
    const element = e.target;

    // Add num ao display
    if (element.classList.contains("btn-num")) {
      numToDisplay(element.innerText);
    }
    // Add operador ao display
    if (element.classList.contains("btn-operator")) {
      operatorToDisplay(element.innerText);
    }
    // Deleta último no display
    if (element.classList.contains("delete")) {
      deleteToDisplay();
    }
    // Zera o display
    if (element.classList.contains("clear")) {
      clearDisplay();
    }
    // Mostra resultado da operação
    if (element.classList.contains("equals")) {
      resultDisplay();
    }
  });
};

clickButtons();
