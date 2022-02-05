const path = require("path");

module.exports = {
    mode: "development",
    entry : path.resolve(__dirname, 'src', 'app'),
    //for the build files
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
        publicPath : '/'
    },
    //extensions we want webpack to process
    resolve : {
        extensions : ['.js', '.jsx']
    },
    //to enable react router to work
    devServer : {
        historyApiFallback: true
    },
    //how we want the app to be compiled
    module : {
        rules:[{
            test: /\.jsx?/,
            loader: 'babel-loader'
        }]
    }
}