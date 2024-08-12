let jr=document.getElementById('jr')
function display(txt)
{
    jr.value = jr.value+txt;
    console.log(jr.value);
}
function Clear()
{
    jr.value=" "
}
function del()
{
    jr.value=jr.value.slice(0,-1)
}
function calc()
{
    jr.value=eval(jr.value);
}
function si()
{
    let p=prompt('Enter the principal amount:');
    let n=prompt('Enter the time period:');
    let r=prompt('Enter the rate of interest:');
    let si=(p * n * r)/100;
    alert(`The result is ${si}`);
}
function square()
{
    let a=prompt('Enter the a value:');
    let square = a*a;
    alert(`The result is ${square}`);
    

}
function cube()
{
    let a=prompt('Enter the a value:');
    let cube = a*a*a;
    alert(`The result is ${cube}`);
    

}
function diagonal()
{
    let l=prompt('Enter the length value:');
    let w=prompt('Enter the width value:');
    let diagonal = Math.sqrt((l*l)+(w*w)) 
    alert(`The result is ${diagonal}`);
    

}
const pi=22/7;
function circle()

{
    let r=prompt('Enter the r value:');
    let cube = pi*r*r;
    alert(`The result is ${cube}`);
    

}
function squareroot()
{
    let n=prompt('Enter the number:');
     let sqrt = Math.sqrt(n);
    alert(`The result is ${sqrt}`);

}