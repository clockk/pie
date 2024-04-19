import {generateRollupConfig} from '@naverpay/rollup'

module.exports = generateRollupConfig({
    packageDir: __dirname,
    entrypoint: {
        index: './src/index.ts',
        'pdf.worker.entry': './src/pdfjs-dist/legacy/build/pdf.worker.entry.js',
        pdf: './src/pdfjs-dist/legacy/build/pdf.js',
        'pdf.worker': './src/pdfjs-dist/legacy/build/pdf.worker.js',
    },
    minify: false,
    ie: true,
    supportModules: ['cjs', 'esm'],
})
