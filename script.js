const h = new Date().getHours();
let msg = "مرحباً بك";
if (h < 12) msg = "صباح الخير";
else if (h > 18) msg = "مساء الخير";
document.getElementById('greeting').innerHTML = msg;