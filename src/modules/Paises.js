export async function obtenerPaises() {
    const response = await fetch('https://restcountries.com/v3.1/name/Argentina');
    const datos = await response.json();
    return (datos[0].name.official);
}