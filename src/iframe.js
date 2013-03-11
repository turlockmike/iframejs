jQuery.fn.iframeSubmit = function(callback) {
  var self = this;
  self.submit(function(e) {
    e.preventDefault();
    var iframe = $("<iframe style='display: none;'></iframe>");
    var form = self.parent().html();

    self.parent().append(iframe);
    iframe.contents().find('html').html(form);
    self.find("input").each(function(index, input) {
      iframe.contents().find('#' + $(input).attr('id')).val($(input).val());
    });
    iframe.contents().find('form').attr("action", self.attr('action'));
    iframe.contents().find('form').attr("method", self.attr('method'));

    iframe.contents().find('form').submit();

    window.addEventListener('message', function(e) {
      callback(e.data);
      iframe.remove();
    }, false);
    return false;
  });
};