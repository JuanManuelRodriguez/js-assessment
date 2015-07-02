exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var i = start;
    console.log(i);
    var testing= function(){
        if (i < end){
          i++;
          console.log(i);
        }
        else{
          clearInterval(ticker);
        };
    };
    var ticker = setInterval(testing,100);
    return {
      cancel: function(){
        clearInterval(ticker)
      }
    };

  }
};
