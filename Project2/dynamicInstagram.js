$(document).ready(function()
{
    var i = 2;

    $("#add").click(function()
    {
        if (i == 2)
        {
            $("#Third").css("visibility", "visible");
            --i;
        }
        else if (i == 1)
        {
            $("#Fourth").css("visibility", "visible");
        }
    });

    $("#outline1").on("click", function()
    {
        var likes = parseInt($("#likes1").text());

        if ($(this).attr('src') === "Mini Instagram/clearHeart.png")
        {
            $(this).attr('src', "Mini Instagram/redHeart.png");
            ++likes;
            $("#likes1").text(likes.toString());
        }
        else
        {
            $(this).attr('src', "Mini Instagram/clearHeart.png");
            --likes;
            $("#likes1").text(likes.toString());
        }
    });

    $("#outline2").on("click", function()
    {
        var likes = parseInt($("#likes2").text());

        if ($(this).attr('src') === "Mini Instagram/clearHeart.png")
        {
            $(this).attr('src', "Mini Instagram/redHeart.png");
            ++likes;
            $("#likes2").text(likes.toString());
        }
        else
        {
            $(this).attr('src', "Mini Instagram/clearHeart.png");
            --likes;
            $("#likes2").text(likes.toString());
        }
    });

    $("#outline3").on("click", function()
    {
        var likes = parseInt($("#likes3").text());

        if ($(this).attr('src') === "Mini Instagram/clearHeart.png")
        {
            $(this).attr('src', "Mini Instagram/redHeart.png");
            ++likes;
            $("#likes3").text(likes.toString());
        }
        else
        {
            $(this).attr('src', "Mini Instagram/clearHeart.png");
            --likes;
            $("#likes3").text(likes.toString());
        }
    });

    $("#outline4").on("click", function()
    {
        var likes = parseInt($("#likes4").text());

        if ($(this).attr('src') === "Mini Instagram/clearHeart.png")
        {
            $(this).attr('src', "Mini Instagram/redHeart.png");
            ++likes;
            $("#likes4").text(likes.toString());
        }
        else
        {
            $(this).attr('src', "Mini Instagram/clearHeart.png");
            --likes;
            $("#likes4").text(likes.toString());
        }
    });

    $("#comment1").on("click", function()
    {
        var comment = prompt("Enter your comment here");
        $("#firstComment").text(comment);
    });

    $("#comment2").on("click", function()
    {
        var comment = prompt("Enter your comment here");
        $("#secondComment").text(comment);
    });

    $("#comment3").on("click", function()
    {
        var comment = prompt("Enter your comment here");
        $("#thirdComment").text(comment);
    });

    $("#comment4").on("click", function()
    {
        var comment = prompt("Enter your comment here");
        $("#fourthComment").text(comment);
    });

    $("button:first").click(function()
    {
        open("Homepage.html", "_self");
    });

    $("button:first").next().click(function()
    {
        open("Favourites.html", "_self");
    });

    $("button:first").next().next().click(function()
    {
        open("Form.html", "_self");
    });

    $("button:eq(3)").click(function()
    {
        open("Blog.html", "_self");
    });

    $("button:eq(4)").click(function()
    {
        open("Instagram.html", "_self");
    });
});