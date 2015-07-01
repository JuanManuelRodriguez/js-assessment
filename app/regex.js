exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var reg = /\d+/g;
    return reg.test(str);
  },

  containsRepeatingLetter : function(str) {
    var reg = /([A-Za-z])\1+/g;
    return reg.test(str);
  },

  endsWithVowel : function(str) {
    var reg = /[AEIOUaeiou]$/g;
    return  reg.test(str);
  },

  captureThreeNumbers : function(str) {
    var reg = /\d{3}/g;
    var result = str.match(reg);

    if (result){return result[0]};
    return false;
  },

  matchesPattern : function(str) {
    var reg = /^\d{3}-\d{3}-\d{4}$/g;
    return  reg.test(str);
  },
  isUSD : function(str) {
    var reg = /^\$\d+(,\d{3})*(\.\d{2})?$/g;
    console.log(str.match(reg));
    return reg.test(str);
  }
};
