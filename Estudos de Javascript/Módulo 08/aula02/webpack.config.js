import { resolve } from 'path'; // CommonJS

export const mode = 'production';
export const entry = './src/index.js';
export const output = {
  path: resolve(__dirname, 'public', 'assets', 'js'),
  filename: 'bundle.js'
};
export const module = {
  rules: [{
    exclude: /node_modules/,
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/env']
      }
    }
  }]
};
export const devtool = 'source-map';
