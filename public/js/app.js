const viewAll = function () {
    $.ajax({
        url: '/api/high5s',
        method: 'GET'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let data = response[i];
            let title = data.title;
            let message = data.message;
            let sender = data.sender;
            let receiver = data.receiver;

            console.log(data)
            $("#high5cards").append(
                `<div class="card border-primary">
                <div class="card-header text-center">${title}</div>
                <div class="card-body text-primary">
                    <h6 class="card-title text-center">To: ${receiver}</h6>
                    <p class="card-text text-center">${message}</p>
                    <h6 class="card-title text-center">From: ${sender}</h6>
                </div>
            </div>
            <br>`
            )
        }
    })
}

$('#submitButton').on('click', function (event) {
    event.preventDefault();
    $.ajax({
        url: '/api/high5s',
        method: 'POST',
        data: {
            title: $('#titleInput').val(),
            message: $('#messageInput').val(),
            sender: $('#sender').val(),
            receiver: $('#receiver').val()
        }

    }).then(function (response) {
        $('#high5cards').empty();
        $('#titleInput').val('');
        $('#messageInput').val('');
        $('#sender').val('');
        $('#receiver').val('');
        viewAll();
    })
})

const userList = function () {
    $.ajax({
        url: '/api/users',
        method: 'GET'
    }).then(function (response) {
        $('#receiver').empty();
        for (let i = 0; i < response.length; i++) {
            let data = response[i];
            let user = data.name;
            $('#receiver').append(`
                <option value=${user}>${user}</option>
            `)
            $('#sender').append(`
                <option value=${user}>${user}</option>
            `)
        }
    })

}

//run these functions on document load
viewAll();
userList();