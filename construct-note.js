// add whatever parameters you deem necessary
function constructNote(string1,string2) {
    if(string1.length > string2.length){
                return false}
    if(string1.length === 0) return true

    let s1 = createFrequencyCounter(string1)
    let s2 = createFrequencyCounter(string2)
    for (let val of s1.keys()) {
        if(s1.get(val) > s2.get(val)) {
            return false
        }
      }

      return true


}




function createFrequencyCounter(string) {
    let frequencies = {};
  
    for (let val of string) {
      let valCount = frequencies[val] || 0;
      frequencies[val] = valCount + 1;
    }
  
    return frequencies;
  }