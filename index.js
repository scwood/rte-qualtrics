var express = require('express');
var htmlDocx = require('html-docx-js');

var app = express();

app.use(express.static('public'))
app.get('/comments', function (req, res, next) {

  // TODO
  // Get comments for specific person with response engine. For now it just
  // uses the testContent variable which was generated using the RTE custom
  // question

  var testContent = '<b>This is bold.</b><div><b><u>This is bold AND underlined' +
    '</u></b></div><div><ul><li>A list of stuff</li><li>More stuff</li></ul>' +
    '<div><a href="http://google.com">A link to google.com.</a></div></div>';
  var docx = htmlDocx.asBlob(testContent);
  res.header(
    'Content-type',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  res.header('Content-disposition', 'inline; filename=comments.docx');
  res.send(docx);
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Listening on port ' + port);
});
