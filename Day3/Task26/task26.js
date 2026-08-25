let studentNames = ["ahmed","sara","omar","laila","hassan"];
let matched = 0;
for(let name of studentNames){
 let upperName = name.toUpperCase();
 if(upperName.startsWith("A") || upperName.startsWith("S")){
  console.log(upperName);
  matched++;
 }
}
console.log("Matched names:",matched);
