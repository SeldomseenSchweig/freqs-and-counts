// add whatever parameters you deem necessary
function averagePair(arr,goal) {


    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      let ave = (arr[left] + arr[right])/2;
  
      if (ave === goal) {
        return true;
      } else if (ave > goal) {
        right--;
      } else {
        left++;
      }
    }
    return false
  }
