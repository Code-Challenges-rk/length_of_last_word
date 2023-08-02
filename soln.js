/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    let arr = s.split(" ")

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === '') {
            // arr.splice(i, 1)
            arr = arr.filter((items) => items !== arr[i])
        }
    }
    return arr[arr.length -1].length;
};

let s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s));