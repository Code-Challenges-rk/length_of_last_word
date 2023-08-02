const lengthOfLastWord = function (s) {
  s = s.trim();
  console.log(s);
  let lastIndex = s.lastIndexOf(" ");
  console.log(lastIndex);
  if (lastIndex === -1) {
    console.log("s length", s.length);
    return s.length;
  }
  return s.length - lastIndex - 1;
};

let s = "   fly me   to   the moon  "
let ex2 = "luffy is still joyboy"
console.log(lengthOfLastWord(ex2));


/**
 * @param {string} s
 * @return {number}
 */
const lastWordLen = function(s) {
    var cnt = 0;

    for(var i = s.length-1;i>=0;i--)
    {
        if(s[i]==' ')
        {
            if(cnt>0)
            {
                return cnt;    
            }
            continue;
        }

        cnt+=1;
    }
    return cnt;
};
