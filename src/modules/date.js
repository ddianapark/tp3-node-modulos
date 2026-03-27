import dayjs from "dayjs";

export function fechaActual() {
    return dayjs().format('DD/MM/YYYY');
}

export function horaActual() {
    return dayjs().format('HH:mm');
}