import dayjs from "dayjs";

export function fechaActual() {
    const fecha = dayjs().format('DD/MM/YYYY');
    console.log(fecha);
}

export function horaActual() {
    const hora = dayjs().format('HH:mm');
    console.log(hora);
}