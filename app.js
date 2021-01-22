$(document).ready(function () {
  $("#addTask").on("submit", function (event) {
    event.preventDefault();
    var task = $(this).children("[name=task]").val();
    console.log(task);

    $("#todoList").append(`<div class="row todo">
    <div class="col-9">
      <h5>${task}</h5>
    </div>
    <div class="col-3">
      <button class="btn btn-danger btn-sm remove">Remove</button>
    </div>
    </div>`);

    $(this).children("[name=task]").val("");
  });

  $(document).on("click", ".btn.remove", function (event) {
    $(this).closest("div.todo").remove();
  });
});
