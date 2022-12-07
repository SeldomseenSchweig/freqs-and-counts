// add whatever parameters you deem necessary
function twoArrayObject(arr1,arr2) {


    let frequencies = {};
  
    for (let x = 0;x < arr1.length; x++) {
        if(x > arr2.length-1){
            frequencies[arr1[x]] = null
        }else{
            frequencies[arr1[x]] = arr2[x]
        }

       
       
    }

  
    return frequencies;
  }