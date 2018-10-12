/**
 * 
 * @param {*} id 
 */
function removePost (id) {
    var url = $('[name=url]').val();
    var data = {
        id: id
    };

    if (!confirm('정말 해당 게시글을 삭제하시겠습니까?')) return;

    $.ajax({
        url: url + id,
        type: 'delete',
        data: data,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));
        }
    }).done(function (response) {
        console.log(response);
    }).fail(function (err) {
        console.error(err);
    });
}
