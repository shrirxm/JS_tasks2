var number=prompt("Enter the number");
var sum=0;
while(number){
    sum+=number%10;
    num=Math.floor(number/10);
}
if(sum%2==0)
console.log("Evenish");

else
console.log("oddish");