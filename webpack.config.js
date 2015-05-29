module.exports = {
    entry: './app/client.jsx',
    output: {
        filename: 'bundle.js',
        path: 'public/js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    }
    // TODO: Be more selective about what to webpack
};
