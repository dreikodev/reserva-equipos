const btnRegistrar = document.getElementById('btnRegistrar');

btnRegistrar.addEventListener('click', function(e){

    e.preventDefault();

    const nombre = document.getElementById('name').value;
    const area = document.getElementById('area').value;
    const equipo = document.getElementById('equipo').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const lugar = document.getElementById('lugar').value;

    const fila = `
    <tr>
        <td>${nombre}</td>
        <td>${area}</td>
        <td>${equipo}</td>
        <td>${fecha}</td>
        <td>${hora}</td>
        <td>${lugar}</td>
    </tr>
    `;

    document.getElementById("tablaReservas").innerHTML =
    fila + document.getElementById("tablaReservas").innerHTML;

});