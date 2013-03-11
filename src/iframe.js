jQuery.fn.iframeSubmit = function(callback) {
  var self = this;
  self.submit(function(e) {
    e.preventDefault();
    var iframe = $("<iframe id='iframejs-frame' style='display: none;'></iframe>");
    var form = self.parent().html();

    self.parent().append(iframe);
    $('#iframejs-frame').contents().find('html').html(form);
    self.find("input").each(function(index, input) {
      $('#iframejs-frame').contents().find('#' + $(input).attr('id')).val($(input).val());
    });
    $('#iframejs-frame').contents().find('form').attr("action", self.attr('action'));
    $('#iframejs-frame').contents().find('form').attr("method", self.attr('method'));

    $('#iframejs-frame').contents().find('form').submit();

    window.addEventListener('message', function(e) {
      callback(e.data);
    }, false);
    return false;
  });
};