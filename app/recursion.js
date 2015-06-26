exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    console.log(data.files);
    console.log(data.files[1].files);
    var arr=[];

    for (var i=0; i < data.files.length; i++){
      if ((typeof data.files[i]) === "string"){
        console.log(data.files[i]);
        return data.files[i];
      }
      else {
        //TODO: recursion
        listFiles (data.files,dirName);
      };
    };
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
