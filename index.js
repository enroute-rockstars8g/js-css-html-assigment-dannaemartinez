function facto() {
    let factoNumber = parseInt(document.getElementById("inputFacto").value);

    if (factoNumber==0){
      factoNumber=(1);
    } else{
      factoNumber=(factorial(factoNumber));
      }

    const container = document.getElementById("factoContainer");
    const praragraph = document.createElement("p");
    praragraph.innerText = (factoNumber);
    container.appendChild(paragraph);
  }
  function factorial(number){
    return number>1? number*factorial (number-1): 1;
  }

  /*function fibo() {
    const fiboNumber = parseInt(document.getElementById("inputFibo").value);
  
    console.log(fiboNumber);
  
    const numberToShow = [];
    const a=0, b=1;
  
    for (let i = 2; i <= fiboNumber; i++) {
      let res = a+b;
      a = b;
      b = res;
      numberToShow.push(res);
    }
    const container = document.getElementById("fiboContainer");
    const praragraph = document.createElement("p");
    praragraph.innerText = numberToShow.join(",");
    container.appendChild(praragraph);
  }*/
  