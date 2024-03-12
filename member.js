function skillsMember()
{
    var url = "http://localhost:8080/api/skills";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var skills = JSON.parse(xhr.responseText);
            var output = "<ul>";
            for (var i = 0; i < skills.length; i++)
            {
                output += "<li>" + skills[i].name + "</li>";
            }
            output += "</ul>";
            document.getElementById("skills").innerHTML = output;
        }
    }
    xhr.send();
}