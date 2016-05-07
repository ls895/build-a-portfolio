function enlarge(id) {
  var h = id.parentElement.offsetHeight;
  var w = id.parentElement.offsetWidth;
  var resh = h.toString().concat("px");
  var resw = w.toString().concat("px");
  id.parentElement.style.height=(resh);
  id.parentElement.style.width=(resw);
  id.parentElement.style.overflow="hidden";
  var children = id.parentElement.children;
  var result = 0;
  for ( var i = 0; i < children.length; i++ ) {
    if ( children[i] === id ) {
      result = i;
    }
  }
  var answer = 0;
  var a, b, c;
  for ( var i = 0; i < children.length; i++ ) {
    if ( i !== result) {
      if ( answer == 0) {
        a = i;
        answer = answer + 1;
      } else if ( answer == 1) {
        b = i;
        answer = answer + 1;
      } else if ( answer == 2) {
        c = i;
      }
    }
  }
  $(id).animate({width: "100%"}, {duration: 100, queue: false});
  $(children[a]).animate({width: "0%"}, {duration: 100, queue: false});
  $(children[b]).animate({width: "0%"}, {duration: 100, queue: false});
  $(children[c]).animate({width: "0%"}, {duration: 100, queue: false});
}







// function reset(id) {
//   id.parentElement.style.position="static";
//   id.style.width="50%";
//   id.style.position="static";
// }
