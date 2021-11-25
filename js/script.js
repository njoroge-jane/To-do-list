
// business logic
function Add(task) {
  this.addTask = task;
}
// date function
const day = new Date();

$(document).ready(function () {
  // const refresh = $('.fa-refresh');
  const dateToday = $('#date');
  $(dateToday).text(day);
  var doList = $('#list');

  $("#addBtn").click(function (event) {
    event.preventDefault();
    var inputTask = $('#input').val();

    // task object
    var newTask = new Add(inputTask);

    if (inputTask == null || inputTask == "") {
      alert("Please fill a to do item");
      return false;

    } else {
      $(doList).append("<li><i class='fa fa-circle-thin complete'></i>" + newTask.addTask + "<i class='fa fa-trash-o delete position-absolute end-0 bg-danger text-white px-3 me-3 p-2'></i></li>");
      $('input[type="text"]').val(" ");
      return true;
    }
  })
  // delete a task
  $(document).on("click", ".delete", function () {
    $(this).closest("li").remove();
  })
})

