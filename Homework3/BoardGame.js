function start()
{
    for (var i=1; i <= 70; ++i)
    {
        var button = document.getElementById("startGame");
        var rectangle = document.getElementById("Position" + i);
        var tile = document.getElementById("Tile" + i);
        var byFour = i % 4;

        switch (byFour)
        {
            case 0: {
                        rectangle.style.backgroundColor = 'burlywood';
                        tile.style.backgroundColor = 'lightcoral';
                    } break;
            case 1: {
                        rectangle.style.backgroundColor = 'darkkhaki';
                        tile.style.backgroundColor = 'lightgreen';
                    } break;
            case 2: {
                        rectangle.style.backgroundColor = 'indianred';
                        tile.style.backgroundColor = 'moccasin';
                    } break;
            case 3: {
                        rectangle.style.backgroundColor = 'aqua';
                        tile.style.backgroundColor = 'orchid';
                    } break;
        }
    }

    button.addEventListener("click", startTimer, false);
}

function startTimer()
{
    var i = 1;
    var timer = document.getElementById("Timer");
    var turtle = "<img src=\"turtle.png\" alt=\"Image of a turtle\">"
    var rabbit = "<img src=\"rabbit.png\" alt=\"Image of a rabbit\">"
    var turtlePosition = 0;
    var previousTurtlePosition = 0;
    var rabbitPosition = 0;
    var previousRabbitPosition = 0;
    var interval = setInterval(playGame, 1000);

    function playGame()
    {
        timer.innerHTML = "Elapsed time: " + i + "s";

        previousTurtlePosition = turtlePosition;
        previousRabbitPosition = rabbitPosition;
        var changeTurtlePosition = calculateTurtlePosition();
        var changeRabbitPosition = calculateRabbitPosition();

        if (changeTurtlePosition > 0)
            turtlePosition += changeTurtlePosition;
        else
        {
            if (turtlePosition + changeTurtlePosition > 0)
                turtlePosition += changeTurtlePosition;
        }

        if (changeRabbitPosition > 0)
            rabbitPosition += changeRabbitPosition;
        else
        {
            if (rabbitPosition + changeRabbitPosition > 0)
                rabbitPosition += changeRabbitPosition;
        }
        
        if (rabbitPosition == turtlePosition)
        {
            window.alert("OUCH");
            var turtleTile = document.getElementById("Position" + turtlePosition);
            var rabbitTile = document.getElementById("Tile" + rabbitPosition);
            turtleTile.innerHTML = turtle;
            rabbitTile.innerHTML = rabbit;
        }  

        if (rabbitPosition >= 70)
        {
            var finalRabbitTile = document.getElementById("Tile70");
            finalRabbitTile.innerHTML = rabbit;
            turtleTile = document.getElementById("Position" + turtlePosition);
            turtleTile.innerHTML = turtle;
            window.alert("The rabbit won the race");
            clearInterval(interval);
        }
        else if (turtlePosition >= 70)
        {
            var finalTurtleTile = document.getElementById("Position70");
            finalTurtleTile.innerHTML = turtle;
            rabbitTile = document.getElementById("Tile" + rabbitPosition);
            rabbitTile.innerHTML = rabbit;
            window.alert("The turtle won the race");
            clearInterval(interval);
        }    

        var previousTurtleTile = document.getElementById("Position" + previousTurtlePosition);
        var previousRabbitTile = document.getElementById("Tile" + previousRabbitPosition);

        if (previousTurtlePosition == 0)
            previousTurtleTile.innerHTML = "Start";
        else
            previousTurtleTile.innerHTML = previousTurtlePosition;

        if (previousRabbitPosition == 0)
            previousRabbitTile.innerHTML = "Start";
        else
            previousRabbitTile.innerHTML = previousRabbitPosition;

        var turtleTile = document.getElementById("Position" + turtlePosition);
        var rabbitTile = document.getElementById("Tile" + rabbitPosition);
        turtleTile.innerHTML = turtle;
        rabbitTile.innerHTML = rabbit;
        ++i;
    }
}

function calculateTurtlePosition()
{
    var number = Math.floor(1 + Math.random() * 10);
    if (number >=1 && number <=5)
        return 3;
    else if (number >=6 && number <= 7)
        return -6;
    else
        return 1;
}

function calculateRabbitPosition()
{
    var number = Math.floor(1 + Math.random() * 10);
    if (number == 1 || number == 2)
        return 0;
    else if (number == 3 || number == 4)
        return 9;
    else if (number == 5)
        return -12;
    else if (number >= 6 && number <= 8)
        return 1;
    else
        return -2;    
}

window.addEventListener("load", start, false);