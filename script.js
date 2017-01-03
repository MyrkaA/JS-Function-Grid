//Write your function calls below this line
function setColor(row, col, color) {
    var cell = $('#t')[0].rows[row].cells[col];
    cell.style.backgroundColor = color;
}
setColor(2, 0, "pink");
setColor(3, 0, "pink");
setColor(4, 0, "pink");
setColor(5, 0, "pink");
setColor(6, 0, "pink");
setColor(7, 0, "pink");
setColor(5, 0, "pink");
setColor(5, 1, "pink");
setColor(5, 2, "black");
setColor(5, 3, "pink");
setColor(5, 4, "pink");
setColor(5, 5, "pink");
setColor(5, 6, "pink");
setColor(5, 7, "black");
setColor(5, 8, "pink");
setColor(5, 9, "pink");
setColor(4, 1, "pink");
setColor(4, 2, "pink");
setColor(4, 3, "pink");
setColor(4, 4, "pink");
setColor(4, 5, "pink");
setColor(4, 6, "pink");
setColor(4, 7, "pink");
setColor(4, 8, "pink");
setColor(4, 9, "pink");
setColor(3, 1, "pink");
setColor(3, 2, "pink");
setColor(3, 3, "pink");
setColor(3, 4, "pink");
setColor(3, 5, "pink");
setColor(3, 6, "pink");
setColor(3, 7, "pink");
setColor(3, 8, "pink");
setColor(3, 9, "pink");
setColor(2, 1, "pink");
setColor(2, 2, "pink");
setColor(2, 3, "black");
setColor(2, 4, "pink");
setColor(2, 5, "pink");
setColor(2, 6, "black");
setColor(2, 7, "pink");
setColor(2, 8, "pink");
setColor(2, 9, "pink");
setColor(6, 1, "pink");
setColor(6, 2, "pink");
setColor(6, 3, "black");
setColor(6, 4, "pink");
setColor(6, 5, "pink");
setColor(6, 6, "black");
setColor(6, 7, "pink");
setColor(6, 8, "pink");
setColor(6, 9, "pink");
setColor(7, 1, "pink");
setColor(7, 2, "pink");
setColor(7, 3, "pink");
setColor(7, 4, "black");
setColor(7, 5, "black");
setColor(7, 6, "pink");
setColor(7, 7, "pink");
setColor(7, 8, "pink");
setColor(7, 9, "pink");
setColor(8, 1, "pink");
setColor(8, 2, "pink");
setColor(8, 3, "pink");
setColor(8, 4, "pink");
setColor(8, 5, "pink");
setColor(8, 6, "pink");
setColor(8, 7, "pink");
setColor(8, 8, "pink");
setColor(9, 2, "pink");
setColor(9, 3, "pink");
setColor(9, 4, "pink");
setColor(9, 5, "pink");
setColor(9, 6, "pink");
setColor(9, 7, "pink");
function box(x,y,color) {
 setColor(x,y,color)
 setColor(x+1,y,color)
 setColor(x,y+1,color)
 setColor(x+1,y+1,color)
}
box (1, 0, "pink");
box(0, 1, "pink");
box(1, 1, "pink");
box(0, 1, "pink")

