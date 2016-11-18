var output ;

function calculator(x, y, z){
  if (x == "add"){
  output = y + z;
  console.log(output);
  }
  else if (x == "subtract"){
  output = y - z;
  console.log(output);
  }
  else if (x == "multiply"){
  output = y * z;
  console.log(output);
  }
  else if (x == "divide"){
  output = y / z;
  console.log(output);
  }
  else{
  console.log("you failed math, go back to school");
  }
}
calculator("subtract", 1, 2);