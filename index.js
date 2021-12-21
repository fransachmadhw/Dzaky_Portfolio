// Theme Switcher //
const icon = document.getElementById("icon");

if (localStorage.getItem("theme") === null) 
{
    localStorage.setItem("theme", "dark");
}

let localData = localStorage.getItem("theme");

if (localData == "dark")
{
    icon.src = "assets/img/sun.png";
    document.body.classList.remove("light-theme");
}

else if (localData == "light")
{
    icon.src = "assets/img/moon.png";
    document.body.classList.add("light-theme");
}

icon.onclick = function()
{
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme"))
    {
        icon.src = "assets/img/moon.png";
        icon.classList.add("dark");
        localStorage.setItem("theme", "dark")
    }
    else
    {
        icon.src = "assets/img/sun.png";
        icon.classList.remove("dark");
        localStorage.setItem("theme", "light")
    }
}