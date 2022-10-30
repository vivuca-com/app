//const API_URL = "http://localhost:5000";
const API_URL = "https://api.vivuca.com";

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

async function api (path,data) {
        //let jwt = getCookie("jwt");
        const res = await fetch(API_URL+path, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        
        const json = await res.json();
        if(json.alert){
            Toastify({
                text: json.alert,
                duration: 3000,
            }).showToast();
        }

        if(json.redirect){
            window.open(json.redirect,"_self");
        }

        /* if(json.cookies){
            setCookie("jwt",json.jwt);
        } */

        console.log(JSON.stringify(json));
        return json;
    }


export default api;