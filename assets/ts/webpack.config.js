module.exports = [
    {
        entry: './editor.ts',
        mode: "development",
        output: {
            filename: '../../js/editor.js',
            libraryTarget: "this",
        },
        resolve: {
            extensions: ['.webpack.js', '.web.js', '.ts', '.js']
        },
        externals: {
            "jquery": "jQuery",
            "d3": "d3"
        },
        module: {
            rules: [
                {test: /\.ts$/, loader: 'ts-loader'}
            ]
        }
    },
];

