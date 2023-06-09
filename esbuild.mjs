import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

const runServe = process.argv.includes("--runServe")

const options = {
    publicPath: "/assets",
    outdir: "public/assets/",
    entryPoints: [{ in: "app.ts", out: "js/out" }, { in: "src/assets/scss/style.scss", out: "css/out" }],
    bundle: true,
    plugins: [
        sassPlugin({
            async transform(source) {
                const { css } = await postcss([autoprefixer]).process(source, { from: undefined });
                return css;
            },
        }),
    ],
}


if (runServe) {
    const ctx = await esbuild.context(options)
    console.log("⚡ Build complete! ⚡")
    const serve = await ctx.serve({ servedir: "public" })
    console.log(`\nWeb: http://127.0.0.1:${serve.port}`)
    await ctx.watch()
} else {
    esbuild
        .build(options)
        .then(() => console.log("⚡ Build complete! ⚡"))
        .catch(() => process.exit(1))
}

