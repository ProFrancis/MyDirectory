const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var array = []
var test = "06"
var regex = new RegExp('^0[6][0-9]{8}$')
console.log(test.match(regex))

const intro = "Hey sir, i'm your directory !\nEnter /help for display my different command\nOtherwise simply enter a command\nfor start using me\n"

commandHelp = () => {
  console.log("There is the details of different command available")
  console.log("/help : Display all the commands available")
  console.log("/stop : Quit your loved directory")
  console.log("/add : Add a new contact in your directory")
  console.log("/list : List all the contacts you have in your loved directory")
  console.log("/delete : Delete one of your contact by specifying his ID")
  question()
}

commandAdd = () => {
  rl.question("What is the first-name of your contact ?\n", (prenom) => {
    rl.question("What is the familly name of your contact ?\n", (nom) => {
      rl.question(`What is the phone number of ${prenom} ${nom}\n`, (tel) => {
        let state = obj(nom, prenom, tel)
        array.push(state)
        question()
      });              
    });      
  });    
}

addName = () => {
  rl.question("What is the familly name of your contact ?\n", (nom) => {
    if(tel.test(regex)) {
      let state = obj(nom, prenom, tel)
      array.push(state)
      question()
    }else{
      addNumber()
    }
  });      
}

addNumber = (prenom, nom) => {
  rl.question(`What is the phone number of ${prenom} ${nom}\n`, (tel) => {
    if(tel.match(regex)) {
      let state = obj(nom, prenom, tel)
      array.push(state)
      question()
    }else{
      addNumber()
    }
  });  
}

commandList = () => { 
  console.log("Here is the list of your computer :")
  console.log("-------- ------- ------- ----- ----")
  for(let key in array){
    array[key].id = key
    console.log("ID: " + array[key].id  + " ==> " + array[key].nom + " " + array[key].prenom)
    console.log("phone: " + array[key].tel)
  }
  question()
}

commandDelete = () => {
  rl.question('Quel ID voulez-vous suprimer ?\n', (id) => {
    delete array[id]
    console.log("L'utilisateur avec l'id : " + id + " a bien été suprimé.")
    commandList()
    question()
  });     
}

question = () => {
  rl.question('', (answer) => {
    if(answer == 'add'){
        commandAdd()
    }else if( answer == "help") {
        commandHelp();
    }else if( answer == "list") {
        commandList();
    }else if( answer == "delete") {
      commandDelete();
    }else if( answer == "stop") {
      rl.close();
    }
  });
}

obj = (a,b,c) => {
  dict = {
    id: 0,
    nom: a,
    prenom: b,
    tel: c
  }
  return dict
}

rl.question(intro , (answer) => {
  switch (answer) {
    case 'help':
      commandHelp()
      break;
    case 'add':
      commandAdd()
      break;
    case 'list':
      commandList()
    case 'delete':
      commandDelete()
      break;
    default:
      console.log(`Thank you for your valuable feedback:`);
  }
});