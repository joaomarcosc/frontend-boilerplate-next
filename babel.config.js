module.exports = {
  presets: ['next/babel', '@babel/preset-typescript'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true
      }
    ]
  ]
}
