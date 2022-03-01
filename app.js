document.querySelector('#but').addEventListener('click', click)



function click(){
    let w1 = document.querySelector('#w1').value
    let w2 = document.querySelector('#w2').value
    let bmi = w1
    let bmi1 = w2/100
    let bmi2 = bmi/(bmi1*bmi1)
    let bmi3 = bmi2.toPrecision(3);
    document.querySelector('#result').innerHTML = bmi3


    if(bmi3 <= 18.5){
        document.querySelector('.comment').innerText = "You are underweight. Eat Well"
    } else if(bmi3 > 18.5 && bmi3 <= 24.9){
        document.querySelector('.comment').innerText = "You are Normal Weight. Keep it up"
    } else if(bmi3 <= 29.9 && bmi3 >= 25){
        document.querySelector('.comment').innerText = "You are OverWeight. Start Exercise"
    } else if( bmi3 >= 30){
        document.querySelector('.comment').innerText = "You are Obesity. Do something to reduce weight"
    } 

}


document.getElementById("w1 w2")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("but").click();
    }
});


