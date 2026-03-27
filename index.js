// #region EJ1
import colors from 'yoctocolors';
import { readFile } from './src/modules/File.js';

console.log(colors.cyan('Leyendo el archivo...'));
readFile('./productos.json').then((contenido) => { console.log(contenido); });
// #endregion

// #region EJ2
import { agregarProducto } from './src/modules/File.js';

agregarProducto('Monitor', 120000).then((productos) => {
  console.log(colors.green('Producto agregado exitosamente:'));
  console.log(productos);
});
// #endregion

// #region EJ3
import * as date from './src/modules/Date.js';

console.log("Ejercicio 3:");
console.log(date.fechaActual());
console.log(date.horaActual());
// #endregion

// #region EJ4
import { obtenerPaises } from './src/modules/Paises.js';

obtenerPaises().then((pais) => {
  try {
  console.log(colors.yellow('El país obtenido es:'));
  console.log(pais);
  } catch (error) {
    console.error(colors.red('Error al obtener el país:'), error);
  }
});
// #endregion

// #region EJ5
import { buscarProducto } from './src/modules/File.js';

buscarProducto('Teclado').then((producto) => {
  if (!producto) {
    console.log(colors.yellow('Producto no encontrado'));
  }
  else {
    console.log(colors.blue('Producto encontrado:'));
    console.log(producto);
  }
});
// #endregion

// #region EJ6
import { generarCSV } from './src/modules/File.js';

generarCSV().then((csv) => {
  console.log(colors.magenta('Contenido CSV generado:'));
  console.log(csv);
}).catch((error) => {
  console.error(colors.red('Error al generar CSV:'), error);
});
// #endregion

// #region EJ7
import { contador } from './src/modules/Contador.js';
contador();
// #endregion
