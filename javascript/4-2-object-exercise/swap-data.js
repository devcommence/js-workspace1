const values = { a: 1, b: 2 }
function swap(json){
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
  }
console.log(swap(values))