export const svgrConfig = {
  icon: true,

  replaceAttrValues: {
    '#000': 'currentColor',
    '#000000': 'currentColor', 
    'black': 'currentColor',
    '#FFF': 'currentColor',
    '#FFFFFF': 'currentColor',
    'white': 'currentColor'
  },

  svgoConfig: {
    plugins: [
      {
        name: 'removeScriptElement',
      },
    ],
  }
}