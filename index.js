var recipes = new Object();

function updateObjectWithKeyAndValue(obj, key, value){
  var newObj = Object.assign({}, obj, obj[key] = value);
};
