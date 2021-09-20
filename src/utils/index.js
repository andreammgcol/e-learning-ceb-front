export function isNumeric(num){
  return !isNaN(num)
}

function addZero(x, n) {
  while (x.toString().length < n) {
    x = "0" + x;
  }
  return x;
}

export function myDate() {
  var d = new Date();
  var h = addZero(d.getHours(), 2);
  var m = addZero(d.getMinutes(), 2);
  var s = addZero(d.getSeconds(), 2);
  var ms = addZero(d.getMilliseconds(), 3);
  return ("(" + h + ":" + m + ":" + s + ":" + ms + ")");
}

export function selectWhereInEx() {
  var filtersArray = ["cat1", "cat3", "cat5"];
  var workItems = [
    { "id": 2616, "category": "cat1" }, // this 
    { "id": 1505, "category": "cat2" }, // not
    { "id": 1500, "category": "cat3" }, // this
    { "id": 692, "category": "cat2" }, // not
    { "id": 593, "category": "cat2" }, // not
    { "id": 636, "category": "cat2" }, // not
    { "id": 547, "category": "cat3" }, // this
    { "id": 588, "category": "cat1" }, // this
    { "id": 590, "category": "cat5" }  // this
  ];
  var filtered = workItems.filter(function (element) {
    var cat = element.category;
    return filtersArray.indexOf(cat) > -1; // si cumple condicion retorna element
  });
  console.log('filtered:');
  console.log(filtered);
}


export function sortFunction(a, b) {
  var dateA = new Date(a.date).getTime();
  var dateB = new Date(b.date).getTime();
  return dateA > dateB ? 1 : -1; // asc (>), desc (<).
}
