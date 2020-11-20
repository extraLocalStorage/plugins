function displayAllLocals(div,breaks) {
(breaks != true) ? breaks = ", " : breaks = "<br/>";
for( var i = 0; i < getAllLocals().dat.length; i++) {
div.innerHTML += "<strong>"+i+": [&nbsp&nbsp</strong>" + "<u>" + getAllLocals().name[i] + "</u>, " + getAllLocals().dat[i] + "<strong>&nbsp&nbsp]</strong>" + breaks;
}
}
function store(key,dat) {
localStorage.setItem(key,dat);
}
function getDat(key) {
return localStorage.getItem(key).toString();
}
function getAllLocals() {
var datStore = [];
var datKeys = [];
for( var i = 0; i < 100; i++ ) {
var localKey = localStorage.key(i);
if(!localKey) {
return {dat: datStore, name: datKeys};
}
var grabbedDat = localStorage.getItem(localKey);
grabbedDat = grabbedDat.split("<br/>").join("\\n");
datStore.push(grabbedDat);
datKeys.push(localKey);
}
}
