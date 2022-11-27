function start()
{
    var movie1 = document.getElementById("Movie1");
    var movie2 = document.getElementById("Movie2");
    var movie3 = document.getElementById("Movie3");
    var movie4 = document.getElementById("Movie4");
    var recipe1 = document.getElementById("Recipe1");
    var recipe2 = document.getElementById("Recipe2");
    var recipe3 = document.getElementById("Recipe3");

    movie1.addEventListener("click", Info1, false);
    movie2.addEventListener("click", Info2, false);
    movie3.addEventListener("click", Info3, false);
    movie4.addEventListener("click", Info4, false);
    recipe1.addEventListener("click", Info5, false);
    recipe2.addEventListener("click", Info6, false);
    recipe3.addEventListener("click", Info7, false);
}

function Info1()
{
    window.alert("When the CIA's most skilled operative-whose true " + 
                 "identity is known to none-accidentally uncovers dark agency secrets, " + 
                 "a psychopathic former colleague puts a bounty on his head, " + 
                 "setting off a global manhunt by international assassins.");
}

function Info2()
{
    window.alert("A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.");
}

function Info3()
{
    window.alert("When a sadistic serial killer begins murdering key political figures in Gotham, " + 
                 "Batman is forced to investigate the city's hidden corruption and question his family's involvement.");
}

function Info4()
{
    window.alert("American car designer Carroll Shelby and driver Ken Miles " +
                 "battle corporate interference and the laws of physics to build " +
                 "a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.");
}

function Info5()
{
    window.alert("Add 5 spoons of rolled oats into a glass cup. Add around 150ml of " +
                 "oat milk or other plant based milk and stir the components of the cup. " +
                 "Close the cup and leave it in the fridge overnight. For toppings I prefer to add " +
                 "white chocolate granola, berries (strawberries, rasberries or blueberries), " +
                 "peanut butter, a spoon of blended pistachios and a spoon of honey.");
}

function Info6(){
    window.open("https://www.bbcgoodfood.com/recipes/ultimate-falafel-wrap");
}

function Info7()
{
    window.open("https://www.vegrecipesofindia.com/pasta-arrabbiata-recipe/");
}

function switchPage(i)
{
    switch(i)
    {
        case 1: window.open("Homepage.html", "_self"); break;
        case 2: window.open("Favourites.html", "_self"); break;
        case 3: window.open("Form.html", "_self"); break;
        case 4: window.open("Blog.html", "_self"); break;
        case 5: window.open("Instagram.html", "_self"); break;
    }
}

window.addEventListener("load", start, false);