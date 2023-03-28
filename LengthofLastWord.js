/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s){
    let max = 0;
   x = s.trim();

   for (let i = 0; i < x.length; i++){
       if (x[i] ==' '){
           max = 0;
       }
       else {
           max++;
       }
   }
   return max;
};