/**
 * 
 * @param {*} id 
 */
function removePost () {
    var url = $('[name=url]').val();
    if (!confirm('정말 해당 게시글을 삭제하시겠습니까?')) return;

    $.ajax({
        url: url,
        type: 'delete',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));
        }
    }).done(function (response) {
        if (response.status === 'success') {
            window.location.href = '/app/posts';
        }        

        if (response.msg === 'something failed') {
            alert('정상적으로 처리하지 못하였습니다.');
        }
    }).fail(function (err) {
        console.error(err);
    });

    return false;
}
