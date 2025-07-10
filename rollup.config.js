import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";

export default {
  external: ["react", "react-dom", "crypto", "crypto-js"],
  input: "src/index.js",
  output: [
    { file: "dist/index.js", format: "cjs" },
    { file: "dist/index.es.js", format: "es", exports: "named" },
  ],
  plugins: [
    resolve({ extensions: [".js", ".jsx"] }),
    commonjs(),
    postcss(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
    }),
  ],
};
