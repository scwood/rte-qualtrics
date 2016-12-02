var qualtricsId = null;

window.connectEditor = function (_qualtricsId) {
  qualtricsId = _qualtricsId.replace(/~/g, '\\~');
  jQuery(qualtricsId).hide();
}

jQuery(document).ready(function () {

  function activateStyle(style, element) {
    var rte = jQuery(element).closest('.rte').find('.rte-input');
    rte.focus();
    if (!document.queryCommandEnabled(style)) {
      return;
    }
    document.execCommand(style, false, null);
  }

  function createLink(element) {
    var url = jQuery(element).closest('.rte').find('input');
    var rte = jQuery(element).closest('.rte').find('.rte-input');
    rte.focus();
    if (url.val() === '') {
      return;
    }
    document.execCommand('createLink', null, url.val());
    url.val('');
  }

  jQuery('.rte-input').keyup(function (e) {
    if (e.keyCode === Event.KEY_RETURN) {
      e.stopPropagation();
      document.execCommand('insertText', false, '\n');
    }
  });

  jQuery('.bold-button').on('click', function () {
    activateStyle('bold', this)
  });

  jQuery('.italic-button').on('click', function () {
    activateStyle('italic', this)
  });

  jQuery('.underline-button').on('click', function () {
    activateStyle('underline', this)
  });

  jQuery('.list-button').on('click', function () {
    activateStyle('insertUnorderedList', this)
  });

  jQuery('.link-button').on('click', function () {
    activateStyle()
  });

});

