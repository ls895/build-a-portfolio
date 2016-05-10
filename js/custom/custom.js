// Javascript for gallery image enlarge/ shrink function
// Usage: click the image to enlarge, click elsewhere on the page to shrink
var isEnlarged = false;
var whichDummy;
// Functions to be run when image is clicked
$(".dummy").click(
  function(event) {
    event.stopPropagation();
    // Stop the click function when there is ongoing animation or any image is enlarged
    if ($(this).siblings().is(':animated')) {
      return;
    };
    if (isEnlarged) {
      return;
    }
    isEnlarged = true;
    whichDummy = $(this).attr("id");
    // Set absolute positioning to achieve the enlarge effect
    var h = this.parentElement.offsetHeight;
    var w = this.parentElement.offsetWidth;
    var resh = h.toString().concat("px");
    var resw = w.toString().concat("px");
    $(this).parent().css({
      "height": resh,
      "width": resw,
      "position": "relative",
    });
    var children = this.parentElement.children;
    for (var i = 0; i < children.length; i++) {
      $('#' + children[i].id).css(
        "position", "absolute"
      );
      if (i == 0) {
        $('#' + children[i].id).css({
          "top": "0",
          "left": "0"
        });
      }
      if (i == 1) {
        $('#' + children[i].id).css({
          "top": "0",
          "right": "0"
        });
      }
      if (i == 2) {
        $('#' + children[i].id).css({
          "bottom": "0",
          "left": "0"
        });
      }
      if (i == 3) {
        $('#' + children[i].id).css({
          "bottom": "0",
          "right": "0"
        });
      }
    }
    // Reset z-index so the enlarged image covers the others
    var indexHighest = 0;
    $(".dummy").each(function() {
    var indexCurrent = parseInt($(this).css("zIndex"), 10);
      if(indexCurrent > indexHighest) {
        indexHighest = indexCurrent;
      }
    });
    $(this).css(
      "z-index", indexHighest + 1
    );
    // Run the enlarge animation, reset default positioning after animation to regain responsiveness
    $(this).animate(
      {width: "100%"}, function() {
        var children = this.parentElement.children;
        $(this).css(
          "position", ""
        );
        for (var i = 0; i < children.length; i++) {
          if (!(children[i].id === $(this).attr("id"))) {
            $('#' + children[i].id).css({
              "position": "",
              "display": "none"
            });
          }
        }
        $(this).parent().css({
          "height": "",
          "width": "",
          "position": "",
        });
      }
    );
  }
);
// Functions to be run when anywhere else on the page is clicked
$('html').click(function(event) {
  // Stop the click function if there is ongoing animation
  if ($(".dummy").is(':animated')) {
    return;
  };
  // Continue if there is any enlarged image
  if (isEnlarged) {
    // Check user agent to prevent a jump to top of page bug when viewing on mobile
    var isMobile = false;
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
    // Set absolute positioning
    var h = document.getElementById(whichDummy).parentElement.offsetHeight;
    var w = document.getElementById(whichDummy).parentElement.offsetWidth;
    var resh = h.toString().concat("px");
    var resw = w.toString().concat("px");
    $("#" + whichDummy).parent().css({
      "height": resh,
      "width": resw,
      "position": "relative",
    });
    if (isMobile) {
      $("#" + whichDummy).parent().css(
        "overflow", "auto"
      );
    }
    var children = document.getElementById(whichDummy).parentElement.children;
    for (var i = 0; i < children.length; i++) {
      $('#' + children[i].id).css(
        "position", "absolute"
      );
      if (i == 0) {
        $('#' + children[i].id).css({
          "top": "0",
          "left": "0",
          "display": ""
        });
      }
      if (i == 1) {
        $('#' + children[i].id).css({
          "top": "0",
          "right": "0",
          "display": ""
        });
      }
      if (i == 2) {
        $('#' + children[i].id).css({
          "bottom": "0",
          "left": "0",
          "display": ""
        });
      }
      if (i == 3) {
        $('#' + children[i].id).css({
          "bottom": "0",
          "right": "0",
          "display": ""
        });
      }
    }
    // Run the animation, set default positioning after animation completes
    $("#" + whichDummy).animate(
      {width: "50%"}, function() {
        isEnlarged = false;
        var children = document.getElementById(whichDummy).parentElement.children;
        for (var i = 0; i < children.length; i++) {
          $('#' + children[i].id).css({
            "position": "",
            "display": ""
          });
        }
        $("#" + whichDummy).parent().css({
          "height": "",
          "width": "",
          "position": "",
          "overflow": ""
        });
      }
    );
  } else {
  }
  }
);
