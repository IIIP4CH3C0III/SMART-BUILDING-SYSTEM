/* Função principal */

/*
 * Esta função cumpre um papel crucial no website pois é esta que irá decidir quais funções serão inicializadas com a página,
 * bem como o reset de todos os valores presentes na mesma, para assim simplificar o código
 */

function default_values()
{
      let page = localStorage.getItem('page');
      if( page == null || page == 1 )
      { page = '1' ; localStorage.clear(); }

      //futuramente obter os dados php para o user e armazenalos nestas variavéis
      const user_name = localStorage.getItem('user_name')
      const user_level = localStorage.getItem('user_level'); 
      const user_session_id = localStorage.getItem('user_session_id');      

      event_listner_shared();

      //console.log(page);

      if(page != 1) //Caso não seja a primeira página
      {
      	//load the JSON file 
		//const filePath = 'JSON/dados.json';
		//const jsonData = fs.readFileSync(filePath, 'utf-8');
		
		//parse the JSON data 
		//const data = JSON.parse(jsonData);

            displayGreeting(user_name,user_level); //Função para mostrar o nome e nível do utilizador ao longo das páginas

      }

      //localStorage.setItem('page',page); //guardamos na memória do browser em qual página estamos.
      //localStorage.setItem('level',user_level); //guardamos na memória do browser qual o nível de permissão de utilizador.

      switch(page) //de acordo com a página escolher qual funcções executar.
      {
            //login page
            case '1': 
            {
                  let textbox_user = document.getElementById("textbox_full_center"); //obter o element correspondente com as caixas de texto
                  
                  if(textbox_user == null) window.location.href = "index.php";

                  textbox_user.value = null; //retirar qualquer valor nela presente
                  zoom(page,1.25); //executar uma função para dar um zoom na página atual
                  event_login(); //executar a função corresponde com os eventLogins da página de Login
                  break;
            }

            //dashboardo ou home page
            case '2':
            {
                  load_table(user_level, page, 1); //caregar a tabela presente na dashboard
                  console.log("hi");
                  load_table(user_level, page, 2); //futuramente seria mostrar todas as tabelas presentes na dashboard
                  break;
            } 

            //database
            case '3':
            {
			//Repor os valores presentes nas listbox presentes neste página.
                  let list_box1 = document.getElementById("textbox_l"); 
                  let list_box2 = document.getElementById("textbox_r");
                  let list_box3 = document.getElementById("listbox_bottom");

                  list_box1.selectedIndex = 0; 
                  list_box2.selectedIndex = 0; 
                  list_box3.selectedIndex = 0;       
                  //

                  load_table(user_level, page, 1); //expor a tabela necessária 
                  event_db(); //inicializar o gestor de eventos desta página
                  break;
            }

            case '4':
            {
                  //TODO
                  load_table(user_level, page, 1); //expor a tabela  1 das logs tabela
                  load_table(user_level, page, 2); //expor a tabela  2 das logs tabela
                  break; 
            }
            case '5':
            {
                  load_form(localStorage.getItem('db_selection')); //expor o formulário de acordo com a base de dados selecionada na página 3
                  event_forms(); //inicializar o gestor de eventos desta página
                  break;
            }
      }
}


/* State functions */

//Implementar a verificação se o user tem internet ligada, para evitar problemas.

//    light/dark theme








/* Funções para encaminhar para o php */

/* Função que envia o username e password e verifica, e se for correto guarda na memória do browser o nome do utilizador e seu nível de acceso */
function php_send_creedentials(username,password)
{
      let xhr = new XMLHttpRequest(); //Criar o objeto que irá conter o XMLHttp

      //method, url, async, user, password
      //para este processo apenas utilizamos os primeiros 3
      xhr.open('POST', 'scripts/php/checkLogin.php', true); 
      
      //A forma de validar
      xhr.onload = function()
      {
            if(xhr.status === 200) //Se for válido a comunicação
            {
                  //buscar a resposta do pedido
                  let response = xhr.responseText;
                  let responde_splited;

                  alert(response);
                  if( response === "error_1" || response === "error_2" || response === "error_3" ) responde_splited = response.split(",");

                  if( responde_splited[0] === "success")
                  {
                        localStorage.setItem('user_name',responde_splited[1]);                        
                        localStorage.setItem('user_level',responde_splited[2]); 
                        localStorage.setItem('user_session_id',responde_splited[3]); 

                        localStorage.setItem('page',2);
                        window.location.href = "home.php";
                        return true;
                  }
                  if( responde_splited === "error_2" )
                  {
                        //Se errar na password ou o utilizador a indicação é dada ao utilizador
                        let element_error_message = document.getElementById("warning_message");
                        element_error_message.innerHTML = "Utilizador ou palavra-passe errados.";

                        //e_username.value = null;
                        //e_password.value = null;

                        return false;
                  }
                  if( responde_splited === "error_1" )
                  {
                        let element_error_message = document.getElementById("warning_message");
                        element_error_message.innerHTML = "Conexão falhada.";

                        return false;
                  }
            }
      };


      //enviar a informação;
      let data = new FormData();
      data.append('username',username);
      data.append('password',password);

      xhr.send(data);
}

/* Função para registrar o ultimo logout efetuado e descartar a memória do browser */
//TODO
function f_last_logout()
{
      //efetuar comunicação
      //enviar data atual

      //descartar memória 
      localStorage.setItem('page',1);
      window.location.href = "index.php";
      localStorage.clear();
}







/* Funções especiais */

/* Função para obter o elemento do documento de acordo com a tag e o valor presente no html */ 
function getElementByValue(tag,value)
{
      let elements = document.getElementsByTagName(tag);

      for ( let x = 0 ; x  < elements.length ; x++ )
            if ( elements[x].value == value )
                  return elements[x];

      return null;
}

/* Função para obter o elemento do documento de acordo com a tag e o placeholder presente no html */ 
function getElementByPlaceholder(tag,placeholder)
{
      let elements = document.getElementsByTagName(tag);

      for ( let x = 0 ; x  < elements.length ; x++ )
            if ( elements[x].placeholder == placeholder )
                  return elements[x];

      return null;
}

/* Função para dar zoom na página */ 
function zoom(page,zoom_num)
{
      let value = "scale(" + zoom_num + ")";
      document.body.style.transformOrigin = "center";
      document.body.style.transform = value;
}


/* Função para verificar a existência de caracters especiais, return true=existe*/ 
function hasSpecialCharacters(str) {
  var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  return regex.test(str);
}


/* Top Bar information */

/* Disposição do texto na top bar de acordo com o nome e grau de permissões */
function displayGreeting(name,level) 
{
      let permission;
      if(level == 1)
            permission = "adminstrador";
      if(level == 2)
            permission = "monitor";
      if(level == 3)
            permission = "cliente";


      let greeting = "Bem vindo " + name + ", permissões de " + permission;
      document.getElementById("greeting").innerHTML = greeting;
}




//General buttons

/* Botões partilhados entre páginas */
function event_listner_shared()
{
      let home = document.getElementById("home");
      if(home != null) home.addEventListener("click",function(){ window.location.href = "home.php"; localStorage.setItem('page',2); });

      let db = document.getElementById("db");
      if(db != null) db.addEventListener("click",function(){ window.location.href = "db.php"; localStorage.setItem('page',3);});

      let logs = document.getElementById("logs");
      if(logs != null) logs.addEventListener("click",function(){ window.location.href = "logs.php"; localStorage.setItem('page',4);});

      let logout = document.getElementById("logout");
      if(logout != null) logout.addEventListener("click",f_last_logout);

      let reload_button = document.getElementById("reload_button");
      if(reload_button != null) reload_button.addEventListener("click",load_table(localStorage.getItem('user_level'),localStorage.getItem('page'),1));

}


/* Database página */

function load_table(level, page, db_presented)
{
      //Adicionar o butão de entradas dependendo do level
      if(page == 3) load_entry_button(level);

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
            {id:"001", nome:"Sensor Xiaomi", serialnumber:"XC293JSA1", estado:"1", edificio:"1A", andar:"2", divisao:"120", data:"23:55 13-05-2023", grau:"3"}
            ,{id:"002", nome:"Smart Thermostat", serialnumber:"D7E21K63A9B", estado:"0", edificio:"2B", andar:"1", divisao:"105", data:"09:30 15-04-2023", grau:"1"}
            ,{id:"003", nome:"Security Camera", serialnumber:"XY9DH6A4E82", estado:"1", edificio:"3C", andar:"3", divisao:"315", data:"17:20 28-03-2023", grau:"2"}
            ,{id:"004", nome:"Smoke Detector", serialnumber:"B21JF894Y3G", estado:"0", edificio:"1A", andar:"4", divisao:"405", data:"12:45 02-02-2023", grau:"0"}
            ,{id:"005", nome:"Door Sensor", serialnumber:"P2U83K59T7C", estado:"1", edificio:"2B", andar:"2", divisao:"209", data:"08:15 19-01-2023", grau:"3"}
            ,{id:"006", nome:"Motion Sensor", serialnumber:"N4C85D7G6F12", estado:"1", edificio:"3C", andar:"1", divisao:"102", data:"14:30 07-12-2022", grau:"2"}
            ,{id:"007", nome:"Water Leak Sensor", serialnumber:"M39A47B62H5C", estado:"0", edificio:"1A", andar:"3", divisao:"307", data:"11:10 22-11-2022", grau:"1"}
            ,{id:"008", nome:"Temperature Sensor", serialnumber:"T2X9H7R5Q8Z", estado:"1", edificio:"2B", andar:"1", divisao:"108", data:"07:25 04-10-2022", grau:"0"}
            ,{id:"009", nome:"Carbon Monoxide Detector", serialnumber:"L5T84F26J7S", estado:"0", edificio:"3C", andar:"2", divisao:"211", data:"16:50 17-09-2022", grau:"3"}
            ,{id:"010", nome:"Window Sensor", serialnumber:"K7E85J42D3N", estado:"1", edificio:"1A", andar:"4", divisao:"404", data:"13:15 01-08-2022", grau:"2"}
            ,{id:"011", nome:"Sensor Xiaomi", serialnumber:"R92W6E81B3D", estado:"1", edificio:"2B", andar:"2", divisao:"202", data:"22:40 15-07-2022", grau:"1"}
            ,{id:"012", nome:"Smart Thermostat", serialnumber:"F3D71C82J9T", estado:"0", edificio:"3C", andar:"1", divisao:"103", data:"18:05 30-06-2022", grau:"0"}
            ,{id:"013", nome:"Security Camera", serialnumber:"V8N6B2J1D7X", estado:"1", edificio:"1A", andar:"3", divisao:"306", data:"09:30 14-06-2022", grau:"3"}
            ,{id:"014", nome:"Smoke Detector", serialnumber:"G9Y1K38C27R", estado:"0", edificio:"2B", andar:"1", divisao:"102", data:"05:45 27-05-2022", grau:"2"}
            ,{id:"015", nome:"Door Sensor", serialnumber:"S4W5E7F1B3C", estado:"1", edificio:"3C", andar:"2", divisao:"209", data:"16:20 09-04-2022", grau:"1"}
            ,{id:"016", nome:"Motion Sensor", serialnumber:"U5H2D7R6A4W", estado:"1", edificio:"1A", andar:"4", divisao:"407", data:"12:55 23-03-2022", grau:"0"}
            ,{id:"017", nome:"Water Leak Sensor", serialnumber:"A8D6G7H3N9Q", estado:"0", edificio:"2B", andar:"2", divisao:"207", data:"09:30 06-02-2022", grau:"3"}
            ,{id:"018", nome:"Temperature Sensor", serialnumber:"B6F4E9C7X2D", estado:"1", edificio:"3C", andar:"1", divisao:"102", data:"05:45 20-01-2022", grau:"2"}
            ,{id:"019", nome:"Carbon Monoxide Detector", serialnumber:"H3F7C4V9B6K", estado:"0", edificio:"1A", andar:"3", divisao:"302", data:"16:20 03-12-2021", grau:"1"}
            ,{id:"020", nome:"Window Sensor", serialnumber:"T6N3J2R7E4D", estado:"1", edificio:"2B", andar:"1", divisao:"105", data:"12:55 16-11-2021", grau:"0"}
            ,{id:"021", nome:"Sensor Xiaomi", serialnumber:"V1G3D5C7H2B", estado:"1", edificio:"3C", andar:"2", divisao:"202", data:"09:30 31-10-2021", grau:"3"}
            ,{id:"022", nome:"Smart Thermostat", serialnumber:"L6K3C9F2G4V", estado:"0", edificio:"1A", andar:"4", divisao:"404", data:"05:45 14-09-2021", grau:"2"}
            ,{id:"023", nome:"Security Camera", serialnumber:"B2N6M9K3H8J", estado:"1", edificio:"2B", andar:"2", divisao:"209", data:"16:20 27-08-2021", grau:"1"}
            ,{id:"024", nome:"Smoke Detector", serialnumber:"Y8B2D3J4C6G", estado:"0", edificio:"3C", andar:"1", divisao:"102", data:"12:55 10-07-2021", grau:"0"}
            ,{id:"025", nome:"Door Sensor", serialnumber:"Q1D7G3H5B9N", estado:"1", edificio:"1A", andar:"3", divisao:"308", data:"09:30 23-06-2021", grau:"3"}
            ,{id:"026", nome:"Motion Sensor", serialnumber:"X7B3M2K4V9C", estado:"1", edificio:"2B", andar:"1", divisao:"101", data:"05:45 06-05-2021", grau:"2"}
            ,{id:"027", nome:"Water Leak Sensor", serialnumber:"Z9X6V3B2N7M", estado:"0", edificio:"3C", andar:"2", divisao:"205", data:"16:20 19-04-2021", grau:"1"}
            ,{id:"028", nome:"Temperature Sensor", serialnumber:"E5C4H9N6B3V", estado:"1", edificio:"1A", andar:"4", divisao:"406", data:"12:55 02-03-2021", grau:"0"}
            ,{id:"029", nome:"Carbon Monoxide Detector", serialnumber:"U4N7B2M3K8X", estado:"0", edificio:"2B", andar:"2", divisao:"208", data:"09:30 14-02-2021", grau:"3"}
            ,{id:"030", nome:"Window Sensor", serialnumber:"R9N7M3K4B2X", estado:"1", edificio:"3C", andar:"1", divisao:"104", data:"05:45 27-01-2021", grau:"2"}
      ]

      /*
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
      */

      // buscar informação do numero de linhas que pretendemos ver
      let numberChoosed;
      if(page != 2){ 
            let listbox_element = document.getElementById("listbox_bottom");
            numberChoosed = listbox_element.value;
      }else
            numberChoosed = 3; 

      //variavél que irá conter os dados
      let data;
      /*
      if (page == 3) 
            data = rowData;
      if (page == 2 || page == 4) 
            data = logData;
      */

      let db_choosed_toshow; 
      if(page == 3)
      {
            db_choosed_toshow = document.getElementById('textbox_l').value ;

            if(db_choosed_toshow == 1)
                  data = rowData;
            if(db_choosed_toshow == 2)
                  data = logData;
      }

      if(page != 3)
            data = logData;

      // Definir as váriaveis para os diversos objetos filhos
      let rowContainer, table,  rowText , rowIcons, row, cont=0;

      // Obter o objeto pai
      if(db_presented == 1){
      
            //Remover informação antiga, para poder refazer a tabela
            const removeCONTAINER = document.getElementById("remove");    
            if(removeCONTAINER != null)
                  removeCONTAINER.remove();

            rowContainer = document.getElementById("rowContainer");

            // Criar a tabela
            table = document.createElement("div");
            table.id = "remove"; // Atribuir o id, para futuramente podermos remover
            table.classList.add("table_db"); //nome da classe

      }
      if(db_presented == 2){

            //Remover informação antiga, para poder refazer a tabela
            const removeCONTAINER = document.getElementById("remove2");    
            if(removeCONTAINER != null)
                  removeCONTAINER.remove();

            rowContainer = document.getElementById("rowContainer2");

            // Criar a tabela
            table = document.createElement("div");
            table.id = "remove2"; // Atribuir o id, para futuramente podermos remover
            table.classList.add("table_db"); //nome da classe

      }




      // Os diferentes identificadores de campos, nesta possibilidade contentdo a capacidade máxima.
      const fields_id = ["f1","f2","f3","f4","f5","f6","f7","f8","f9"];

      // Se a quantidade que o utilizador pretender mostrar for superior a quantidade de dados existentes, limitar esses dados aos existentes
      if(numberChoosed > data.length)
            numberChoosed = data.length;

      //editar o header 
      if(page == 3) generate_header(db_choosed_toshow);

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

            if (level == "1" && page == 3) {
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
      return null;
}

function load_entry_button(level)
{
      //Adicionar o butão de adicionar entradas
      if(level == "1")//admin
      {
            let add_icon = document.getElementById("add_db");
            if(add_icon != null) add_icon.innerHTML = '<i class="fa-solid fa-plus fa-lg"></i>';  //<i class="fa-solid fa-plus fa-lg"></i>
      }
}

function generate_header(db)
{
      let fields_name;
      if(db)
            fields_name = ["ID","Nome","Contacto","Email","NIF","BI"];

      if(db==2)
            fields_name = ["ID","Nome","SN","Edifico","Andar","Divisão"];


      let removeCONTAINER = document.getElementById("remove_header");    
      if(removeCONTAINER != null)
            removeCONTAINER.remove();


      const element = document.getElementById('rowHeader');

      const table = document.createElement("div");
      table.id = "remove_header"; // Atribuir o id, para futuramente podermos remover
      table.classList.add("table_db"); //nome da classe

      /*
      <div class="row">
            <div class="row_text">
                  <div class="row_field" id="f1">ID</div>
                  <div class="row_field" id="f2">Nome</div>
                  <div class="row_field" id="f3">Contacto</div>
                  <div class="row_field" id="f4">Email</div>
                  <div class="row_field" id="f5">NIF</div>
                  <div class="row_field" id="f6">BI</div>
            </div>
            <div class="row_icons">
                  <a class="row_icon" > Editar </a>
                  <a class="row_icon" > Remover </a>
            </div>
      </div>

      const removeCONTAINER = document.getElementById("remove_header");
      if(removeCONTAINER != null)
            removeCONTAINER.remove();                        
      */

      const row = document.createElement("div");
      row.classList.add("row");


      const rowText = document.createElement("div");
      rowText.classList.add("row_text");

      for( let x = 0 ; x < fields_name.length ; x++)
      {
            const rowField = document.createElement("div");
            rowField.classList.add("row_field");
            rowField.id = `f${x+1}`;
            rowField.innerHTML = fields_name[x];

            rowText.appendChild(rowField);
      }

      const rowIcons = document.createElement("div");
      rowIcons.classList.add("row_icons");

      const options = ["Editar","Remover"];

      for( let x = 0 ; x < options.length ; x++)
      {
            const rowIcon = document.createElement("a");
            rowIcon.classList.add("row_icon");
            rowIcon.innerHTML = options[x];

            rowIcons.appendChild(rowIcon); 
      }

      row.appendChild(rowText);
      row.appendChild(rowIcons);
      table.appendChild(row);
      element.appendChild(table);

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
      localStorage.setItem('page',5);
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
      {
            localStorage.setItem('page',3);
            window.location.href = "db.php";
            return true;
      }

      return false;
}

function submit_submission()
{
      if(confirm("Tem a certeza que pretende submeter o formulário?"))
      {       
            alert("submit");
            localStorage.setItem('page',3);
            window.location.href = "db.php";
            return true;
      }
      return false;
}





/*  Login Page */ 

function event_login()
{
      let submit_button = getElementByValue("button","Submit");
      submit_button.addEventListener("click",check_form);
}

function check_form()
{
      let flag = false; //flag que indicará a existência de erros no formulário
      const e_username = getElementByPlaceholder("input","Nome de utilizador"); //váriavel contendo o elemento do username
      let username = e_username.value; //o username indicado pelo utilizador

      //Verificar a existência de caracteres especiais
      if(hasSpecialCharacters(username) || username=="")
      {
            //mudar cor para vermelho clarinho
            e_username.style.border = "1px solid hsl(11, 52%, 61%)";
            flag = true;
      }

      let e_password = getElementByPlaceholder("input","Palavra-Chave"); //váriavel contendo o elemento da password
      let password = e_password.value; //a password indicada pelo utilizador

      //Verificar se a password não é nula
      if(password == "")
      {
            //mudar cor para vermelho clarinho
            e_password.style.border = "1px solid hsl(11, 52%, 61%)";
            flag = true;
      }

      //Indicação de erros presentes no formulário
      if (flag==true)
      {
            let element_error_message = document.getElementById("warning_message");
            element_error_message.innerHTML = "Existem campos não preenchindos ou com caracteres especiais";
            return null;
      }

      //Verificar se o utilizador e a password estão corretas
      php_send_creedentials(username,password);
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

