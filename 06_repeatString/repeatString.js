const repeatString = function(str, num) {
    if(num < 0){
        return "ERROR"
    }   
    let acumulador = "";
    for(let i = 0;i < num; i++){
        acumulador += str
    }
    return acumulador
};

// Do not edit below this line
module.exports = repeatString;
