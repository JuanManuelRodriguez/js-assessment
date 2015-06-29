exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var arrOfFiles=[];
    var dirs=[];

    function proccessDir(dir){
      var i,len,file;
      var files = dir.files;

      dirs.push(dir.dir);

      for (i=0, len= files.length; i < len; i++){
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1 ) {
            arrOfFiles.push(files[i]);
          }
        }
        else {
           proccessDir(files[i]);
        };
      };
      dirs.pop();// cuando termina de agreegar los archivos de la dir y subdir de 'js', saca los dirName
      // del arreglo para que no guarde los proximos archivos en la lista de archivos, ya que el dirName 'js'
      // no estara en el arreglo y no pasara el IF (dirs.indexof(dirName)>-1)
    };

    proccessDir(data);

    return arrOfFiles;
  },

  permute: function(arr) {
    var arrResult = [], arrTemp = [];

    function permuteAnswer(a){
      var i,len,item;
      for (i=0,len= a.length; i < len;i++){
        item = a.splice(i,1)[0];
        arrTemp.push(item);
        if (a.length){
          permuteAnswer(a);
        }
        else{
          showResult();
        };
        arr.splice(i,0,item);
        arrTemp.pop();
      };
      return arrResult;
    };
    function showResult(){
      arrResult.push(arrTemp.slice());
    };
    return (permuteAnswer(arr));
  },

  fibonacci: function(n) {
    var first = 0, second = 1, sum = 0;
    function fib(num){
      if (num > 1){
        sum = first + second;
        first = second;
        second= sum;
        fib(num-1);
      }
      else{return sum};
      return sum;
    };
    return (fib(n));
  },

  validParentheses: function(n) {

  }
};
