// add whatever parameters you deem necessary
function sameFrequency(nums1,nums2) {

    let n1f = createFrequencyCounter(nums1)
    let n2f = createFrequencyCounter(nums2)
    if(n1f.size > n2f.size) return false;


    for (let val of n1f.keys()) {
        if(n1f.get(val) != n2f.get(val)) return false

      }

      return true;
}

function createFrequencyCounter(nums) {
    
    let string = nums.toString()
   
    let frequencies = new Map();
  
    for (let val of string) {
      let valCount = frequencies.get(val) || 0;
      frequencies.set(val, valCount + 1);
    }
  
    return frequencies;
  }