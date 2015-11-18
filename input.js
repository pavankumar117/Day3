var dee = document.getElementById('mytable');
console.log("hello");
var a = 4;
var b = 2;
console.log(a +" "+b);
var tab = document.createElement("table");
for(var i=0;i<a;i++) {
  var row = document.createElement('tr');
  for(var j=0;j<b;j++) {
    var col = document.createElement('td');
    var colText = document.createElement('column'i+1);
    col.appendChild(colText);
    row.appendChild(col);
  }
  tab.appendChild(row);
}
dee.appendChild(tab);
