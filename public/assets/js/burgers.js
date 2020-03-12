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
    location.reload();
  });
});

$('.devourBurger').on('click', function () {
  const burgerID = $(this).attr('data-burgerID');

  $.ajax({
    url: `/api/burgers/${burgerID}`,
    method: 'PUT',
    data: {
      devoured: 1
    }
  }).then(response => {
    console.log(response);
    location.reload();
  });
});

$('.deleteBurger').on('click', function () {
  console.log("hi");
  const burgerID = $(this).attr('data-burgerID');

  $.ajax({
    url: `/api/burgers/${burgerID}`,
    method: 'DELETE'
  }).then(response => {
    console.log(response);
    location.reload();
  });
});