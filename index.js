function getVal(id) {
    return document.getElementById(id).value;
}

function setVal(id, val) {
    return document.getElementById(id).value = val;
}

function getText(id) {
    return document.getElementById(id).textContent;
}

function setText(id, val) {
    return document.getElementById(id).textContent = val;
}

function addClass(id, val) {
    return document.getElementById(id).classList.add(val);
}

function removeClass(id, val) {
    return document.getElementById(id).classList.remove(val);
}

function getClasses(id) {
    return document.getElementById(id).classList;
}

var player = true;
//var player = false;
var xCount = 0;
var oCount = 0;
var xCells = [];
var oCells = [];
var win = [
    ['one', 'two', 'three'],
    ['four', 'five', 'six'],
    ['seven', 'eight', 'nine'],
    ['one', 'four', 'seven'],
    ['two', 'five', 'eight'],
    ['three', 'six', 'nine'],
    ['one', 'five', 'nine'],
    ['three', 'five', 'seven']
];

$(document).ready(function () {
    $('td').on('click', function () {
        //alert(getText(this.id));
        if (getText(this.id) == "X" || getText(this.id) == "O") {
            alert("This cell is already filled. Please select another.");
            return;
        }
        if (player) {
            setText(this.id, "X");
            player = !player;
            xCount++;
            xCells.push(this.id);
            $("#player").text("Player O's turn");
        } else {
            setText(this.id, "O");
            player = !player;
            oCount++;
            oCells.push(this.id);
            $("#player").text("Player X's turn");
        }

        for (var i = 0; i < win.length; i++) {
            if (xCells.includes(win[i][0]) && xCells.includes(win[i][1]) && xCells.includes(win[i][2])) {
                alert("Player X Wins");
                $("#restart").trigger("click");
            } else if (oCells.includes(win[i][0]) && oCells.includes(win[i][1]) && oCells.includes(win[i][2])) {
                alert("Player O Wins");
                $("#restart").trigger("click");
            }
        }

        if (xCount == 5 || oCount == 5) {
            alert("Game Tied");
            $("#restart").trigger("click");
        }
    });

    $("#restart").on("click", function () {
        $("td").text("");
        xCount = 0;
        oCount = 0;
        xCells = [];
        oCells = [];
        player = true;
        $("#player").text("Player X's turn");
    });
});