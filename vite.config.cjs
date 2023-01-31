// const path = require('path');
import path from 'path'

module.exports = {
  base: '/',
  src: path.resolve(__dirname, 'src'),
  public: path.resolve(__dirname, 'public'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
  },
  assets: {
    globOptions: {
      ignore: ['**/__tests__/**'],
    },
  },
};
