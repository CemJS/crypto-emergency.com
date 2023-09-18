export const handleKeyUp = function (e, index) {
  console.log('=9abb4d=', index)
  let arrElements = e.target.parentElement.children;
  if (e.key === "Backspace" && this.Static.pass[index] !== "") {
    this.Static.pass[index] = "";
    arrElements[index].focus();
  } else if (e.key === "Backspace" && this.Static.pass[index] == "" && index !== 0) {
    this.Static.pass[index - 1] = "";
    arrElements[index - 1].value = ""
    arrElements[index - 1].focus();
  }
  if (e.key === "ArrowLeft" && index > 0) {
    arrElements[index - 1].focus();
  }
  if (e.key === "ArrowRight" && index < arrElements.length - 1) {
    arrElements[index + 1].focus();
  }
  return
}

export const change = function (e, index) {
  let tmp = false;
  let arrEvent = e.target.parentElement.children;
  if (e.inputType === "insertFromPaste") {
    let strArr = e.target.value.split("");
    if (this.Static.pass[index] === "") {
      for (let i = index; i < index + strArr.length; i++) {
        if (this.Static.pass[i] === "") {
          (arrEvent[i].value = strArr[i - index]),
            (this.Static.pass[i] = strArr[i - index]);
        } else {
          break;
        }
      }
    } else {
      e.target.value = this.Static.pass[index]
    }
    for (let i = 0; i < index; i++) {
      if (arrEvent[i].value === "") {
        tmp = false;
        arrEvent[i].focus();
        break;
      }
    }
    for (let i = index; i < arrEvent.length; i++) {
      if (arrEvent[i].value === "") {
        tmp = false;
        arrEvent[i].focus();
        break;
      }
    }
  } else if (e.inputType !== "deleteContentBackward") {
    e.target.value = e.target.value[0];
    this.Static.pass[index] = e.target.value;
    let arr = e.target.parentElement.children;
    for (let i = 0; i < index; i++) {
      if (arr[i].value === "") {
        tmp = false;
        arr[i].focus();
        break;
      }
    }
    for (let i = index; i < arr.length; i++) {
      if (arr[i].value === "") {
        tmp = false;
        arr[i].focus();
        break;
      }
    }
  }
  return
}

export const timer = function () {
  const timer = setInterval(async () => {
    this.Static.time--
    if (this.Static.time <= 0) {
      clearInterval(timer);
    }
  }, 1000);
  return
}

export const resetTimer = function () {
  this.Static.time = 60
  this.fn("timer")
  return
}