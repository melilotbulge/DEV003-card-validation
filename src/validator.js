const validator = {


isValid: function (cardNum) {
      
      let addition = 0;
      const cNumArr= Array.from(cardNum,Number);
      
      console.log(typeof(cNumArr))
  
      const cNumRev=cNumArr.reverse();
      console.log(cNumRev);
      console.log(typeof(cNumRev));

      for (let i = 1; i < cNumRev.length; i +=2) {
        let multiply = cNumRev[i]*2
        if (multiply > 9) {
          multiply -= 9
        }
        addition+=multiply
      }
      for (let i = 0; i < cNumRev.length; i +=2) {
       let dontMultiply = cNumRev[i];
        addition+=dontMultiply
  
      }
        console.log(addition) 
        
        return addition % 10 === 0
},

maskify: function (cardNum) {
  const cNumArr = Array.from(cardNum, Number);
  const size = cNumArr.length;
  let rMask = "";
  for (let i = 0; i <size; i++) {
    if (i < size - 4) {
      const mask = ("#");
      rMask += mask;
    } else {
      const unMask = (cNumArr[i]);
      rMask += unMask;
    }
  }
  return rMask;
}

}
export default validator;





