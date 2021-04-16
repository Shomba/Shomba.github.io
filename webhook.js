function mensagem() {
    var conteudo = document.getElementById("msg").value;
    var link = document.getElementById("cabeca");
    console.log(conteudo);
    fetch("https://discord.com/api/webhooks/832422766674313247/KPb6swO9cs-NgCAaFhVcDaHJFKCaGo8qObspOEKjkkHKfo8JI5afAIH_tnygz3LNdpHH?wait=true", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://sheeptester.github.io/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"content\":\""+conteudo+"\",\"username\":\"\",\"avatar_url\":null,\"tts\":false,\"embeds\":[]}",
  "method": "POST",
  "mode": "cors"
});
    
}