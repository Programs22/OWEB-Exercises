var input;
var recipe = "Inspired by coconut-based mithai, these irresistible Coconut-Cardamom Doughnuts have a plush, lightly spiced crumb " +
             "and a sweet glaze, all thanks to coconut milk.";
var music = "Hitting the Billboard Top 100 regularly, and getting multiple number 1's in the official UK charts, KSI has taken the " +
            "music scene by storm, with two of his songs already getting Platinum records.";
var movie = "The highly anticipated sequel to James Cameroon's Avatar from 2009, \"Avatar: The Way of Water\" hits the cinemas December 2022";
var sport = "Arsenal FC have started their Premier League campaign on a high, amassing league high 37 points and are now sitting " +
            "at the top of the Premier League after 14 games played";
var technology = "NVidia's new graphics card series, the GeForce RTX 40 has taken the gaming and technology world by storm";                                    

function start()
{
    input = document.getElementById("blog");
}

function post(i)
{
    switch(i)
    {
        case 1: input.value = recipe; break;
        case 2: input.value = music; break;
        case 3: input.value = movie; break;
        case 4: input.value = sport; break;
        case 5: input.value = technology; break;
    }
}

window.addEventListener("load", start, false);