// add whatever parameters you deem necessary
function countPairs(arr, goal) {


  let i = 0;
  let diffs = []

while (i < arr.length) {
  diffs.push(goal-arr[i])
  i++
}
let j = 0
let count = 0 
while(j < arr.length){
  if(arr.includes(diffs[j]) && j != arr.indexOf(diffs[j])){
    count++
    j++
  }else{
    j++
  }
}
let answer = Math.floor(count/2)
  return answer;
}


