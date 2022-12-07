// add whatever parameters you deem necessary
function countPairs(arr, num) {


//   let i = 0;
//   let diffs = []

// while (i < arr.length) {
//   diffs.push(goal-arr[i])
//   i++
// }
// let j = 0
// let count = 0 
// while(j < arr.length){
//   if(arr.includes(diffs[j]) && j != arr.indexOf(diffs[j])){
//     count++
//     j++
//   }else{
//     j++
//   }
// }
// let answer = Math.floor(count/2)
//   return answer;


  arr.sort((a, b) => a - b);
  let count = 0;
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
      let sum = arr[start] + arr[end];
      if (sum === num) {
          count++;
          start++;
          end--;
      } else if (sum < num) {
          start++;
      } else {
          end--;
      }
  }
  return count;
}


