// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      
      
      if (arr[left] > 0 && arr[right] > 0) {
        left++;

      }else if(arr[left] < 0 && arr[right] < 0){
        right--;

      }else if(arr[left] < 0 && arr[right] > 0 ){
          let pos = arr[right]
          let neg = arr[left]
          arr[right] = neg;
          arr[left] = pos;
          left++;
          right--;


      }

    //   }
    // let i = 0;
    // let x = arr.length-1;
    // while(i < arr.length -1){
    //     if(arr[x] > 0){
    //         let el = arr.pop();
    //         arr.unshift(el)
    //         i++;
    //     }else{
    //         x--
    //         i++;
    //     }
    // }

    }
    return arr
}



