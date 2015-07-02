exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var res = 0;
    for (i=0; i < arr.length; i++){
      res+=arr[i]
    };
    return res;
  },

  remove : function(arr, item) {
    //supongo que la forma que pedian para borrar era hacer un arreglo auxiliar y pasar todos los elementos excepto los que se quiere borrrar
    var idItem = arr.indexOf(item);
    while (idItem != -1){
      arr.splice(idItem,1);
      idItem = arr.indexOf(item);
    };

    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    var idItem = arr.indexOf(item);
    while (idItem != -1){
      arr.splice(idItem,1);
      idItem = arr.indexOf(item);
    };

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0,0,item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    var newArray = arr1.concat(arr2);
    return newArray;
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count : function(arr, item) {
    var occurs= 0;
    for (i=0; i < arr.length; i++){
      if (arr[i] === item){
        occurs++;
      };
    };

    return occurs;
  },

  duplicates : function(arr) {
    var count = 0,
        arrDuplicate = [];
    arr.sort();
    for (i=1; i < arr.length; i++){
      if (arr[i-1] === arr[i]){
        count++;
      }
      else if (count !== 0){
        arrDuplicate.push(arr[i-1]);
        count = 0;
      };
    };
    return arrDuplicate;
  },

  square : function(arr) {
    function valueSquare (element,index,array){
      array[index] *= array[index];
    };
    arr.forEach(valueSquare);
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var idTarget = arr.indexOf(target),
        indices = [];
    while (idTarget != -1){
      indices.push(idTarget);
      idTarget = arr.indexOf(target,idTarget +1);
    };

    return indices;
  }
};