var hy = document.querySelector('.hypo-btn');
var hyOutput = document.querySelector('.hypo-output');
hyOutput.style.display="none";
hy.addEventListener('click',calcHypo);

function calcHypo(){
    hyOutput.style.display="block";

    var a=parseInt(document.querySelector('.side1').value);
    var b=parseInt(document.querySelector('.side2').value);

    a=a*a;
    b=b*b;
    var c=a+b;
    document.querySelector('#hypo-output').innerText=Math.sqrt(c).toFixed(2);
    

}
