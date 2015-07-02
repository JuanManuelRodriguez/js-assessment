exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var promise = $.Deferred();

    setTimeout(function(){
      promise.resolve(value);
    },1000);

    return promise;
  },

  manipulateRemoteData : function(url) {
    var promise = $.Deferred();
    $.get(url).done(function(data){
      var arr = data.people,
          result = [];
      arr.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      for (i=0; i < arr.length; i++){
        result[i] = arr[i].name;
      };
      promise.resolve(result);
    });
    return promise;
  }
};