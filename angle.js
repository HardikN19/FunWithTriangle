const inputs = document.querySelectorAll('.input');
const outputEle = document.querySelector('.output');
const submitBtn = document.querySelector('#btn');

function isTriangle() {
    let sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (sumOfAngles === 180) {
        outputEle.innerText = "Yuhu! Angles makes a triangle";
    } else {
        outputEle.innerText = "Oops! Angles cannot make a triangle";
    }
}

function calculateSumOfAngles(ang1, ang2, ang3) {
    let sumOfAngles = ang1 + ang2 + ang3;
    return (sumOfAngles);
}
submitBtn.addEventListener("click", isTriangle);