var weight = [30,40,45,35];
//console.log(weight[length]);
var sum = 0
avg = 0
for(var i=0; i<weight.length; i++)
{
    console.log("Weight: ",weight[i]);
}
function avg_weight()
{
   for(var a=0; a<weight.length; a++){
      sum = sum+weight[a];
   }
   console.log("Sum:    ",sum);
   avg = sum/weight.length;
   console.log("Average: ",avg)
}
avg_weight();
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(150);
}