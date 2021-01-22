$(document).ready(function () {
  $('#addTask').on('submit', function (event) {
    event.preventDefault();
    var task = $(this).children('[name=task]').val();
    console.log(task);

    $('#todoList').append(`<div class="row todo">
    <div class="col-9">
      <h5>${task}</h5>
    </div>
    <div class="col-3">
      <button class="btn btn-danger btn-sm remove">Remove</button>
    </div>
    </div>`);

    $(this).children('[name=task]').val('');
  });

  $(document).on('click', '.btn.remove', function (event) {
    $(this).closest('div.todo').remove();
  });

  $.ajax({
    type: 'GET',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=1',
    dataType: 'json',
    success: function (response, textStatus) {
      response.tasks.forEach(function (task) {
        $('#todoList').append('<p>' + task.content + '</p>');
      });
    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    },
  });

  $.ajax({
    type: 'POST',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=282',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      task: {
        content: 'Do something fun',
      },
    }),
    success: function (response, textStatus) {
      console.log(response);
    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    },
  });

  //end of $(document).ready
});
