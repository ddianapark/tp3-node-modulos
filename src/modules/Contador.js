export function contador() {
    let count = 0;
    const interval = setInterval(() => {
        count++;
        console.log(`Contador: ${count}`);
    }, 1000);
    setTimeout(() => {
        clearInterval(interval);
        console.log("Fin del contador");
    }, 10000);
}       