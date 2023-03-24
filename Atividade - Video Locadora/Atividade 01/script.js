const inTitle = document.getElementById('inTitle');
const inDuraction = document.getElementById('inDuraction');
const outTitle = document.getElementById('outTitle');
const outDuraction = document.getElementById('outDuraction');
const buttonConverter = document.getElementById('btnConverter')

buttonConverter.addEventListener('click', () =>{

    let title = inTitle.value;
    let duraction = Number(inDuraction.value);

    let hours = Math.floor(duraction / 60);
    let minutes = duraction % 60;

    outTitle.textContent = title;
    outDuraction.textContent = `${hours} horas(s) e ${minutes} minutos(s)`;
})