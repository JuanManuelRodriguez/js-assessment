exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.apply(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var arr=[];
    for (var name in obj){
      if (obj.hasOwnProperty(name)){
        arr.push(name +': '+obj[name]);
      };
    };
    console.log(arr);
    return arr;
  }
};
