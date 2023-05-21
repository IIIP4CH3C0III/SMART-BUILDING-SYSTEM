
function displayGreeting() 
{
      let name = "Adminstrador", permission = "adminstrador";
      let greeting = "Bem vindo " + name + ", permissões de " + permission;
      document.getElementById("greeting").innerHTML = greeting;
}


function load_table()
{
      // Get the container element for the table
      let rowContainer = document.getElementById("rowContainer");

      // Define the data for the table rows
      const rowData = 
      [
            { id: "0001", name: "John Smith", contact: "123456789", email: "john@example.com", nif: "123456789", bi: "111222333" },
            { id: "0002", name: "Jane Doe", contact: "987654321", email: "jane@example.com", nif: "987654321", bi: "444555666" },
            { id: "0003", name: "Fábio Pacheco", contact: "968122311", email: "pacheco.castro.fabio@example.com", nif: "987654321", bi: "999111999" },
            { id: "0004", name: "Emily Johnson", contact: "456789123", email: "emily@example.com", nif: "456789123", bi: "777888999" },
            { id: "0005", name: "Michael Brown", contact: "789123456", email: "michael@example.com", nif: "789123456", bi: "222333444" },
            { id: "0006", name: "Sophia Wilson", contact: "321654987", email: "sophia@example.com", nif: "321654987", bi: "555666777" },
            { id: "0007", name: "Oliver Davis", contact: "654987321", email: "oliver@example.com", nif: "654987321", bi: "888999000" },
            { id: "0008", name: "Isabella Taylor", contact: "987321654", email: "isabella@example.com", nif: "987321654", bi: "333444555" },
            { id: "0009", name: "Ethan Wilson", contact: "741852963", email: "ethan@example.com", nif: "741852963", bi: "666777888" },
            { id: "0010", name: "Ava Thompson", contact: "852963741", email: "ava@example.com", nif: "852963741", bi: "000111222" },
            { id: "0011", name: "John Smith", contact: "123456789", email: "john@example.com", nif: "123456789", bi: "111222333" },
            { id: "0012", name: "Jane Doe", contact: "987654321", email: "jane@example.com", nif: "987654321", bi: "444555666" },
            { id: "0013", name: "Fábio Pacheco", contact: "968122311", email: "pacheco.castro.fabio@example.com", nif: "987654321", bi: "999111999" },
            { id: "0014", name: "Emily Johnson", contact: "456789123", email: "emily@example.com", nif: "456789123", bi: "777888999" },
            { id: "0015", name: "Michael Brown", contact: "789123456", email: "michael@example.com", nif: "789123456", bi: "222333444" },
            { id: "0016", name: "Sophia Wilson", contact: "321654987", email: "sophia@example.com", nif: "321654987", bi: "555666777" },
            { id: "0017", name: "Oliver Davis", contact: "654987321", email: "oliver@example.com", nif: "654987321", bi: "888999000" },
            { id: "0018", name: "Isabella Taylor", contact: "987321654", email: "isabella@example.com", nif: "987321654", bi: "333444555" },
            { id: "0019", name: "Ethan Wilson", contact: "741852963", email: "ethan@example.com", nif: "741852963", bi: "666777888" },
            { id: "0020", name: "Ava Thompson", contact: "852963741", email: "ava@example.com", nif: "852963741", bi: "000111222" }

            // Add more data objects for additional rows
      ];

      let listbox_element = document.getElementById("listbox_bottom");
      let numberChoosed = listbox_element.value;



      let rowText , rowIcons, row, cont=0;
      const fields_id = ["f1","f2","f3","f4","f5","f6"];

      // Loop through the data and create table rows dynamically
      for (let i = 0; i < numberChoosed ; i++) 
      {
            row = document.createElement("div");
            row.classList.add("row");

            rowText = document.createElement("div");
            rowText.classList.add("row_text");

            rowIcons = document.createElement("div");
            rowIcons.classList.add("row_icons");

              // Create row fields dynamically based on the data
            for (let key in rowData[i]) {
                  let rowField = document.createElement("div");

                  rowField.setAttribute("id",fields_id[cont]);
                  cont++;

                  rowField.classList.add("row_field");
                  rowField.textContent = rowData[i][key];
                  rowText.appendChild(rowField);
            }

            cont = 0;

            // Create icons for each row
            let editIcon = document.createElement("a");
            editIcon.classList.add("row_icon");
            editIcon.href = "#";
            editIcon.innerHTML = '<i class="fa-solid fa-pen fa-lg"></i>';
            rowIcons.appendChild(editIcon);

            let deleteIcon = document.createElement("a");
            deleteIcon.classList.add("row_icon");
            deleteIcon.href = "#";
            deleteIcon.innerHTML = '<i class="fa-solid fa-trash-can fa-lg"></i>';
            rowIcons.appendChild(deleteIcon);

            // Append row text and icons to the rowContainer
            row.appendChild(rowText);
            row.appendChild(rowIcons);

            rowContainer.appendChild(row);
      }
}

function default_values()
{
      let list_box1 = document.getElementById("textbox_l");
      let list_box2 = document.getElementById("textbox_r");
      let list_box3 = document.getElementById("listbox_bottom");


      list_box1.selectedIndex = 0; 
      list_box2.selectedIndex = 0; 
      list_box3.selectedIndex = 0;
}
