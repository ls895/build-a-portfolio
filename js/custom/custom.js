var isEnlarged;
$(".dummy").hover(

  function() {
      console.log("step 1");
    if ($(this).siblings().is(':animated')) {
      isEnlarged = false;
      console.log(isEnlarged);
      return;
    };
    isEnlarged = true;
    var h = this.parentElement.offsetHeight;
    var w = this.parentElement.offsetWidth;
    var resh = h.toString().concat("px");
    var resw = w.toString().concat("px");
    $(this).parent().css({
      "height": resh,
      "width": resw,
      "position": "relative",
    });
    // this.parentElement.style.height=(resh);
    // this.parentElement.style.width=(resw);
    // this.parentElement.style.position="relative";
    // this.parentElement.style.overflow="hidden";
    var children = this.parentElement.children;
    for (var i = 0; i < children.length; i++) {
      // children[i].style.position="absolute";
      $('#' + children[i].id).css(
        "position", "absolute"
      );
      if (i == 0) {
        // children[i].style.top="0";
        // children[i].style.left="0";
        $('#' + children[i].id).css({
          "top": "0",
          "left": "0"
        });
      }
      if (i == 1) {
        // children[i].style.top="0";
        // children[i].style.right="0";
        $('#' + children[i].id).css({
          "top": "0",
          "right": "0"
        });
      }
      if (i == 2) {
        // children[i].style.bottom="0";
        // children[i].style.left="0";
        $('#' + children[i].id).css({
          "bottom": "0",
          "left": "0"
        });
      }
      if (i == 3) {
        // children[i].style.bottom="0";
        // children[i].style.right="0";
        $('#' + children[i].id).css({
          "bottom": "0",
          "right": "0"
        });
      }
    }
    // this.style.zIndex = 1;
    // var zin;
    // zin = this.previousSibling.style.zIndex;
    // $(this).css(
    //   "z-index", "1"
    // );
    $(this).filter(':not(:animated)').animate(
      {width: "100%"}, function() {
        // isEnlarged = true;
      }
    // , {complete:
      // function() {
        // this.style.position="initial";
        // for (var i = 0; i < children.length; i++) {
        //   if (!(children[i] === this)) {
        //     children[i].style.display="none";
        //     children[i].style.position="initial";
        //   }
        // }
        // this.parentElement.style.overflow="initial";
        // this.parentElement.style.position="initial";
        // this.parentElement.style.height="initial";
        // this.parentElement.style.width="initial";
      // }
    // }
    );
    // $(this).siblings().stop(true,true).animate({width: "50%"});
  },
  function() {
    console.log("step 2");
    if (isEnlarged === false) {
      return;
    }
    $(this).animate(
      {width: "50%"}, function() {
        // var children = this.parentElement.children;
        // for (var i = 0; i < children.length; i++) {
        //   $('#' + children[i].id).css(
        //     "position", ""
        //   );
        // }
        // $(this).parent().css({
        //   "height": "",
        //   "width": "",
        //   "position": "",
        // });
      }
    );
  }
);
// function enlarge(id) {
//   test = false;
//   var h = id.parentElement.offsetHeight;
//   var w = id.parentElement.offsetWidth;
//   var resh = h.toString().concat("px");
//   var resw = w.toString().concat("px");
//   id.parentElement.style.height=(resh);
//   id.parentElement.style.width=(resw);
//   id.parentElement.style.position="relative";
//   id.parentElement.style.overflow="hidden";
//   var children = id.parentElement.children;
//   for (var i = 0; i < children.length; i++) {
//     children[i].style.position="absolute";
//     if (i == 0) {
//       children[i].style.top="0";
//       children[i].style.left="0";
//     }
//     if (i == 1) {
//       children[i].style.top="0";
//       children[i].style.right="0";
//     }
//     if (i == 2) {
//       children[i].style.bottom="0";
//       children[i].style.left="0";
//     }
//     if (i == 3) {
//       children[i].style.bottom="0";
//       children[i].style.right="0";
//     }
//   }
//   id.style.zIndex = 1;
//   $(id).animate(
//   {width: "100%"}, {queue: false, duration: 1000, complete:
//     function() {
//       id.style.position="initial";
//       for (var i = 0; i < children.length; i++) {
//         if (!(children[i] === id)) {
//           children[i].style.display="none";
//           children[i].style.position="initial";
//         }
//       }
//       id.parentElement.style.overflow="initial";
//       id.parentElement.style.position="initial";
//       id.parentElement.style.height="initial";
//       id.parentElement.style.width="initial";
//       test = true;
//       alert(test);
//     }
//   });
// }
//
// function reset(id) {
//   while (test == false) {
//
//   }
//   var h = id.parentElement.offsetHeight;
//   var w = id.parentElement.offsetWidth;
//   var resh = h.toString().concat("px");
//   var resw = w.toString().concat("px");
//   id.parentElement.style.height=(resh);
//   id.parentElement.style.width=(resw);
//   id.parentElement.style.position="relative";
//   id.parentElement.style.overflow="hidden";
//   var children = id.parentElement.children;
//   for (var i = 0; i < children.length; i++) {
//     children[i].style.position="absolute";
//     if (i == 0) {
//       children[i].style.top="0";
//       children[i].style.left="0";
//     }
//     if (i == 1) {
//       children[i].style.top="0";
//       children[i].style.right="0";
//     }
//     if (i == 2) {
//       children[i].style.bottom="0";
//       children[i].style.left="0";
//     }
//     if (i == 3) {
//       children[i].style.bottom="0";
//       children[i].style.right="0";
//     }
//     children[i].style.display="initial";
//   }
//   $(id).animate(
//   {width: "50%"}, {duration: 1000, complete:
//     function() {
//       id.style.zIndex="initial";
//       for (var i = 0; i < children.length; i++) {
//         children[i].style.position="initial";
//       }
//       id.parentElement.style.overflow="initial";
//       id.parentElement.style.position="initial";
//       id.parentElement.style.height="initial";
//       id.parentElement.style.width="initial";
//     }
//   });
// }
