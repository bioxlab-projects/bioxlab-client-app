var path = require('path');
module.exports = {
    entry: {
        index: "./src/scripts/index.ts",
        home: "./src/scripts/home.ts",
    },
    externals: {
        jquery: 'jQuery',
        axios: "axios"
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-typescript", ["@babel/preset-env", {
                        targets: {
                            chrome: "65",
                            safari: "11.1"
                        }
                    }]],
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-transform-typescript",
                        "@babel/plugin-transform-arrow-functions"
                    ]
                }
            },
            exclude: /node_modules/
        }]
    },
    resolve: { extensions: [".ts", ".js"] },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3800,
        allowedHosts: 'all',
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        devMiddleware: {
            index: true,
            publicPath: "/scripts/",
            serverSideRender: true,
            writeToDisk: true,
        },
        host: '127.0.0.1',
        watchFiles: {
            paths: ['src/**/*.ts'],
            options: {
                usePolling: false,
            },
        },
        hot: false,
        open: true
    },
    devtool: "source-map",
    mode: "development",
    // watch: true,
    // watchOptions: { ignored: ['node_modules/**'] }
};