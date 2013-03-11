describe("Iframe js", function() {
  var $DOM;
  beforeEach(function() {
    $DOM = $("#jasmine_content");
    var form = '<form id="form" method="GET" action="examples/response.html"><input id="form-input" name="form-input" type="text"></form>';
    $DOM.html("");
    $DOM.append(form);
    expect($DOM.html()).toEqual(form)
  });

  it("should submit the form in the iframe", function() {
    var called = false;
    var $callback = function(response){
      expect(response).toEqual("success!!!")
      called = true;
    };
    $DOM.find("#form").iframeSubmit($callback);
    runs(function() {
      $DOM.find("#form").submit();
      expect($DOM.find('iframe').length).toEqual(1);
    })
    waitsFor(function() {
      return called = true;
    })
    expect($DOM.find('iframe').length).toEqual(0);

  });

});