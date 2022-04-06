function facto() {
    let factoNumber = parseInt(document.getElementById("inputFacto").value);

    if (factoNumber==0){
      factoNumber=(1);
    } else{
      factoNumber=(factorial(factoNumber));
      }

    const container = document.getElementById("factoContainer");
    const paragraph = document.createElement("p");
    paragraph.innerText = (factoNumber);
    container.appendChild(paragraph);
  }
  function factorial(number){
    return number>1? number*factorial (number-1): 1;
  }

  function fibo() {
    let fiboNumber = parseInt(document.getElementById("inputFibo").value);
  
    let array =[0,1];
  
    for (let i = 2; i <= fiboNumber; i++) {
      array[i] = array[i - 1] + array[i - 2];
    }
    fiboNumber = array[array.length -1 ];

    const container = document.getElementById("fiboContainer");
    const paragraph = document.createElement("p");
    paragraph.innerText = (fiboNumber);
    container.appendChild(paragraph);
  }
  