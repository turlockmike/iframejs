iframejs
========

A jquery plugin for submitting forms via an iframe and then getting a response back via postMessage

If the response is a parseable json string it will be parsed into json, otherwise it will return the entire body as the response.



Example usage

// Example Response
<html>
<head>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript">
$(function() {
window.postMessage(
                $(document.body).html(),
                "http://localhost"
        );

})
</script>
</head>
<body>
{payment: 'success'}
</body>
</html>




$("form").iframeSubmit(function(response) {
  console.log("response", response);
});

