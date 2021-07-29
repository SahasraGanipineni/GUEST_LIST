var name_of_people = [];

function submit() {
    var guest_name = document.getElementById("entername").value;
    name_of_people.push(guest_name);

    console.log(name_of_people);
    var length_of_the_name = name_of_people.length;
    console.timeLog(length_of_the_name);

    document.getElementById("display_name").innerHTML = name_of_people.toString();
}
function get_sorted_list(){
    name_of_people.sort();
    var i = name_of_people.join("<br>");
    console.log(name_of_people);
    document.getElementById("get_sorted_list_button").innerHTML = i.toString();
}