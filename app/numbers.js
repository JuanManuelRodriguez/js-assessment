exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var selectBit = '',
        result = 0;
    result = num.toString(2);
    selectBit = Number(result.charAt(result.length - bit));
    return selectBit;
  },

  base10: function(str) {
    var numConvert = parseInt(Number(str),2).toString(10);
    return Number(numConvert);
  },

  convertToBinary: function(num) {
    var strNum = num.toString(2),
        digits = 8;
    function pad (str,max) {
      str.toString();
      return str.length < max ? pad("0" + str, max) : str;
    };
    return pad(strNum,digits);
  },

  multiply: function(a, b) {
    var precisionNumber = (a*b).toPrecision(b.toString().length-2);
    console.log(b.toString().length);
    return Number(precisionNumber);
  }
};
