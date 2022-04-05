function fibo() {
    const fiboNumber = parseInt(document.getElementById("inputFibo").value);
  
    console.log(fiboNumber);
  
    const numberToShow = [];
  
    for (let i = 0; i < fiboNumber; i++) {
      numberToShow.push(i);
    }
    const container = document.getElementById("fiboContainer");
    const praragraph = document.createElement("p");
    praragraph.innerText = numberToShow.join(",");
    container.appendChild(praragraph);
  }

  function facto() {
    const fiboNumber = parseInt(document.getElementById("inputFacto").value);
  
    console.log(fiboNumber);
  
    const numberToShow = [];
  
    for (let i = 0; i < fiboNumber; i++) {
      numberToShow.push(i);
    }
    const container = document.getElementById("factoContainer");
    const praragraph = document.createElement("p");
    praragraph.innerText = numberToShow.join(",");
    container.appendChild(praragraph);
  }
  