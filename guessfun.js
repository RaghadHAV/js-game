var no=Math.floor((Math.random() * 10) + 1);
var count=1;

console.log("random is:"+no)

function guessno(){
  console.log("count is:"+count)
  
  if(count==3)
  {
  document.getElementById("data").innerHTML ="Game over!!"
  }
  else{
  count++;
  var inpt1=document.getElementById("inpt1").value
    if(inpt1==no)
    document.getElementById("data").innerHTML ="correct"
    
   else
    document.getElementById("data").innerHTML ="is not correct"
  }

}