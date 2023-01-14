$(document).ready(function()
{
    var recipe = "Inspired by coconut-based mithai, these irresistible Coconut-Cardamom Doughnuts have a plush, lightly spiced crumb " +
                 "and a sweet glaze, all thanks to coconut milk.";
    var music = "Hitting the Billboard Top 100 regularly, and getting multiple number 1's in the official UK charts, KSI has taken the " +
                "music scene by storm, with two of his songs already getting Platinum records.";
    var movie = "The highly anticipated sequel to James Cameroon's Avatar from 2009, \"Avatar: The Way of Water\" hits the cinemas December 2022";
    var sport = "Arsenal FC have started their Premier League campaign on a high, amassing league high 37 points and are now sitting " +
                "at the top of the Premier League after 14 games played";
    var technology = "NVidia's new graphics card series, the GeForce RTX 40 has taken the gaming and technology world by storm";
    
    $("input:radio:first").click(function()
    {
        $("#blog").val(recipe);
    });

    $("input:radio:first").next().next().click(function()
    {
        $("#blog").val(music);
    });

    $("input:radio:eq(2)").click(function()
    {
        $("#blog").val(movie);
    });

    $("input:radio:last").prev().prev().click(function()
    {
        $("#blog").val(sport);
    });

    $("input:radio:last").click(function()
    {
        $("#blog").val(technology);
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

    $("button:last").prev().click(function()
    {
        open("Blog.html", "_self");
    });

    $("button:last").click(function()
    {
        open("Instagram.html", "_self");
    });
});