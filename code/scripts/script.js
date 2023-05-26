/* Resetar valor */

function default_values(page)
{
      let user_name,user_level;

      if(page != 1)
      {
            //user test information
            user_name = "Userx"; 
            user_level = 1;
      }
            
      switch(page)
      {
            //login page
            case 1: 
            {
                  let textbox_user = document.getElementById("textbox_full_center");
                  textbox_user.value = null;
                  zoom(page,1.25);
                  event_login();
                  break;
            }

            //dashboardo ou home page
            case 2:
            {
                  displayGreeting(user_name,user_level); 
                  load_resume_logs(); 
                  break;
            } 

            //database
            case 3:
            {

                  let list_box1 = document.getElementById("textbox_l");
                  let list_box2 = document.getElementById("textbox_r");
                  let list_box3 = document.getElementById("listbox_bottom");

                  list_box1.selectedIndex = 0; 
                  list_box2.selectedIndex = 0; 
                  list_box3.selectedIndex = 0;       

                  displayGreeting(user_name,user_level); 
                  load_table(user_level); 
                  event_db();
                  break;
            }

            case 4:
            {
                  displayGreeting(user_name,user_level); 
                  load_table2();
                  break; 
            }
            case 5:
            {
                  displayGreeting(user_name,user_level);
                  load_form(localStorage.getItem('db_selection')); 
                  event_forms();
            }

      }
}


/* State functions */

//Implementar a verificação se o user tem internet ligada, para evitar problemas.



/* Funções especiais */

function getElementByValue(tag,value)
{
      let elements = document.getElementsByTagName(tag);

      for ( let x = 0 ; x  < elements.length ; x++ )
            if ( elements[x].value == value )
                  return elements[x];

      return null;
}

function getElementByPlaceholder(tag,placeholder)
{
      let elements = document.getElementsByTagName(tag);

      for ( let x = 0 ; x  < elements.length ; x++ )
            if ( elements[x].placeholder == placeholder )
                  return elements[x];

      return null;
}


function zoom(page,zoom_num)
{
      let value = "scale(" + zoom_num + ")";
      document.body.style.transformOrigin = "center";
      document.body.style.transform = value;
}




/* Top Bar information */

function displayGreeting(name,level) 
{
      let permission;
      if(level)
            permission = "adminstrador";
      if(level == 2)
            permission = "monitor";
      if(level == 3)
            permission = "cliente";


      let greeting = "Bem vindo " + name + ", permissões de " + permission;
      document.getElementById("greeting").innerHTML = greeting;
}



/* Database página */

function load_table(level)
{
      //Adicionar o butão de entradas dependendo do level
      load_entry_button(level);

      //Remover informação antiga, para poder refazer a tabela
      let removeCONTAINER = document.getElementById("remove");    
      if(removeCONTAINER != null)
            removeCONTAINER.remove();

      // Obter o objeto pai
      let rowContainer = document.getElementById("rowContainer");

      // Criar a tabela
      let table = document.createElement("div");
      table.id = "remove"; // Atribuir o id, para futuramente podermos remover
      table.classList.add("table_db"); //nome da classe


      // Raw Data para exprimentar funcionalidades
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
      ];

      // buscar informação do numero de linhas que pretendemos ver
      let listbox_element = document.getElementById("listbox_bottom");
      let numberChoosed = listbox_element.value;

      // Definir as váriaveis para os diversos objetos filhos
      let rowText , rowIcons, row, cont=0;

      // Os diferentes identificadores de campos, mudar futuramente
      const fields_id = ["f1","f2","f3","f4","f5","f6"];

      // Se a quantidade que o utilizador pretender mostrar for superior a quantidade de dados existentes, limitar esses dados aos existentes
      if(numberChoosed > rowData.length)
            numberChoosed = rowData.length;

      // Varrer e criar as linhas
      for (let i = 0; i < numberChoosed ; i++) 
      {
            //Criar linha
            row = document.createElement("div");
            row.classList.add("row");

            //Criar divisoria para texto
            rowText = document.createElement("div");
            rowText.classList.add("row_text");

            //Criar divisoria para icones
            rowIcons = document.createElement("div");
            rowIcons.classList.add("row_icons");

            // Prencher campos de acordo com a key -> ex.: "id","nome","..."
            for (let key in rowData[i]) {
                  //criar divisoria para o campo
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

            table.appendChild(row);
      }

      rowContainer.appendChild(table);
}

function remove_table()
{
      let rowContainer = document.getElementById("remove");    
      rowContainer.remove();
}

function load_entry_button(level)
{
      //Adicionar o butão de adicionar entradas
      if(level == 1)//admin
      {
            let add_icon = document.getElementById("add_db");
            add_icon.innerHTML = '<i class="fa-solid fa-plus fa-lg"></i>';  //<i class="fa-solid fa-plus fa-lg"></i>
      }
}

function event_db()
{
      let add_button = document.getElementById("add_db");
      add_button.addEventListener("click",select_db);
}

function select_db()
{
      let option_db = document.getElementById("textbox_l");
      localStorage.setItem('db_selection',option_db.value);
      window.location.href = "forms.php";
}








/* Formulário página */

function load_form(db)
{
      /* Texto superior */
      let item;
      if(db == 1)
            item = "cliente";
      if(db == 2)
            item = "dispostivo";

      let info = document.getElementById("textbox_l");
      info.innerHTML = "Adicionar um " + item;

      /* Formulário maker */
      let formulario = document.getElementById("form");
      
      const campos_cliente_pt = ["ID","Nome","Contacto","Email","NIF","BI"];
      const campos_dispositivo_pt = ["ID","Nome","Serial Number","Estado","Edificio","Andar","Divisão"];

      let length = 0;
      
      if(db == 1) //clientes
            length = campos_cliente_pt.length;

      if(db == 2) //dispostivos
            length = campos_dispositivo_pt.length;
       
      for (let x = 0; x < length ; x++) {
            let div = document.createElement("form");
            div.classList.add("content");

            let identificador = document.createElement("label"); 
            identificador.classList.add("container");
            identificador.id = "textbox_l";

            if(db == 1)
                  identificador.innerHTML = campos_cliente_pt[x];
            if(db == 2)
                  identificador.innerHTML = campos_dispositivo_pt[x];

            let caixa_texto = document.createElement("input");
            caixa_texto.classList.add("container");
            caixa_texto.id = "textbox_full";
            caixa_texto.placeholder = "Escreva aqui";

            if(db == 1)
                  caixa_texto.name = campos_cliente_pt[x];
            if(db == 2)
                  caixa_texto.name = campos_dispositivo_pt[x];

            div.appendChild(identificador);
            div.appendChild(caixa_texto);      
            formulario.appendChild(div);
      }

      /* Butões de submit e cancelar */

      let row = document.createElement("div");
      row.classList.add("content");

      let helper = document.createElement("div");
      helper.classList.add("box_left_pos1");

      row.appendChild(helper);

      
      let buttons = ["Cancelar","Submeter"];
      
      for ( let x = 0 ; x < buttons.length ; x++)
      {
            let button = document.createElement("input");
            button.classList.add("container");
            button.id = "listbox_bottom";
            button.type = "button";
            button.value = buttons[x];

            row.appendChild(button);
      }
      
      formulario.appendChild(row);

      let row2 = document.createElement("div");
      row2.classList.add("content");

      formulario.appendChild(row2);
}

function event_forms()
{
      let cancel_button = getElementByValue("input", "Cancelar");
      let submit_button = getElementByValue("input", "Submeter");

      cancel_button.addEventListener("click",cancel_submission);
      submit_button.addEventListener("click",submit_submission);
}

function cancel_submission()
{
      if(confirm("Tem a certeza que pretende cancelar o formulário?"))
            window.location.href = "db.php";

      return 0;
}

function submit_submission()
{
      if(confirm("Tem a certeza que pretende submeter o formulário?"))
      {       
            alert("submit");
            window.location.href = "db.php";
      }
      return 0;
}





/*  Login Page */ 


//TODO


function event_login()
{
      let submit_button = getElementByValue("button","Submit");
      submit_button.addEventListener("click",check_form);
}

function check_form()
{
      let e_username = getElementByPlaceholder("input","Nome de utilizador");
      let username = e_username.value;

      let e_password = getElementByPlaceholder("input","Palavra-Chave");
      let password = e_password.value;

      if(username == "admin" && password == "password")
            window.location.href = "home.php";

      alert("Utilizador ou palavra-passe errados.");
      e_username.value = null;
      e_password.value = null;
}









/* Página de Logs*/

function load_table2() 
{

      let removeCONTAINER = document.getElementById("remove");    
      if(removeCONTAINER != null)
            removeCONTAINER.remove();


	let rowContainer = document.getElementById("rowContainer");
	let table = document.createElement("div");
      table.id = "remove"; // Atribuir o id, para futuramente podermos remover
      table.classList.add("table_db"); //nome da classe
	 
      const rowData = [
      	{id:"001", edifício:"1", andar:"1", divisão:"1", estado:"0", descrição:"Janeiro Fernandes", hora:"23:55", data:"13-05-2023", grau:"3"},
      	{id:"002", edifício:"2", andar:"3", divisão:"2", estado:"1", descrição:"Carlos Santos", hora:"08:30", data:"19-04-2023", grau:"2"},
      	{id:"003", edifício:"3", andar:"2", divisão:"4", estado:"0", descrição:"Maria Silva", hora:"14:15", data:"07-06-2023", grau:"1"},
      	{id:"004", edifício:"1", andar:"4", divisão:"3", estado:"1", descrição:"Pedro Costa", hora:"10:45", data:"30-05-2023", grau:"3"},
      	{id:"005", edifício:"2", andar:"1", divisão:"2", estado:"1", descrição:"Ana Rodrigues", hora:"16:20", data:"21-05-2023", grau:"2"},
      	{id:"006", edifício:"3", andar:"3", divisão:"1", estado:"0", descrição:"Ricardo Santos", hora:"09:10", data:"10-04-2023", grau:"1"},	
      	{id:"007", edifício:"1", andar:"2", divisão:"3", estado:"0", descrição:"Lúcia Pereira", hora:"13:40", data:"15-06-2023", grau:"3"},
      	{id:"008", edifício:"2", andar:"4", divisão:"4", estado:"1", descrição:"João Mendes", hora:"11:30", data:"05-05-2023", grau:"2"},
      	{id:"009", edifício:"3", andar:"1", divisão:"1", estado:"0", descrição:"Sara Oliveira", hora:"18:05", data:"27-04-2023", grau:"1"},
      	{id:"010", edifício:"1", andar:"3", divisão:"2", estado:"1", descrição:"Miguel Alves", hora:"07:50", data:"14-05-2023", grau:"3"},
      	{id:"011", edifício:"2", andar:"2", divisão:"4", estado:"0", descrição:"Inês Rodrigues", hora:"15:20", data:"08-06-2023", grau:"2"},
      	{id:"012", edifício:"3", andar:"4", divisão:"3", estado:"1", descrição:"Tiago Sousa", hora:"12:10", data:"31-05-2023", grau:"1"},
      	{id:"013", edifício:"1", andar:"1", divisão:"2", estado:"1", descrição:"Cláudia Silva", hora:"17:45", data:"22-05-2023", grau:"3"},
      	{id:"015", edifício:"3", andar:"2", divisão:"3", estado:"0", descrição:"Ana Oliveira", hora:"09:30", data:"18-06-2023", grau:"2"},
      	{id:"016", edifício:"1", andar:"4", divisão:"1", estado:"1", descrição:"Rui Martins", hora:"14:55", data:"29-05-2023", grau:"3"},
      	{id:"017", edifício:"2", andar:"1", divisão:"3", estado:"1", descrição:"Carolina Pereira", hora:"11:20", data:"20-05-2023", grau:"2"},
      	{id:"018", edifício:"3", andar:"3", divisão:"2", estado:"0", descrição:"André Ferreira", hora:"16:10", data:"09-04-2023", grau:"1"},
      	{id:"019", edifício:"1", andar:"2", divisão:"4", estado:"0", descrição:"Mariana Santos", hora:"12:40", data:"14-06-2023", grau:"3"},
      	{id:"020", edifício:"2", andar:"4", divisão:"1", estado:"1", descrição:"Paulo Lima", hora:"10:30", data:"04-05-2023", grau:"2"},
      	{id:"021", edifício:"3", andar:"1", divisão:"3", estado:"0", descrição:"Isabel Fernandes", hora:"19:05", data:"26-04-2023", grau:"1"},
      	{id:"022", edifício:"1", andar:"3", divisão:"2", estado:"1", descrição:"Daniel Almeida", hora:"08:50", data:"13-05-2023", grau:"3"},
      	{id:"023", edifício:"2", andar:"2", divisão:"4", estado:"0", descrição:"Inês Sousa", hora:"15:30", data:"06-06-2023", grau:"2"},
      	{id:"024", edifício:"3", andar:"4", divisão:"1", estado:"1", descrição:"Luís Mendes", hora:"12:20", data:"29-05-2023", grau:"1"},
      ]
	
      // buscar informação do numero de linhas que pretendemos ver
      let listbox_element = document.getElementById("listbox_bottom");
      let numberChoosed = listbox_element.value;

      // Definir as váriaveis para os diversos objetos filhos
      let rowText , rowIcons, row, cont=0;
	
      // Se a quantidade que o utilizador pretender mostrar for superior a quantidade de dados existentes, limitar esses dados aos existentes
      if(numberChoosed > rowData.length)
            numberChoosed = rowData.length;

      const fields_id = ["l1","l2","l3","l4","l5","l6","l7","l8","l9"];


      // Varrer e criar as linhas
      for (let i = 0; i < numberChoosed ; i++) 
      {
            //Criar linha
            row = document.createElement("div");
            row.classList.add("row");

            //Criar divisoria para texto
            rowText = document.createElement("div");
            rowText.classList.add("row_text");
            rowText.id = "full";

            //Criar divisoria para icones
            rowIcons = document.createElement("div");
            rowIcons.classList.add("row_icons");

            // Prencher campos de acordo com a key -> ex.: "id","nome","..."
            for (let key in rowData[i]) {
                  //criar divisoria para o campo
                  let rowField = document.createElement("div");

                  rowField.setAttribute("id",fields_id[cont]);
                  cont++;

                  rowField.classList.add("row_field");
                  rowField.textContent = rowData[i][key];
                  rowText.appendChild(rowField);
            }

            cont = 0;

            // Append row text and icons to the rowContainer
            row.appendChild(rowText);
            table.appendChild(row);
      }

      rowContainer.appendChild(table);

}


function load_resume_logs()
{
      let removeCONTAINER = document.getElementById("remove");    
      if(removeCONTAINER != null)
            removeCONTAINER.remove();


      let rowContainer = document.getElementById("rowContainer");
      let table = document.createElement("div");
      table.id = "remove"; // Atribuir o id, para futuramente podermos remover
      table.classList.add("table_db"); //nome da classe


const rowData = [
      {id:"001", edifício:"1", andar:"1", divisão:"1", estado:"0", descrição:"Janeiro Fernandes", hora:"23:55", data:"13-05-2023", grau:"3"},
      {id:"002", edifício:"2", andar:"3", divisão:"2", estado:"1", descrição:"Carlos Santos", hora:"08:30", data:"19-04-2023", grau:"2"},
      {id:"003", edifício:"3", andar:"2", divisão:"4", estado:"0", descrição:"Maria Silva", hora:"14:15", data:"07-06-2023", grau:"1"},
      {id:"004", edifício:"1", andar:"4", divisão:"3", estado:"1", descrição:"Pedro Costa", hora:"10:45", data:"30-05-2023", grau:"3"},
      {id:"005", edifício:"2", andar:"1", divisão:"2", estado:"1", descrição:"Ana Rodrigues", hora:"16:20", data:"21-05-2023", grau:"2"},
      {id:"006", edifício:"3", andar:"3", divisão:"1", estado:"0", descrição:"Ricardo Santos", hora:"09:10", data:"10-04-2023", grau:"1"},      
      {id:"007", edifício:"1", andar:"2", divisão:"3", estado:"0", descrição:"Lúcia Pereira", hora:"13:40", data:"15-06-2023", grau:"3"},
      {id:"008", edifício:"2", andar:"4", divisão:"4", estado:"1", descrição:"João Mendes", hora:"11:30", data:"05-05-2023", grau:"2"},
      {id:"009", edifício:"3", andar:"1", divisão:"1", estado:"0", descrição:"Sara Oliveira", hora:"18:05", data:"27-04-2023", grau:"1"},
      {id:"010", edifício:"1", andar:"3", divisão:"2", estado:"1", descrição:"Miguel Alves", hora:"07:50", data:"14-05-2023", grau:"3"},
      {id:"011", edifício:"2", andar:"2", divisão:"4", estado:"0", descrição:"Inês Rodrigues", hora:"15:20", data:"08-06-2023", grau:"2"},
      {id:"012", edifício:"3", andar:"4", divisão:"3", estado:"1", descrição:"Tiago Sousa", hora:"12:10", data:"31-05-2023", grau:"1"},
      {id:"013", edifício:"1", andar:"1", divisão:"2", estado:"1", descrição:"Cláudia Silva", hora:"17:45", data:"22-05-2023", grau:"3"},
      {id:"015", edifício:"3", andar:"2", divisão:"3", estado:"0", descrição:"Ana Oliveira", hora:"09:30", data:"18-06-2023", grau:"2"},
      {id:"016", edifício:"1", andar:"4", divisão:"1", estado:"1", descrição:"Rui Martins", hora:"14:55", data:"29-05-2023", grau:"3"},
      {id:"017", edifício:"2", andar:"1", divisão:"3", estado:"1", descrição:"Carolina Pereira", hora:"11:20", data:"20-05-2023", grau:"2"},
      {id:"018", edifício:"3", andar:"3", divisão:"2", estado:"0", descrição:"André Ferreira", hora:"16:10", data:"09-04-2023", grau:"1"},
      {id:"019", edifício:"1", andar:"2", divisão:"4", estado:"0", descrição:"Mariana Santos", hora:"12:40", data:"14-06-2023", grau:"3"},
      {id:"020", edifício:"2", andar:"4", divisão:"1", estado:"1", descrição:"Paulo Lima", hora:"10:30", data:"04-05-2023", grau:"2"},
      {id:"021", edifício:"3", andar:"1", divisão:"3", estado:"0", descrição:"Isabel Fernandes", hora:"19:05", data:"26-04-2023", grau:"1"},
      {id:"022", edifício:"1", andar:"3", divisão:"2", estado:"1", descrição:"Daniel Almeida", hora:"08:50", data:"13-05-2023", grau:"3"},
      {id:"023", edifício:"2", andar:"2", divisão:"4", estado:"0", descrição:"Inês Sousa", hora:"15:30", data:"06-06-2023", grau:"2"},
      {id:"024", edifício:"3", andar:"4", divisão:"1", estado:"1", descrição:"Luís Mendes", hora:"12:20", data:"29-05-2023", grau:"1"},
      ]

      // Definir as váriaveis para os diversos objetos filhos
      let rowText , row, cont=0;

      const fields_id = ["l1","l2","l3","l4","l5","l6","l7","l8","l9"];


      // Varrer e criar as linhas
      for (let i = 0; i < 3 ; i++) 
      {
            //Criar linha
            row = document.createElement("div");
            row.classList.add("row");

            //Criar divisoria para texto
            rowText = document.createElement("div");
            rowText.classList.add("row_text");
            
            //Criar divisoria para icones
            rowIcons = document.createElement("div");
            rowIcons.classList.add("row_icons");

            // Prencher campos de acordo com a key -> ex.: "id","nome","..."
            for (let key in rowData[i]) {
                  //criar divisoria para o campo
                  let rowField = document.createElement("div");

                  rowField.setAttribute("id",fields_id[cont]);
                  cont++;

                  rowField.classList.add("row_field");
                  rowField.textContent = rowData[i][key];
                  rowText.appendChild(rowField);
            }

            cont = 0;

            row.appendChild(rowText);
            table.appendChild(row);
      }

      rowContainer.appendChild(table);

}