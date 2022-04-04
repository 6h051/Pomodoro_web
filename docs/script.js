function live() {
    let a = document.getElementById("entrada").value;
    a = parseInt(a);

    if (a > 0)
    {
        document.getElementById("title").innerHTML = 2022 - a;
    }
    else
    {
        document.getElementById("title").innerHTML = "";
    }
}