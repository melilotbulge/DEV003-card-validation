import validator from './validator.js';

console.log(validator);

const clickValidation=document.getElementById("submitbutton");
console.log(clickValidation);
clickValidation.addEventListener("click", (e) =>{
  e.preventDefault();
  const cardNum=document.getElementById("cardNum").value;  
  console.log(cardNum);

  const result= validator.isValid(cardNum);
  
  console.log(validator.isValid(cardNum));
 
  if(cardNum.length<13 || cardNum.length>18 || result===false) 
  {alert("Porfavor ingresa un numero de TARJETA VALIDO!!!!");
    return}
  else { alert(`Puedes continuar tu TARJETA ${validator.maskify(cardNum)} ES VALIDA`);
    return}
   

}
)

