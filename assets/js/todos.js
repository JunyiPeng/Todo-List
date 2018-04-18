$("ul").on("click", ".deleteButton", function (event) {
	//once click the delete button, delete the li
	$(this).parent().fadeOut(200, function () {
		$(this).remove();
	});
	event.stopPropagation();
});

$("ul").on("click", ".todoContent", function() {
	$(this).toggleClass("completed");
});


$("input").keypress(function(even) {
	if (even.which === 13) {
		var newTodo = $("input").val();
		var content = "<li><span class=\"deleteButton\"><i class=\"fas fa-trash-alt\"></i></span> <span class=\"todoContent\">"+ newTodo +"</span></li>";
		$("#todoList").append(content);
		$("input").val("");
	}
});

$("#plusButton").on("click", function() {
	$("input").fadeToggle(1);
});