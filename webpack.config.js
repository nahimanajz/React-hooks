const path= require('path');
module.exports  = {
    entry: '.src/reduxComponents/App.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
    },
    mode: 'development'

};
