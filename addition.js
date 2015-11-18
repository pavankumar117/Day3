function addNumbers()
{
        var val1 = parseFloat(document.getElementById("value1").value);
        var val2 = parseFloat(document.getElementById("value2").value);
        var ansD = document.getElementById("answer");
        ansD.value = val1 + val2;
}
