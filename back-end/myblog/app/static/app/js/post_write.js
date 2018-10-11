app.controller('mainCtrl', function ($scope) {
  // @todo
});

$(document).ready(function () {
  handleMediumEditor();
  handleSubmitForm();
});

/**
 * handleSubmitForm
 * @return {void}
 */
function handleSubmitForm () {
  var frm = $('#frm');

  frm.submit(function () {
    var data = objectToQueryString({
      csrfmiddlewaretoken: frm.find('[name=csrfmiddlewaretoken]').val(),
      title: frm.find('[name=title]').val(),
      content: editor.getContent(),
    });

    var type = $(this).attr('method');
    var url = $(this).attr('action');
    $.ajax({
      url: url, 
      data: data,
      type: type, 
    }).done(function (response) {
      console.log(response);
    }).fail(function (err) {
      console.error(err);
    });
    return false;
  });
}

var editor;
/**
 * handleMediumEditor
 * @return {void}
 */
function handleMediumEditor () {
  var options = {
      placeholder: {
        text: '내용을 입력해주세요.',
        hideOnClick: true
    }
  }
  editor = new MediumEditor('.editable', options);
}

