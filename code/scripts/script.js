/* Resetar valor */
function default_values(page)
{
      let user_name,user_level;

      if(page != 1)
      {
            //user test information
            user_name = "Userx"; 
            user_level = 1;
			//load the JSON file 
			//const filePath = 'JSON/dados.json';
			//const jsonData = fs.readFileSync(filePath, 'utf-8');
			
			//parse the JSON data 
			//const data = JSON.parse(jsonData);
      }

      localStorage.setItem('page',page);
      localStorage.setItem('level',user_level);

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
                  load_table(user_level, page);
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
                  load_table(user_level, page); 
                  event_db();
                  break;
            }

            case 4:
            {
                  displayGreeting(user_name,user_level); 
                  load_table(user_level, page);
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


function hasSpecialCharacters(str) {
  var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  return regex.test(str);
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




//General buttons

function event_listner_shared()
{
      let reload_button = document.getElementById("reload_button");
      reload_button.addEventListener("click",load_table(localStorage.getItem('level'),localStorage.getItem('page')));
}


/* Database página */

function load_table(level, page)
{
      //Adicionar o butão de entradas dependendo do level
      if(page==3) load_entry_button(level);

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


      //Raw Data para exprimentar funcionalidades NAO APAGAR ESTED DADOS APENAS COMENTAR!!!
      
      const rowData = 
      [
            {id:"001", name:"John Doe", contact:"+1234567890", email:"johndoe@example.com", NIF:"123456789", BI:"987654321", last_logout:"23:55 01-01-2023", level:"1"},
            {id:"002", name:"Jane Smith", contact:"+0987654321", email:"janesmith@example.com", NIF:"987654321", BI:"123456789", last_logout:"22:30 01-01-2023", level:"2"},
            {id:"003", name:"David Johnson", contact:"+1111111111", email:"davidjohnson@example.com", NIF:"111111111", BI:"222222222", last_logout:"20:15 01-01-2023", level:"3"},
            {id:"004", name:"Emily Wilson", contact:"+2222222222", email:"emilywilson@example.com", NIF:"222222222", BI:"333333333", last_logout:"18:45 01-01-2023", level:"1"},
            {id:"005", name:"Michael Brown", contact:"+3333333333", email:"michaelbrown@example.com", NIF:"333333333", BI:"444444444", last_logout:"17:20 01-01-2023", level:"2"},
            {id:"006", name:"Sarah Taylor", contact:"+4444444444", email:"sarahtaylor@example.com", NIF:"444444444", BI:"555555555", last_logout:"15:55 01-01-2023", level:"3"},
            {id:"007", name:"Christopher Davis", contact:"+5555555555", email:"christopherdavis@example.com", NIF:"555555555", BI:"666666666", last_logout:"14:30 01-01-2023", level:"1"},
            {id:"008", name:"Olivia Martinez", contact:"+6666666666", email:"oliviamartinez@example.com", NIF:"666666666", BI:"777777777", last_logout:"13:05 01-01-2023", level:"2"},
            {id:"009", name:"Daniel Anderson", contact:"+7777777777", email:"danielanderson@example.com", NIF:"777777777", BI:"888888888", last_logout:"11:40 01-01-2023", level:"3"},
            {id:"010", name:"Sophia Thomas", contact:"+8888888888", email:"sophiathomas@example.com", NIF:"888888888", BI:"999999999", last_logout:"10:15 01-01-2023", level:"1"},
            {id:"011", name:"Matthew Clark", contact:"+9999999999", email:"matthewclark@example.com", NIF:"999999999", BI:"000000000", last_logout:"08:50 01-01-2023", level:"2"},
            {id:"012", name:"Isabella Rodriguez", contact:"+1231231231", email:"isabellarodriguez@example.com", NIF:"123123123", BI:"456456456", last_logout:"07:25 01-01-2023", level:"3"},
            {id:"013", name:"James Lee", contact:"+2342342342", email:"jameslee@example.com", NIF:"234234234", BI:"567567567", last_logout:"05:00 01-01-2023", level:"1"},
            {id:"014", name:"Mia Turner", contact:"+3453453453", email:"miaturner@example.com", NIF:"345345345", BI:"678678678", last_logout:"03:35 01-01-2023", level:"2"},
            {id:"015", name:"Benjamin Harris", contact:"+4564564564", email:"benjaminharris@example.com", NIF:"456456456", BI:"789789789", last_logout:"02:10 01-01-2023", level:"3"},
            {id:"016", name:"Ava Martin", contact:"+5675675675", email:"avamartin@example.com", NIF:"567567567", BI:"890890890", last_logout:"00:45 01-01-2023", level:"1"},
            {id:"017", name:"Joseph Thompson", contact:"+6786786786", email:"josephthompson@example.com", NIF:"678678678", BI:"901901901", last_logout:"23:20 31-12-2022", level:"2"},
            {id:"018", name:"Charlotte Garcia", contact:"+7897897897", email:"charlottegarcia@example.com", NIF:"789789789", BI:"012012012", last_logout:"21:55 31-12-2022", level:"3"},
            {id:"019", name:"Henry Moore", contact:"+8908908908", email:"henrymoore@example.com", NIF:"890890890", BI:"123123123", last_logout:"20:30 31-12-2022", level:"1"},
            {id:"020", name:"Amelia Allen", contact:"+9019019019", email:"ameliaallen@example.com", NIF:"901901901", BI:"234234234", last_logout:"19:05 31-12-2022", level:"2"}
      ];

      const logData = 
      [
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
            {id:"014", edifício:"1", andar:"1", divisão:"2", estado:"1", descrição:"Cláudia Silva", hora:"17:55", data:"22-05-2023", grau:"3"},
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
      ];

      // buscar informação do numero de linhas que pretendemos ver
      let numberChoosed;
      if(page != 2){ 
            let listbox_element = document.getElementById("listbox_bottom");
            numberChoosed = listbox_element.value;
      }else
            numberChoosed = 3; 

      //variavél que irá conter os dados
      let data;
      if (page == 3) 
            data = rowData;
      if (page == 2 || page == 4) 
            data = logData;

      // Definir as váriaveis para os diversos objetos filhos
      let rowText , rowIcons, row, cont=0;

      // Os diferentes identificadores de campos, nesta possibilidade contentdo a capacidade máxima.
      const fields_id = ["f1","f2","f3","f4","f5","f6","f7","f8","f9"];

      // Se a quantidade que o utilizador pretender mostrar for superior a quantidade de dados existentes, limitar esses dados aos existentes
      if(numberChoosed > data.length)
            numberChoosed = data.length;

      // Varrer e criar as linhas
      for (let i = 0; i < numberChoosed ; i++) 
      {
            //Criar linha
            row = document.createElement("div");
            row.classList.add("row");

            //Criar divisoria para texto
            rowText = document.createElement("div");
            rowText.classList.add("row_text");
            
            if(page!=3) rowText.id = "full";
            
            // Prencher campos de acordo com a key -> ex.: "id","nome","..."
            if (page == 3) {
                  for (let key in data[i]) {
                        //criar divisoria para o campo
                        let rowField = document.createElement("div");

                        rowField.setAttribute("id",fields_id[cont]);
                        cont++;

                        rowField.classList.add("row_field");            
                        rowField.textContent = data[i][key];
                        rowText.appendChild(rowField);

                        //quantos campos pretende ver em ordem
                        if(cont == 6)
                              break;
                  }
            } else {
                  for (let key in data[i]) {
                        //criar divisoria para o campo
                        let rowField = document.createElement("div");

                        rowField.setAttribute("id",fields_id[cont]);
                        cont++;

                        rowField.classList.add("row2_field");
                        rowField.textContent = data[i][key];            
                        rowText.appendChild(rowField);

                        //quantos campos pretende ver em ordem
                        if(cont == 9)
                        {     
                              //mudar a cor dos campos em que tem nivel de gravidade
                              switch(data[i][key])
                              {
                                    case '2':
                                    {
                                          row.style.backgroundColor = "var(--clr-row-warning)";
                                          row.style.color = "black";
                                          break;
                                    }
                                    case '3':
                                    {
                                          row.style.backgroundColor = "var(--clr-row-danger)";
                                          row.style.color = "black";
                                          break;
                                    }

                              }
                              break;
                        }

                  }
            }


            cont = 0;

            if (level == 1 && page == 3) {
                  //Criar divisoria para icones
                  rowIcons = document.createElement("div");
                  rowIcons.classList.add("row_icons");
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
                  row.appendChild(rowIcons);
            }
            

            // Append row text and icons to the rowContainer
            row.appendChild(rowText);
            if (rowIcons) {
                  row.appendChild(rowIcons);
            }
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
      let flag = false;
      let e_username = getElementByPlaceholder("input","Nome de utilizador");
      let username = e_username.value;

      if(hasSpecialCharacters(username) || username=="")
      {
            //mudar cor para vermelho clarinho
            e_username.style.border = "1px solid hsl(11, 52%, 61%)";
            flag = true;
      }


      let e_password = getElementByPlaceholder("input","Palavra-Chave");
      let password = e_password.value;

      if(password == "")
      {
            //mudar cor para vermelho clarinho
            e_password.style.border = "1px solid hsl(11, 52%, 61%)";
            flag = true;
      }

      if (flag==true)
      {
            let element_error_message = document.getElementById("warning_message");
            element_error_message.innerHTML = "Existem campos não preenchindos ou com caracteres especiais";
            return null;
      }

      if(username == "admin" && password == "password")
      {
            //cookie <- guardar a cookie do user, localstorage, confirmar antes de entrar em cada pagina se a cookie funciona 
            window.location.href = "home.php";
            return null;
      }

      let element_error_message = document.getElementById("warning_message");
      element_error_message.innerHTML = "Utilizador ou palavra-passe errados.";

      e_username.value = null;
      e_password.value = null;
      return null;
}







// funções JSON

function getJsonKeyData(key){

//pode ser simplificado , just for development purposes

      if (key in data) {
      	const value = data[key];
      	console.log(value);
      	return value;
      } 
      else {
      	console.log('Key not found in the JSON file.');
      }
						
}

