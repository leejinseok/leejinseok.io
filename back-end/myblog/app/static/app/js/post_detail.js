/**
 * 
 * @param {*} id 
 */
function removePost (id) {
    var url = $('[name=url]').val();
    var data = {
        id: id
    };

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
