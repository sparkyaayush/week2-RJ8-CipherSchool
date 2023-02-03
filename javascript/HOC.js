const add = (a,b) => {
    return a+b;
};
const higherOrder = (a, refernceFunction) => {
    return refernceFunction(a, 20);
}
console.log(higherOrder(30,add));