const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

  const changeButton = document.querySelector("button");
  
  function changeColors(){
    const chosenColorFirst = colors[Math.floor(Math.random() * colors.length)];
    const chosenColorSecond = colors[Math.floor(Math.random() * colors.length)];
    const chosenColorThird = colors[Math.floor(Math.random() * colors.length)];
    const chosenColorForth = colors[Math.floor(Math.random() * colors.length)];
 
    if(chosenColorFirst === chosenColorSecond){
      document.body.style.background = `linear-gradient(to right, ${chosenColorFirst}, ${chosenColorThird})`;
    }else if(chosenColorSecond === chosenColorThird){
      document.body.style.background = `linear-gradient(to right, ${chosenColorFirst}, ${chosenColorForth})`;
    }else{
      document.body.style.background = `linear-gradient(to right, ${chosenColorFirst}, ${chosenColorSecond})`;
    }
  } 

  changeButton.addEventListener("click", changeColors);

  

  