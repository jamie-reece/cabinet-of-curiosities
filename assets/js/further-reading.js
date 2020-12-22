function floatReadingList() {
  var collection = document.getElementById('contentBody');
  var arr = Array.prototype.slice.call(collection.children);
  var el = document.getElementById('further-reading');
  el.className = "title"
  var elIndex = arr.indexOf(el);
  var elEnd = document.getElementById('fn:1');
  var endIndex = arr.indexOf(elEnd);
  var furtherReading = new Array();
  for (i = elIndex; i < arr.length; i++) {
    furtherReading.push(arr[i]);
  }
  var pop = furtherReading.pop();
  listContainer = document.createElement('div')
  listContainer.className = "p-6"
  for (i = 0; i < furtherReading.length; ++i) {
    // Add listItem to the listElement
    listContainer.appendChild(furtherReading[i]);
  }
  listParent = document.createElement('div');
  listParent.className = "further-reading column has-background-light";
  listParent.appendChild(listContainer);
  document.getElementsByTagName('article')[0].appendChild(listParent);
}

document.onload = floatReadingList();
