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
    var data = {
      csrfmiddlewaretoken: frm.find('[name=csrfmiddlewaretoken]').val(),
      title: frm.find('[name=title]').val(),
      content: editor.getContent(),
      category: frm.find('[name=category]').val()
    };

    if (!data.title) {
      alert('제목을 입력해주세요.');
      frm.find('[name=title]').val('').focus();
      return false;
    }

    if (!data.content) {
      alert('본문내용을 입력해주세요.');
      return false;
    }

    if (!data.category) {
      alert('카테고리를 선택해주세요.');
      frm.find('[name=category]').focus();
      return false;
    }

    if (!confirm('정말 글을 게시하시겠습니까?')) return;

    var type = $(this).attr('method');
    var url = $(this).attr('action');
    $.ajax({
      url: url, 
      data: data,
      type: type, 
    }).done(function (response) {
      if (response.status === 'success') {
        window.location.href = '/app/posts';
        return;
      }

      alert('데이터를 처리하지 못하였습니다.');
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

