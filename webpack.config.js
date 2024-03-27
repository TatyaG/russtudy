// webpack.config.js
module.exports = {
    // Другие настройки конфигурации...

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            // Здесь вы можете указать дополнительные параметры для html-loader
                        },
                    },
                ],
            },
        ],
    },
};