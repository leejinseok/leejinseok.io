$(document).ready(function () {
  handleMediumEditor();
})

function handleMediumEditor () {
  var options = {
      placeholder: {
        text: '내용을 입력해주세요.',
        hideOnClick: true
    }
  }
  var editor = new MediumEditor('.editable', options);
}

