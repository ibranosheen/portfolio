import path from 'path'

module.exports = {
  base: '/portfolio/',
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
