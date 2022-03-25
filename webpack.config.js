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
        filename: 'bundle.js'
    },
    // 3. Configurando el servidor de desarrollo 
    devServer: {
        // 3.1 folder de archivos estáticos
        static: path.join(__dirname, "public"),
        // 3.2 Puerto del srvidor de desarrollo de WP (Webpack)
        port: 8081,
        // Definiendo host
        host: 'localhost'
        
    }
}