$(document).ready(function(){
  $(".button").click(render);
});

const render = () => {
  var code = $(".code").text();
  $(".result").html(code);
}