export default function calculate(obj, buttonName) {
  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.next === "0") {
      return {};
    }

    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      }
      return { next: buttonName };
    }

    if (obj.next) {
      return {
        next: obj.next + buttonName,
        result: null,
      };
    }

    return {
      next: buttonName,
      result: null,
    };
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        result: processResult(obj.result, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (buttonName === "C") {
    return {
      result: null,
      next: null,
      operation: null,
    };
  }

  if (obj.operation) {
    return {
      result: processResult(obj.result, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (!obj.next) {
    return { operation: buttonName };
  }

  return {
    result: obj.next,
    next: null,
    operation: buttonName,
  };
}

function processResult(numberOne, numberTwo, operation) {
  const firstNumber = numberOne || "0";

  const secondNumber = numberTwo || "0";

  if (operation === "+") {
    return (parseFloat(firstNumber) + parseFloat(secondNumber)).toString();
  }

  if (operation === "-") {
    return (parseFloat(firstNumber) - parseFloat(secondNumber)).toString();
  }

  if (operation === "x") {
    return (parseFloat(firstNumber) * parseFloat(secondNumber)).toString();
  }

  if (operation === "/") {
    return (parseFloat(firstNumber) / parseFloat(secondNumber)).toString();
  }
}

function isNumber(element) {
  return /[0-9]+/.test(element);
}