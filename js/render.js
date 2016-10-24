$(document).ready(function(){
  $(".button").click(function() {
    var code = $(".code").text();
    $(".result").html(code);
  });
});
