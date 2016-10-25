$(document).ready(function(){
  render();

  $('.code').bind('DOMSubtreeModified', function() {
    if ($("#toggle").prop('checked') == true) {
    	render()
    }
  });
});

const render = () => {
  var code = marked($(".code").text());
  $(".result").html(code);
}
