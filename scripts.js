//GET INPUT ELEMENTS FROM DOM//
var nameInput = document.getElementById("name");
var descInput = document.getElementById("desc");
var dateInput = document.getElementById("date");
var lifeInput = document.getElementById("life");
var expInput = document.getElementById("exp");

    /*Get Table From DOM*/
        var tableOutput = document.getElementById("table");

    //MAIN UPDATE FUNCTION, CALLS WHEN SUBMIT BUTTON IS CLICKED//
        function update() {
                var newItem = getInputItem();
                updateTable(newItem);
            }

//GET NEW ITEM FROM INPUT FORM//
    function getInputItem() {
            var item = {
                    name: nameInput.value,
                    desc: descInput.value,
                    date: dateInput.value,
                    life: lifeInput.value,
                    exp: expInput.value
            };
    return item;
}

    //UPDATE TABLE WITH NEW ITEM//
        function updateTable(item) {
               //IF ITEM IS EMPTY, DONT UPDATE TABLE//
                   if(item.name == "" || item.desc == "" || item.date == "" || item.life == "" || item.exp == "") return;

                    ///CREATE NEW TR AND TD FOR TABLE OUTPUT//
                        var tablerow = document.createElement("tr");
               var name = document.createElement("td");
                var desc = document.createElement("td");
                var date = document.createElement("td");
                var life = document.createElement("td");
                var exp = document.createElement("td");

                    //UPDATE NEW TD ELEMENTS WITH ITEM INFO//
                        name.innerHTML = item.name;
                desc.innerHTML = item.desc;
                date.innerHTML = item.date;
                life.innerHTML = item.life;
                exp.innerHTML = item.exp;

                    //IF SHELF LIFE IS LESS THAN 3 DAYS, SET BACKGROUND TO RED//
                       if(parseFloat(item.life) < 3) tablerow.style.backgroundColor = "red";

                    //APPEND NEW ELEMENTS TO TABLE//
                       tablerow.appendChild(name);
                tablerow.appendChild(desc);
                tablerow.appendChild(date);
                tablerow.appendChild(life);
                tablerow.appendChild(exp);
                tableOutput.appendChild(tablerow);
            }
