const viewAll = function(event){
    event.preventDefault();

    $.ajax({
        url: '/api/high5s',
        method: 'GET'
    }).then(function(response){
        for(let i = 0; i < response.length; i++){
            console.log(response)
            $(".card-deck").append(
                `<div class="card border-primary mb-3">
                <div class="card-header text-center">Title</div>
                <div class="card-body text-primary">
                    <h6 class="card-title text-center">To: Eve</h6>
                    <p class="card-text text-center">Generate message for high 5 here. Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit. Repudiandae quam doloribus, ullam cumque quaerat vel
                        fuga, itaque amet possimus placeat tempora voluptatum minima laboriosam aliquam
                        repellat? Voluptatem quasi porro fugit!</p>
                    <h6 class="card-title text-center">From: Adam</h6>
                </div>
            </div>`
            )
        }
    })
}

$('#submitButton').on('click', function(event){
    event.preventDefault();
    console.log("test")
    $.ajax({
        url:'/api/high5s',
        method: 'POST',
        data: {
            title: $('#titleInput').val(),
            message: $('#messageInput').val(),
            sender: $('#sender').val(),
            receiver: $('#receiver').val()
        }
       
    }).then(function(response){
        console.log(response)
    })
    
})