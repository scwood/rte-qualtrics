var express = require('express');
var htmlDocx = require('html-docx-js');
var fs = require('fs');

var app = express();

app.use(express.static('public'))

app.get('/comments', function (req, res, next) {

  // TODO
  // Get comments for specific person with response engine
  // For now just using the testContent variable

  var testContent = '<b>This is bold</b><div><b><br></b></div><div><b><u>' +
    'Bold AND underline</u></b></div><div><b><u><br></u></b></div><div>' +
    '<ul><li>A list of stuff</li><li>More stuff</li></ul>';
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
