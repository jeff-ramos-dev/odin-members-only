const path = require("path");

module.exports = {
    mode: "production",
    entry: "./app.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        fallback: {
            crypto: false,
            path: false,
            zlib: false,
            querystring: false,
            stream: false,
            os: false,
            fs: false,
            net: false,
            util: false,
            http: false,
            string_decoder: false,
            url: false,
            buffer: false,
            async_hooks: false,
        },
    },
};
