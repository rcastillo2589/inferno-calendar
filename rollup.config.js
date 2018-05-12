import babel from "rollup-plugin-babel";

export default {
  input: "index.js",
  output: {
    file: 'dist/bundle.js',
    name: 'bundle.js',
    format: 'umd'
  },
  external: ['inferno'],
  plugins: [ babel({
    exclude: 'node_modules/**'
  })]
};