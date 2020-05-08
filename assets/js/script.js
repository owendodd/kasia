$(document).ready(function () {
  wrapChars();
  // resize();
  changeColor();
  imageExpander();

  // function resize() {
  //   var size = ["380px", "340px", "250px", "310px", "400px"];

  //   $("img").each(function () {
  //     $(this).css({
  //       height: size[Math.floor(Math.random() * size.length)],
  //     });
  //   });
  // }

  function wrapChars() {
    var letter = $("a, span, h1, .foot").contents();

    letter.each(function () {
      if (this.nodeType == 3) {
        var $this = $(this);
        $this.replaceWith($this.text().replace(/(\S)/g, "<letter>$&</letter>"));
      }
    });
  }

  function changeColor() {
    var colors = [
      "#177308",
      "#177308",
      "#4D6749",
      "#498C20",
      "#146D06",
    ]

    var colorsTwo = [
      "#F2AA3C",
      "#739B80",
      "#DFA2B9",
      "#B83D35",
      "#152E73",
      "#593434",
    ];

    var colorsThree = [
      "#A07272",
      "#738BCD",
      "#F87970",
      "#F0AEC7",
      "#93C3A3",
      "#FDCD84",
    ];

    var colorsFour = [
      "#279CF1",
      "#5386D2",
      "#6DAAD6",
      "#4C8AE7"
    ];

    $("letter").each(function () {
      $(this).css({
        transition: "color 500ms ease-in-out",
        color: colorsFour[Math.floor(Math.random() * colorsFour.length)],
      });
    });
  }

  var myVar = setInterval(changeColor, 1000);

  function imageExpander() {
    var img = $(".img-wrap"),
        bg = $("p, .img-wrap img, h1, body, ul");

    img.click(function () {
      bg.toggleClass("fade");
      $(this).toggleClass("expanded");
    });
  };
});
