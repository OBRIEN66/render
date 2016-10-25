$(document).ready(function(){
  render();
  
  $(".button").click(render);

  $('.code').bind('DOMSubtreeModified', function() {
    
    if ($("#toggle").prop('checked') == true) {
    	render()
    }
  });
});

const render = () => {
  var code = $(".code").text();
  $(".result").html(code);
}