var css = `
  #wrapper {
    margin: 50px auto;
    width: 400px;
  }
  #editor {
    color: #555;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 6px 12px;
 }
  #bold-button {
    font-weight: 900;
  }
  #italic-button {
    font-style: italic;
    font-family: serif;
  }
  #underline-button {
    text-decoration: underline;
  }`;

var editor = `
  <div id="wrapper"> 
    <div class="btn-group" role="group" aria-label="...">
      <button id="bold-button" type="button" class="btn btn-default" onClick="activateStyle('bold')">B</button>
      <button id="italic-button" type="button" class="btn btn-default" onClick="activateStyle('italic')">I</button>
      <button id="underline-button" type="button" class="btn btn-default" onClick="activateStyle('underline')">U</button>
      <button id="" type="button" class="btn btn-default" onClick="activateStyle('insertUnorderedList')">Bullet</button>
      <button id="" type="button" class="btn btn-default" onClick="activateStyle('createLink')">Link</button>
    </div>
    <br><br>
    <div id="editor" contenteditable>Edit me!</div>
  </div>`;

function activateStyle(style) {
  jQuery('#editor').focus();
  if (!document.queryCommandEnabled(style)) {
    console.log('Style does not exist')
    return;
  }
  document.execCommand(style, false, null);
}
