let x = 16;

createGrid(x);

function createGrid(x){
    for (let rows = 0; rows < x; rows++){
        for (let columns = 0; columns < x; columns++){
            $("#container").append("<div class='grid'></div>");
        }
    }
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

function clearGrid(){
    $(".grid").remove();
};

function refreshGrid(){
    var boxCount = prompt("How many boxes per row/column?");
    clearGrid();
    createGrid(boxCount);
};

$(document).ready(function() {
    createGrid(16);

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });
    });
});