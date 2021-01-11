const path = require('path')
const DllPlugin = require('webpack/lib/DllPlugin');

module.exports = {
    context: process.cwd(),
    resolve: {
        extensions: ['.js'],
        modules: [__dirname, 'node_modules']
    },
    entry: {
        'react': ['react', 'react-dom']
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, '../dist/library'),
        library: '_dll_[name]'
    },
    plugins: [
        new DllPlugin({
            name: '_dll_[name]',
            path: path.join(__dirname, '../dist/library', '[name].manifest.json')
        })
    ]
}
