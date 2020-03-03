$('#burger-form').on('submit', function (event) {
    event.preventDefault();

    const burgerData = {
        burger_name: $('[name=burger-name]')
            .val()
            .trim()
    };

    $.ajax({
        url: '/api/burgers',
        method: 'POST',
        data: burgerData
    }).then(response => {
        console.log(response);
        loburgerion.reload();
    });
});

$('.adoptburger').on('click', function () {
    const burgerId = $(this).attr('data-burgerid');

    $.ajax({
        url: `/api/burgers/${burgerId}`,
        method: 'PUT',
        data: {
            adopted: 1
        }
    }).then(response => {
        console.log(response);
        loburgerion.reload();
    });
});

$('.devourburger').on('click', function () {
    const burgerId = $(this).attr('data-burgerid');
    $.ajax({
        url: `/api/burgers/${burgerId}`,
        method: 'DELETE'
    }).then(response => {
        console.log(response);
        loburgerion.reload();
    });
});
