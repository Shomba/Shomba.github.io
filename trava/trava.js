const { WebRequest, ClientRequest, net } = require("electron");
const axios = require('axios')
const https = require('https')
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function mandabraza() {
  

  clico = true;
  var token = document.getElementById("token").value;
  var chanel = document.getElementById("canal").value;
  var conteudo = document.getElementById("conteudo").value;
 var payload = conteudo;
  if(conteudo == "mensagem"){
   payload = '** 🙈**MAMACO'
  }
  headers = JSON.stringify({'Authorization':token,'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.12 Chrome/78.0.3904.130 Electron/7.3.2 Safari/537.36'})
  console.log(conteudo);
  
    for (let index = 0; index < 5000; index++) {
    var men = fetch("https://discord.com/api/v8/channels/"+chanel+"/messages", {
"headers": {
  "accept": "",
  "accept-language": "pt-BR",
  "authorization": token,
  "content-type": "application/json",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-super-properties": "eyJvcyI6IkxpbnV4IiwiYnJvd3NlciI6IkRpc2NvcmQgQ2xpZW50IiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X3ZlcnNpb24iOiIwLjAuMTQiLCJvc192ZXJzaW9uIjoiNS4xMS4xMy1hcmNoMS0xIiwib3NfYXJjaCI6Ing2NCIsInN5c3RlbV9sb2NhbGUiOiJwdC1CUiIsIndpbmRvd19tYW5hZ2VyIjoiS0RFLHVua25vd24iLCJjbGllbnRfYnVpbGRfbnVtYmVyIjo4MjExNywiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0=",
  "cookie": "locale=pt-BR; __cfduid=d1061fd91339ecde0ae27d2d05d43fd2a1618462501; __dcfduid=efbef793e8d346478cb6cf97d550aa99"
},
//"referrer": "https://discord.com/channels/831375024576266282/831375025327833090",
"referrerPolicy": "no-referrer-when-downgrade",
"body": "{\"content\":\""+payload+"\"}",
"method": "POST",
"mode": "cors"});
  console.log("internalpain");

    }
   
   

   
  
//#endregion
  


async function demo() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two seconds later, showing sleep in a loop...');

  // Sleep in loop
  
}
}
