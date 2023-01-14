$(document).ready(function()
{
    $("#Movie1").on("click", function()
    {
        alert("When the CIA's most skilled operative-whose true " +
              "identity is known to none-accidentally uncovers dark agency secrets, " +
              "a psychopathic former colleague puts a bounty on his head, " +
              "setting off a global manhunt by international assassins.");
    });

    $("#Movie2").on("click", function()
    {
        alert("A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.");
    });

    $("#Movie3").on("click", function()
    {
        alert("When a sadistic serial killer begins murdering key political figures in Gotham, " + 
              "Batman is forced to investigate the city's hidden corruption and question his family's involvement.");
    });

    $("#Movie4").on("click", function()
    {
        alert("American car designer Carroll Shelby and driver Ken Miles " +
              "battle corporate interference and the laws of physics to build " +
              "a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.");
    });

    $("#Recipe1").on("click", function()
    {
        alert("Add 5 spoons of rolled oats into a glass cup. Add around 150ml of " +
              "oat milk or other plant based milk and stir the components of the cup. " +
              "Close the cup and leave it in the fridge overnight. For toppings I prefer to add " +
              "white chocolate granola, berries (strawberries, rasberries or blueberries), " +
              "peanut butter, a spoon of blended pistachios and a spoon of honey.");
    });

    $("#Recipe2").on("click", function()
    {
        open("https://www.bbcgoodfood.com/recipes/ultimate-falafel-wrap")
    });

    $("#Recipe3").on("click", function()
    {
        open("https://www.vegrecipesofindia.com/pasta-arrabbiata-recipe/")
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