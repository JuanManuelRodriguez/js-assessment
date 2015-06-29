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
    
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
