// alert("sajad saeedi azad");
// console.log("sajad saeedi azad");
// this is a comment
/*
This is a multi-line comment
*/
// decleration variable
// var age=33;
// var firstName="sajad";
// var lastName="saeedi";
// var online=true;
// var whatever;
// // whatever="code";
// whatever=null;
// age=age+1;
// var fullname=firstName+" "+lastName;
// console.log("your age is:" +" ",age);
// console.log("your first name is:"+" " ,firstName);
// console.log("Are your online?"+" " ,online);
// console.log(whatever);
// console.log("your Fullname is:"+" " ,fullname);
/* you can not change value in decleration by const*/
// const pi=3.14;
// pi=4;
// console.log(pi);
/*arithmatic expression (+,-,/,*)*/
// var friends=10;
// friends=friends+1;
// friends=friends-1;
// friends=friends*2;
// friends=friends/2;
// friends=friends**2;
// var remain =friends%3;
// friends+=1;
// friends-=1;
// friends*=2;
// friends/=2;
// friends**=2;
// friends%=3;
/*ترتیب محاسبات در جاوااسکریپیت*/
/*پرانتز-توان-ضرب-تقسیم-جمع-تفریق*/
// friends=(10+2)/2;
// console.log(friends);
// var myname = window.prompt("What's Your Name?");
// console.log("my name is " + myname);
//class and object
// var human1={
// name:"sajad",
// age:33,
// eat:function(){
//     console.log("risck is eating food")
// },
// drink:function(){
//     console.log("rick is drinking alcohole")
// },
// sleep:function(){
//     console.log("rick has passed out");
// }
// };
// var human2={
// name:"mehdi",
// age:23,
// eat:function(){
//     console.log("risck is eating food")
// },
// drink:function(){
//     console.log("rick is drinking alcohole")
// },
// sleep:function(){
//     console.log("rick has passed out");
// }
// };
// console.log(human2.age);
// console.log(human2['name']);
// console.log(human2.eat);
// console.log(human2.drink);
// console.log(human2.sleep);
// console.log(human1.age);
// console.log(human1['name']);
// console.log(human1.eat);
// console.log(human1.drink);
// console.log(human1.sleep);
//arrays description
// var cars=["mustang","bmw","benz"];
//  console.log(cars);
// //push syntax for add new index to current array at end of array.add an element
// cars.push("toyota");
// cars.pop(cars);//remove last element
// //  var numbercars=[cars.length];//return length of array
// //  console.log(numbercars);
// // var sort=cars.sort();
// // console.log(sort);
// // cars=cars.reverse();//reverse sort an array
// var lastcar=cars[cars.length-1];//access to last index of array
// console.log(lastcar);
//if statement and conditions
// var age=60;
// if(age>=18){
//     console.log("you are an adult");
// }
// else if(age>=65) {
//      console.log("you are not senior");

// }
// else if(age<0){
//    console.log("you havent been yet");
// }
// else{
//      console.log("you are child");
// }
// var online=true;
// if(online){
//     console.log("sajad is online");

// }
// else{
//        console.log("sajad id ofline");
// }
// var myname=window.prompt("What's your name?"); NEW COPY
// console.log("hello",myname);
// document.getElementById("mybutton").onclick=function(){
//  var myname=document.getElementById("mytext").value; 
//  console.log("hello",myname);  
// }
//type conversation of numbers,strings,booleans
//(Explicit vs implicit)
//change the datatype of value to another
// var age=window.prompt("Enter your age");
// console.log("Happy birthday");
//
/*Convert datatype to another string to number*/
// age=Number(age);
// age+=1;
// console.log(typeof age);
// console.log(age);
//  var myvar;
// //  myvar=Number("3.14");
// //  myvar=string(3.14);
// //  console.log(typeof myvar);
// //  console.log(myvar);
// myvar=Boolean(1);
// console.log(typeof myvar);
// console.log(myvar);
//conversation about function
// function sayhello(myname,myage){
//     console.log("hello",myname,myage);
//     console.log("you are",myage,"years old");
//     // console.log("have nice day");
//     // console.log("goodbye");

// }
// var myname="sajad";
// var myage=33;

// say

// hello(myname,myage);
// function tocelsius(f){
//     // var result=(f-32)*(5/9);
//    return (f-32)*(5/9);

//     //39,40 are equals
// }

// // var temp=tocelsius(window.prompt("enter your temp"));/*معادل باy است*/
// var temp=tocelsius(100);
// console.log("temp to celsius equal to",temp);
//object and class and property
// var human={
//     name:"sajad",
//     age:33,
// eat:function(){
//     console.log("risk is eating food")
// },
// drink:function(){
//     console.log("rick is drinking alcohol")
// },
// sleep:function(){
//     console.log("rick has passed out");
// }

// };
// /*for access these properties*/
// console.log(human.name) //dot notation
// console.log(human.age)
// console.log(human['name'] )//bracket natation
// // console.log(human);
// human.eat();
// human.drink();
// human.sleep();
//for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);

// }
// console.log("happy new year");
// i=10;
// for (;i >0;) {
// console.log(i);
// i--
// }
//for loop in array
//  let letters =["h","e","l","p"];
// for (let i = 0; i < letters.length;i++){
// console.log(letters[i]);
// }
// let car={
//     make:"bmw",
//     model:"bmw z4",
//     year:2022,
//     color:"blue"
// }

// // for(let i in letters){
// //     console.log(letters[i]);

// // }
// //for loop flexible
// for(let property in car){
//     console.log(car[property]);
// }
//nested loop:a loop inside of another loop
// var symbol=window.prompt("enter a symbol:");
// var rows=window.prompt("enter # of rows:");
// var columns=window.prompt("enter # of columns:");
// for(let i=0;i < rows;i++){//outer loop
//     for(let j=0;j < columns;j++){//inner loop
//         document.getElementById("myretangle").innerHTML+=symbol;//select an element in DOM
//         // console.log(symbol);
//     }
//     document.getElementById("myretangle").innerHTML+="<br>";//show break rows
//switch statement and conditions
// var grade="A";
// switch(grade){
//     case "A":
//         console.log("you did grade " + grade);
//         break;
//         case "B":
//             console.log("you did good");
//             break;
//             case "C":
//                    console.log("you did okay");
//                    break;
//                    case "D":
//                           console.log("you did not BAD!");
//                           case"E":
//                              console.log("you did BAD");
//                              break;
//                              default:
//                                     console.log("you did very BAD Try agin later");

// }
/*Logical operators && (and) ,!(reverses boolean value),||(or)*/
// var temp=35;
// if (temp>30) {
//     console.log("its HOT outside");


// }
// else if (temp>0 && temp<=30) {
//     console.log("its warm outside");

// } else {
//      console.log("its COLD outside");

// }
// var hour=12;
// if (hour<6 || hour>=20) {
//      console.log("its Dark outside");

// }
// else{
//      console.log("its LIGHT outside");
// }
// var name=window.prompt("Please enter your name");
// if (!(name=="")) {
//  console.log("you did not enter your name!",name);

// }
// else{
//     console.log("you did not enter name");
// }
// while loop and do while
// var cnum=window.prompt("Your Computer has virus");
// while (cnum==""){//تازمانی که یک کاراکتر وارد نکنیم عبارت cnum برقرار هست 
//     cnum=window.prompt("Your Computer has virus");
// }
// do{
// var cnum=window.prompt("Your Computer has virus"); 
// }while (cnum=="")
// console.log("thank you your computer not has virus");//درصورت وترد کردن یک کاراکتر شرط موجود در حلقه  while نقض شده و کد روبه رو اجرا می 
/---------------*for loop*-------------/
// for (let i = 0; i <=10; i++) {
//   console.log(i);

// }
//math/*--تابع -*/
// var mynum;
// console.log(mynum);
// mynum = Math.round(3.5);//عمل گرد کردن
// mynum=Math.floor(3.9);//رند کردن به کوچکترین عدد موجود در پرانتز
// mynum=Math.ceil(3.9);//رند کردن به بزرگنرین عدد
// mynum=Math.pow(3,2);// به توان رساندن
// mynum=Math.sqrt(9);//جذر گرفتن
// mynum=Math.abs(-2);// قدر مطلق گرفتن
// mynum=Math.min(1,2,4,8);//بدست آوردن منیمم مقدار دریک بازه
// mynum=Math.max(1,2,4,8);//بدست آوردن ماکزیمم مقدار دریک بازه
// mynum=Math.PI;//عددpi
// mynum=Math.E;//عدد نپریل
//  قضیه فیثاغورس-حل کردن مسایل ریاضی بوسیله جاوا اسکریپت
// var a=window.prompt("Please enter a:");
// var b=window.prompt("Please enter b:");
// var c;
// c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
// console.log("c side is",c);
//math.random function تولید عدد تصادفی در بازه 0-1
// var n;
// n=Math.random();//0-1
// n=Math.floor(Math.random()*6);//0-5
// n=Math.floor(Math.random()*6)+1;//1-6
// function getrandomnum(min,max){
//   return Math.floor(Math.random()*(max-min+1)+min)
// }
// n=getrandomnum(1,6);
// console.log(n);
// n=getrandomnum(1,6);
// console.log(n);
// n=getrandomnum(1,6);
// console.log(n);
//نمایش تاریخ در جاوا اسکریپت
// date=new Date();
// date=new Date(2022,3,4,8,52,31);
// date=new Date("Decamber 19, 2021 9:04:51:17");
// let year=date.getFullYear();
// let month=date.getMonth();
// let dayofweek=date.getDay();
// let dayofMonth=date.getDate();
// let hours=date.getHours();
// let minutes=date.getMinutes();
// let seconds=date.getSeconds();
// let milliseconds=date.getMilliseconds();
// console.log(year);
// console.log(month);
// console.log(dayofweek);
// console.log(dayofMonth);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);
// console.log(milliseconds);
// date.setFullYear(2023);
// date.setMonth(11);
// date.setDate(25);
// date.sethours(0);
// date.setminutes(0);
// date.setseconds(0);
// date.setmilliseconds(0);
// console.log(date);
//usefull string properties
// var myname = "Sajad Saeedi";
// var mystreet = "shahid ghrishvandi st."
// var mycity = "IEZEH"
// var myphone="0991-754-0483"
// console.log(myname.length); //return length character string
// console.log(myname.charAt(2)); //return specification character disired index
// console.log(myname.indexOf("j")); //search position character disired indexof
// console.log(myname.lastIndexOf("d")); //search position character disired indexof
// console.log(myname.trim()); //remone space betwwen character
// console.log(myname.toUpperCase()); //return uppercase character string
// console.log(myname.toLowerCase()); //return lowercase character string
// // var firstname=myname.slice(0,3);//for seprate character disired length and indexof
// var firstname = myname.slice(0, myname.indexOf(" ")); //  return first charchter before space
// console.log(firstname);
// // var lastname=myname.slice(5);
// var lastname = myname.slice(myname.lastIndexOf(" ") + 1); // return first charchter after space in last string that sperated from first character
// console.log(lastname);
// var myaddress = mystreet.concat("", mycity); //concat strings with togther
// console.log(myaddress);
// myphone=myphone.replaceAll("-", "");
// console.log(myphone);
/*--method changing calling one method after another in on continuous line of code*/
// let user="sajad";
// let firstletter=user.charAt(0);
// firstletter = firstletter.toUpperCase();
// user=firstletter+user.slice(1);
// user=user.charAt(0).toUpperCase()+user.slice(1);
// console.log(user);
// console.log(firstletter);
//Break=used to exit our of a loop ,continue syntaxs
// for (let i = 1; i <= 20; i++) {
//     if(i==10){
//         break;
//     }
//     console.log(i);

// }
// for (let i = 1; i <= 20; i++) {
//     if (i == 10) {
//         continue;
//     }
//     console.log(i);


// }
//difrence between Let And Var variables,let for define block scope and var define for function scope
// for (let i = 0; i < 3; i++) {
//     console.log(i);

// }
// console.log(i);
// for (var i = 0; i < 3; i++) {
//     console.log(i);

// }
// console.log(i);
// function dosomthing() {
//   for (var i = 0; i < 3; i++) {
//       console.log(i);

//   }
// }
// dosomthing();
// console.log(i);
// var name="sajad"; global scope
// let name="sajad"; block scope
/*Foreach=performs a function for each element in array*/
// let total=0;
// let cart=[5,6,7,8,9];
// function checkout(element) {
//     total+=element;
// }
// cart.forEach(checkout);//callback function
// console.log("Your total is:$"+total);
//map()=performs a function for each element in an array, then stores the returned values in a new array
// let storeUSD=[5,6,7,8,9];
// function toEuros(value){
//     value*=0.85;
//     return value;
// }  
// let storeEUR=storeUSD.map(toEuros);
// console.log(storeUSD);
// console.log(storeEUR);
//Fillter=reference the element of an array that meets a condition specified in a function
// let students=[16,17,18,19,20];
// function checkage(age,index,array){
//     if (age>=18) {
//         return age;

//     }

// }
// let aduktstudents=students.filter(checkage);
// console.log(aduktstudents);
//reduce()=reduces an array to a single value the return value of the callback function is the accumlated result. and is provided as argument in the next call to the callback function
// let letters=["h","e","l","p"];
// function combineletters(total,nextletter,index,array) {
//     return total+nextletter;  
// }
// let word=letters.reduce(combineletters);
// console.log(word);
//callback function=function passed as an argument function.//callback function=تابع به عنوان تابع آرگومان ارسال می شود.
// به یک تابع اجازه می دهد تا تابع دیگری را فراخوانی کند
// allows a function to invoke another function
// let message;
// function displayconsole(output) {
// console.log(output); 
// }
// function displayDom(output) {
//  document.getElementById("myh1").innerHTML = output; 
// }
// function setmessage(text,callback) {
//    message = text; 
// //    displayconsole(message);
// // return message;
// callback(message);
// }
// setmessage("hi dear!", displayconsole);
console.log("sajad");