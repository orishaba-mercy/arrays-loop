//  Write a function that accepts an array of strings and
//  console.logs each element using a for loop.
function arrayString(num){
for(let i=0; i<num.length; i++){
console.log(num[i])


}
}
let num=["Mercy","is","good","and","active"];
arrayString(num);
 
//write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2
function numArray(arr2){
arr2.forEach(element => {
    console.log(element*2)
});

}
let arr2=[3,5,4,5,6,7,9];
numArray(arr2);

//  Write a function that takes in an array of numbers and consoles the 
// // first four items multiplied by 8 and the last two added by 5. Console the array with the new values
 
 function getMultiply(arr3){
    
    for(let i=0;i<arr3.length;i++){
        if (i<4){
            arr3[i]*=8
        }
      else if(i>arr3.length-2){
        arr3[i]+=5
        console.log(arr3)
      }
      
    }
    

 }
 let arr3 =[1,2,3,4,5,6,7]
 getMultiply(arr3)


// Write a function that takes in the following array and use a while 
// loop to iterate and break when the item is equal to the fourth index
let Num=[1,2,3,4,5,6,7,8,9];
 let i=0;
function num1(Num){

 while(i< Num.length){
  console.log(Num)
 i++;
if(i===4){
    
    break;
 }

 }
 }

 num1(Num)

// // // Write a function that takes in a an array of strings and use a continue statement
// // //  when the item is at the second index
 function fruits(arra5){
  
       for(let i =0; i< arra5.length;i++){
           if(i===2){
               continue;
          }
         console.log("countinue",arra5[i]);

       }    
     }
     let arra5= ['apple','plum','banana','strawberries','kiwi']
     fruits(arra5)

