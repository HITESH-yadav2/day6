
for(let i=0;i<=100;i++){
    if(i%3===0){
        console.log(i);
    }
}
console.log("divisible by 3 and 5");
for(let i=0;i<=100;i++){
    if((i%3===0)&(i%5===0)){
        console.log(i);
    }
}
console.log("divisible by3and5 or 9")
for(let i=0;i<=100;i++){
    if(((i%3===0)&(i%5===0))|| (i%7===0))
        console.log(i);
}
console.log("even and odd number ")
for(let i=0;i<=100;i++){
    if(i%2===0){
        console.log(+i,"even");
    }
    else{
        console.log(+i,"odd");
    }
}
console.log("sum of n")
let s=0
for(let i=0;i<=100;i++){

    s = s+i
    
}
console.log(s);
console.log("avg"+s/100);
let i=0
while(i<10){
    console.log(i)
    i = i+4;
}
let k=0;
while(k<10){
    if(k%2===0){
        console.log("even"+k);
    }
   k=k+1;
    
}
let l=100;
while(l>0){
    console.log(l);
l=l-1;
}
let a=0;
while(a<100){
    if(a%2===0){
        d= a+a;
       

    }
a=a+1;
}
console.log(d);
let f=145;
let y=0;
while((f.length)>0){
     y=y+1;
    console.log(y);

}
console.log(y);
