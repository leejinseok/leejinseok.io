function submitFrm (frm) {
  var id = frm.id;
  var password = frm.password;

  if (!id.value.length) {
    id.focus();
    alert('아이디를 입력해주세요');
    return false;
  }

  if (!password.value.length) {
    password.focus();
    alert('패스워드를 입력해주세요.');
    return false;
  }

}