function getStringLength(value:any):number |undefined{
    if(typeof value ==="string") {
    return(value as string).length;
    }
    return undefined;
}
console.log(getStringLength("Hello"));
console.log(getStringLength(123));