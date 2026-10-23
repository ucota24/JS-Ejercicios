
const horarios = [
    { hora: 9, precio: 250, servicio: "Corte normal", barbero: "Angel Torres" },

    { hora: 10, precio: 420, servicio: "Corte normal + Arreglo de barba", barbero: "Roberto Aguilar",
        paquete: { nombre: "Corte + Barba", descuento:30}},

    { hora: 11, precio: 350, servicio: "Corte normal + Mascara negra", barbero: "Luna Ramirez",
        paquete: { nombre: "Corte + Mascara Negra", descuento: 30}},

    { hora: 13, precio: 100, servicio: "Mascara negra", barbero: "Alexis Mendoza" },

    { hora: 16, precio: 200, servicio: "Arreglo de barba", barbero: "Victor Salgado" }
];

const filtrados = horarios.filter(({hora}) => hora >= 11);

const total = horarios.reduce((acumulador, cita) => {const descuento = cita.paquete?.descuento ?? 0;
        return acumulador + cita.precio - descuento;}, 0);

const promedio = total / horarios.length;

const ordenados = [...horarios].sort((a, b) => a.precio - b.precio);

console.log({ filtrados, total, promedio, ordenados });
console.log(horarios);




