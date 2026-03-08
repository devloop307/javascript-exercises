const sumAll = function(a,  b) {
    let acumulador = 0;
    if (a < 0 || b < 0) return "ERROR";
    if(Number.isInteger(a) && Number.isInteger(b)){
        if(a < b){
            for(let i = a; i <= b; i++){
                acumulador += i;
            }
        }else{
            for(let i = b; i <= a; i++){
                acumulador += i;
            }
        }
    }else{
        return "ERROR";
    }
    return acumulador;
};
// Do not edit below this line
module.exports = sumAll;
