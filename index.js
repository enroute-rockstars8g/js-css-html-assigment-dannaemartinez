function fibo() {
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
  }

  function facto() {
    const factoNumber = parseInt(document.getElementById("inputFacto").value);
  
    console.log(factoNumber);

    if (factoNumber==0){
      factoNumber.push(1);
    } else{
      factoNumber.push(factorial(factoNumber));
      }

    const cont = document.getElementById("factoContainer");
    const pra = document.createElement("p");
    cont.appendChild(pra);
  }
  function factorial(number){
    return number>1? number*factorial (number-1): 1;
  }
  