$(document).ready(function()
{
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

    $("button:last").prev().click(function()
    {
        open("Blog.html", "_self");
    });

    $("button:last").click(function()
    {
        open("Instagram.html", "_self");
    });
});