jQuery.fn.iframeSubmit = function(callback) {
  var self = this;
  self.submit(function(e) {
    console.info("Submit", e)
    e.preventDefault();
    var iframe = $("<iframe id='iframejs-frame' style='display: none;'></iframe>");
    var form = self.parent().html();

    self.parent().append(iframe);
    $('#iframejs-frame').contents().find('html').html(form);
    self.find("input").each(function(index, input) {
      $('#iframejs-frame').contents().find('#' + $(input).attr('id')).val($(input).val());
    });
    $('#iframejs-frame').contents().find('form').attr("action", 'examples/response.html');
    $('#iframejs-frame').contents().find('form').attr("method", 'GET');


//    $('#iframejs-frame').contents().find('form').attr("action", 'https://core.spreedly.com/v1/payment_methods');
//    $('#iframejs-frame').contents().find('form').attr("method", 'POST');
//    $('#iframejs-frame').contents().find('form').append('<input name="redirect_url" type="hidden" value="http://local.milyoni.net:3000/response" />');
    $('#iframejs-frame').contents().find('form').submit();

//    callback("Success!!!");

    window.addEventListener('message', function(e) {
      console.info("Callback :D", e);
      callback(e.data)
    }, false);
    return false;
  });
};

