function factorial(num) {
      if (num < 0) 
          return -1;
      else if (num == 0) 
        return 1;
      else {
        return (num * factorial(num - 1));
      }
}

function Calculate() {
    let resField = document.querySelector("#res");
    let inputField = document.querySelector("#expr");

    let input = inputField.value.replace(/(\d+)!/g, (m, n) => factorial(+n));

    let regex = "/[^\d\(\)\-\+\*\/.]/g";
    if (input.match(regex) != null) {
        resField.value = "Error";
    }
    else {
        try {
            resField.value = eval(input);
        }
        catch(e) {
            resField.value = "Error";
        }
    }
}

function toBin() {
    let resField = document.querySelector("#res");
    let inputField = document.querySelector("#expr");
    let regex = "/[^\d]/g";
    if (inputField.value.match(regex) != null) {
        resField.value = "Error";
    } 
    else {
        resField.value = parseInt(inputField.value, 10).toString(2);
    }
}

function toDec() {
    let resField = document.querySelector("#res");
    let inputField = document.querySelector("#expr");
    let regex = "/[^\d]/g";
    if (inputField.value.match(regex) != null) {
        resField.value = "Error";
    } 
    else {
        resField.value = parseInt(inputField.value, 2);
    }
}