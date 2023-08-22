function capToFront(sp) {
    let upperAZ = /[A-Z]/g;
    let upperLetters = sp.match(upperAZ);
    for(let i=0; i < upperLetters.length;i++) {
        let indx = sp.indexOf(upperLetters[i]);
      sp = sp.substring(0,indx)+sp.substring(indx+1,sp.length);
    }
    sp = upperLetters.join("")+sp;
    
    return sp;
}

console.log(capToFront("hApPy")) 
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))