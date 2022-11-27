var i;

function start()
{
    i = 2;
}


function change1()
{
    var image = document.getElementById("outline1");
    var likesText = document.getElementById("likes1");
    var likes = parseInt(likesText.innerHTML);
    if(image.getAttribute("src") == "Mini Instagram/clearHeart.png")
    {
        image.src = "Mini Instagram/redHeart.png";
        ++likes;
        likesText.innerHTML = likes.toString();
    }
    else
    {
        image.src = "Mini Instagram/clearHeart.png";
        --likes;
        likesText.innerHTML = likes.toString();
    }        
}

function change2()
{
    var image = document.getElementById("outline2");
    var likesText = document.getElementById("likes2");
    var likes = parseInt(likesText.innerHTML);
    if(image.getAttribute("src") == "Mini Instagram/clearHeart.png")
    {
        image.src = "Mini Instagram/redHeart.png";
        ++likes;
        likesText.innerHTML = likes.toString();
    }
    else
    {
        image.src = "Mini Instagram/clearHeart.png";
        --likes;
        likesText.innerHTML = likes.toString();
    }        
}

function change3()
{
    var image = document.getElementById("outline3");
    var likesText = document.getElementById("likes3");
    var likes = parseInt(likesText.innerHTML);
    if(image.getAttribute("src") == "Mini Instagram/clearHeart.png")
    {
        image.src = "Mini Instagram/redHeart.png";
        ++likes;
        likesText.innerHTML = likes.toString();
    }
    else
    {
        image.src = "Mini Instagram/clearHeart.png";
        --likes;
        likesText.innerHTML = likes.toString();
    }        
}

function change4()
{
    var image = document.getElementById("outline4");
    var likesText = document.getElementById("likes4");
    var likes = parseInt(likesText.innerHTML);
    if(image.getAttribute("src") == "Mini Instagram/clearHeart.png")
    {
        image.src = "Mini Instagram/redHeart.png";
        ++likes;
        likesText.innerHTML = likes.toString();
    }
    else
    {
        image.src = "Mini Instagram/clearHeart.png";
        --likes;
        likesText.innerHTML = likes.toString();
    }        
}

function add()
{
    if(i == 2)
    {
        var third = document.getElementById("Third");
        third.style.visibility = "visible";
        --i;
    }
    else if(i == 1)
    {
        var fourth = document.getElementById("Fourth");
        fourth.style.visibility = "visible";
    }
}

function addComment(i)
{
    var paragraph;
    var comment = window.prompt("Enter your comment here");
    switch(i)
    {
        case 1: {
            paragraph = document.getElementById("firstComment");
            paragraph.innerHTML = comment; 
        } break;
        case 2: {
            paragraph = document.getElementById("secondComment");
            paragraph.innerHTML = comment; 
        } break;
        case 3: {
            paragraph = document.getElementById("thirdComment");
            paragraph.innerHTML = comment; 
        } break;
        case 4: {
            paragraph = document.getElementById("fourthComment");
            paragraph.innerHTML = comment; 
        } break;
    }
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