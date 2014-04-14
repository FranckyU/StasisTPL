(function() {
  $(function() {
    return $("#lnk").click(function(e) {
      $("h1.big-title").append(" again");
      return false;
    });
  });

}).call(this);
