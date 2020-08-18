let dataArray = [Math.floor(Math.random()*10)];
let labelArray = [1];

//slider
let array = document.getElementById('array');
let arraySlider = document.getElementById('arraySlider');
array.innerHTML = arraySlider.value; // Display the default slider value
arraySlider.oninput = function(){
    array.innerHTML = this.value;
    if (dataArray.length < arraySlider.value){
        for (let x = dataArray.length; x <= arraySlider.value; x++){
            dataArray[x] = Math.floor(Math.random()*10);
            labelArray[x] = x;
        }
    } else if (dataArray.length > arraySlider.value){
        for (let p = dataArray.length; p >= arraySlider.value; p--){
            dataArray.pop();
        }
        for (let l = labelArray.length; l >= arraySlider.value; l--){
            labelArray.pop();
        }
    }
}

//chart
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelArray,
        datasets: [{
            label: 'Array Sort!!!',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: dataArray
        }]
    },
    options: {}
});

let start = document.getElementById("start");
let prash = 0;
let tempHold;
start.onclick = function(){
    setInterval(() => {
        if (dataArray[prash] > dataArray[prash+1]){
            tempHold = dataArray[prash];
            dataArray[prash] = dataArray[prash+1];
            dataArray[prash+1] = tempHold;
        }
        prash++;
    }, 50);
}

//compare the value with the value to its right. if the right is higher, do nothing. if the right is lower, switch.
function sortOne(){
    setInterval(() => {
        if (dataArray[prash] > dataArray[prash+1]){
            tempHold = dataArray[prash];
            dataArray[prash] = dataArray[prash+1];
            dataArray[prash+1] = tempHold;
        }
        prash++;
    }, 50);
}