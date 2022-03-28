// Importando dependencia path
// dependencia del core de Node
const path = require('path');

module.exports = {
    // 1. Especificar el archivo de entrada
    entry: './client/index.js',
    // 2. Especificar el archivo de salida
    output: {
        // 2.1 Ruta absoluta de la salida
        path:path.resolve(__dirname,'pubic'),
        // 2.2 Nombre del archivo de salida
        filename: path.join('javascripts','bundle.js'),
        // 2.3 path publico
        publicPath: '/'
    }
}