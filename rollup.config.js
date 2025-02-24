import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: [
    { file: "dist/bundle.cjs.js", format: "cjs" },
    { file: "dist/bundle.esm.js", format: "esm" },
  ],
  plugins: [
    resolve({ extensions: [".js", ".jsx"] }), // 👈 Agregar .jsx aquí
    commonjs(),
    postcss(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
    }),
  ],
};
