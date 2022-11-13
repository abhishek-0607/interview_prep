$(document).ready(function () {
  console.log("docs is ready");
  console.log($);
  // jQuery Syntax look like this
  // $("selector").action()

  //   $("p").click(function () {
  //     //click on p tag
  //     console.log("clicked on p");
  //     $(this).hide();
  //   });

  //   $("p").on("click", function () {
  //     console.log("clicked by me", this);
  //   });
  $("p").on({
    click: function () {
      console.log("clicked by me", this);
    },
    mouseleave: function () {
      console.log("mouseleave is done");
    },
  });

  //   $("#wiki").hide(1000, function () {
  //     console.log("hidden");
  //   });
  //   $("#wiki").show(1000, function () {
  //     console.log("showen");
  //   });

  $("#toggle").click(function () {
    $("#wiki").fadeOut(1000);
  });
});

// there are many types of selectors in jquery
// => element, id and class
// Mouse = click, dblclick, mouseenter, mouseleave
// keyboard events = keypress, keydown, MediaKeyStatusMap
// form events =
