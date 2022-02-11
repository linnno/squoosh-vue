const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
module.exports = {
  configureWebpack: {
    plugins: [
      new ImageMinimizerPlugin({
        generator: [
          {
            preset: "webp",
            implementation: ImageMinimizerPlugin.squooshGenerate,
            options: {
              encodeOptions: {
                /* 各種libSquoosh的設定 */
                webp: {
                  quality: 70,
                },
              },
            },
          },
        ]
      })
    ]
  }
}