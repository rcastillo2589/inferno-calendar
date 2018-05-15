import babel from "rollup-plugin-babel";

export default {
  input: "index.js",  // Starting point for the library
  output: {
    file: 'dist/inferno-calendar.js', // output file name
    name: 'InfernoCalendar',  // Global name for this library
    format: 'umd',
    globals: {
      inferno: 'Inferno'    // Dependent global
    }
  },
  plugins: [ babel({
    exclude: 'node_modules/**'
  })]
};