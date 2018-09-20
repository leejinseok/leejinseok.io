function submitFrm (frm) {
  var username = frm.username;
  var password = frm.password;

  if (!username.value.length) {
    username.focus();
    alert('아이디를 입력해주세요');
    return false;
  }

  if (!password.value.length) {
    password.focus();
    alert('패스워드를 입력해주세요.');
    return false;
  }
}