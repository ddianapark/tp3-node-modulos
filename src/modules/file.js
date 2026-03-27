import fs from 'fs';

export function readFile(filePath) {
  return fs.promises.readFile(filePath, 'utf-8');
}

export async function agregarProducto(nombre, precio) {
  const path = './productos.json';
  try {
    const content = await readFile(path);
    let productos = JSON.parse(content);

    productos.push({ nombre, precio });

    await fs.promises.writeFile(path, JSON.stringify(productos, null, 2), 'utf-8');
    return (productos);
  } catch (err) {
    throw err;
  }
}

export async function buscarProducto(nombre) {
  const path = './productos.json';
  const content = await readFile(path);
  const productos = JSON.parse(content);
  return productos.find((producto) => producto.nombre === nombre);
}

export function generarCSV() {
  const path = './productos.json';
  return readFile(path).then((content) => {
      const productos = JSON.parse(content);
      const csv = productos.map((p) => `${p.nombre},${p.precio}`).join('\n');
      return csv;
    })
    .catch((err) => {
      throw err;
    });
}