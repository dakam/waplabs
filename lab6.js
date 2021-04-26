//Question1
//Code with Corrections for part g
function makeArmy() {
  let shooters=[];
 
  for(let i=0;i<2;i++) {
    let shooter =  function() {
      alert(i);
    };
    shooters.push(shooter);

  }
  return shooters;
}

let army = makeArmy();
army[0]();


//Qn2 solution

let printNumbers= (from, to) => {
    setTimeout(()=>{
    console.log(from);
    if(from <to) {
      printNumbers(from+1, to);
    } 
    }, 1000);
      
    }
    
    printNumbers(10, 20); //testing the function


  //Qn3 Solution
  // after the loop
  //it will show 100000000
