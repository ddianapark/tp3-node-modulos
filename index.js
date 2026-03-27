// #region EJ1
import colors from 'yoctocolors';
import { readFile } from './src/modules/file.js';

console.log(colors.cyan('Leyendo el archivo...'));
readFile('./productos.json').then((contenido) => { console.log(contenido); });
// #endregion

// #region EJ2
import { agregarProducto } from './src/modules/file.js';

agregarProducto('Monitor', 120000).then((productos) => {
  console.log(colors.green('Producto agregado exitosamente:'));
  console.log(productos);
});
// #endregion

// #region EJ3
import * as date from './src/modules/date.js';

try {
  date.fechaActual();
  date.horaActual();
} catch (err) {
  console.error('Error mostrando la fecha:', err);
}
// #endregion