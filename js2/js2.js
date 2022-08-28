function avg(arr) {
    let total = 0;
    for(let num of arr) {
        total += num;
    }
    return total / arr.length;
}
//in console   avg([25,65,54,85,])

let num = 8;
console.log(num)

// function isPangram(sentence) {
//     let lowerCased = sentence.toLowerCase();
//  for(let char of 'abcdefghijklmnopqrstuvwxyz') {
//    if(lowerCased.indexOf(char) === -1) {
//     return false;
//    }
//    return true;
//  }   
 
//}
function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
 for(let char of 'abcdefghijklmnopqrstuvwxyz') {
   if(!lowerCased.includes(char)) {
    return false;
   }
   return true;
 }  
}



function getCard() {
 const values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
 const valIdx = Math.floor(Math.random() * values.length);
 const value =  values[valIdx];

 const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
 const suitIdx = Math.floor(Math.random() * suits.length);
 const suit = suits[suitIdx];
 console.log(value, suit);
 return {value: value, suit:suit};
}

//const value = pick(values);
//const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
//const suit = pick(suits);
//return {value: pick{values}, suit: pick{suits} };
//}