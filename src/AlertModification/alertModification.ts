export function getCustomAlert() {
if (document.getElementById) {
    window.alert = function (txt) {
        createCustomAlert(txt);
    }
}
}

const ALERT_TITLE = "Alert";
const ALERT_BUTTON_TEXT = "Ok";

function createCustomAlert(txt) {
    const d = document;

    if (d.getElementById("modalContainer")) return;

    const mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    const alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if (d.all && !(window as any).opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
    alertObj.style.visibility = "visible";

    const h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    const msg = alertObj.appendChild(d.createElement("p"));
    msg.innerHTML = txt;

    const btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function () { removeCustomAlert(); return false; }

    alertObj.style.display = "block";

}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
    location.reload();
}