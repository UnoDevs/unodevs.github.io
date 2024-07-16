const elProjects = document.getElementById("projetos");
const elMembers = document.getElementById("membros");
const elContact = document.getElementById("contatos");
const elAbout = document.getElementById("sobre");

let hidden = false;

function initPage() {
    elProjects.hidden = hidden;
    elMembers.hidden = !hidden;
    elContact.hidden = !hidden;
    elAbout.hidden = !hidden;
}

function onProjects() {
    elProjects.hidden = hidden;
    elMembers.hidden = !hidden;
    elContact.hidden = !hidden;
    elAbout.hidden = !hidden;
}

function onMembers() {
    elProjects.hidden = !hidden;
    elMembers.hidden = hidden;
    elContact.hidden = !hidden;
    elAbout.hidden = !hidden;
}
function onContact() {
    elProjects.hidden = !hidden;
    elMembers.hidden = !hidden;
    elContact.hidden = hidden;
    elAbout.hidden = !hidden;
}
function onAbout() {
    elProjects.hidden = !hidden;
    elMembers.hidden = !hidden;
    elContact.hidden = !hidden;
    elAbout.hidden = hidden;
}

