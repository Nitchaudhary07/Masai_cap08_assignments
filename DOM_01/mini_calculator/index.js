let input1 = document.getElementById("input1");
let input2= document.getElementById("input2");
let ans = document.getElementById("ans");

function Add(){
  let result = (Number(input1.value)+Number(input2.value))
  ans.innerText = "Your Ans is = " + result;

}

function Subtract(){
    let result = (Number(input1.value)-Number(input2.value))
    ans.innerText = "Your Ans is = " + result;
  
  }

  function Divide(){
    let result = (Number(input1.value)/Number(input2.value))
    ans.innerText = "Your Ans is = " + result;
  
  }

  function Multiply(){
    let result = (Number(input1.value)*Number(input2.value))
    ans.innerText = "Your Ans is = " + result;
  
  }
  
