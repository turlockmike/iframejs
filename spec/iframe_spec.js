describe("Iframe js", function() {
  var $DOM;
  beforeEach(function() {
    $DOM = $("#jasmine_content");
    var form = '<form id="form"><input id="form-input" name="form-input" type="text"></form>';
    $DOM.html("");
    $DOM.append(form);
    expect($DOM.html()).toEqual(form)
  });

  var responseFixture = 'Success<script type="text/javascript">function() {console.info("about to post message");window.postMessage("success :D","localhost");}</script>';

  afterEach(function() {
  })
  it("should submit the form in the iframe", function() {
    var $callback = jasmine.createSpy();
    $DOM.find("#form").iframeSubmit($callback);
    waits(100);
    $DOM.find("#form").submit();
//    waits(100);
    //Pretend the iframe was submitted

    $DOM.find("iframe").contents().find("html").html(responseFixture);
    waits(200);
    expect($callback).toHaveBeenCalledWith("Success!!!")
  });

});