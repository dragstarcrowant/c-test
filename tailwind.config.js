module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'green': '#59AD40',
      'green-dark': '#4A9733',
      'orange': '#FC9343',
      'orange-second': '#F5822B',
      'grey': '#FAFBFC',
      'grey-second': '#E9E9E9',
      'grey-third': '#E9EAED',
      'grey-fourth': '#C5C5C5',
      'red': '#B23333',
      'red-dark': '#932626',
    }),
    fill: theme => ({
      ...theme('colors'),
      'inherit': 'inherit',
      'orange': '#FC9343',
      'orange-second': '#F5822B',
      'green': '#59AD40',
      'green-dark': '#4A9733',
      'grey': '#FAFBFC',
      'grey-second': '#E9E9E9',
      'grey-third': '#E9EAED',
      'grey-fourth': '#C5C5C5',
      'red': '#B23333',
      'red-dark': '#932626',
    }),
    extend: {
      opacity: {
        '10': '0.1',
        '0.27': '0.27'
      },
      colors: {
        'inherit': 'inherit',
        'orange': '#FC9343',
        'orange-second': '#F5822B',
        'green': '#59AD40',
        'green-dark': '#4A9733',
        'grey': '#FAFBFC',
        'grey-second': '#E9E9E9',
        'grey-third': '#E9EAED',
        'grey-fourth': '#C5C5C5',
        'red': '#B23333',
        'red-dark': '#932626',
      },
      screens: {
        sm: '640px',
        'sm-max': {
          'max': '640px'
        },
        md: '768px',
        'md-max': {
          'max': '768px'
        },
        lg: '1024px',
        xl: '1280px',
        '2xl': '1340px',
        '3xl': '1700px'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'initial': 'initial',
        'default': '1185px',
        '1440px': '1440px',
        '1500px': '1500px',
        '1600px': '1600px',
        '1780px': '1780px',
        '1920px': '1920px',
        '510px': '510px',
        '570px': '570px',
        '740px': '740px',
        '810px': '810px'
      },
      minWidth: {
        '180px': '180px',
        '1920px': '1920px'
      },
      minHeight: {
        '1px': '1px',
        '104px': '104px',
        '408px': '408px',
        '520px': '520px',
        '600px': '600px',
        'custom': 'calc(100vh - 150px)'
      },
      maxHeight: {
        '50%': '50%',
        '95px': '95px',
        '200px': '200px',
        '220px': '220px',
        '500px': '500px'
      },
      spacing: {
        '14': '2.5rem',
        '-50px': '-50px',
        '-230px': '-230px',
        '-385px': '-385px',
        '-570px': '-570px',
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '9px': '9px',
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '17px': '17px',
        '18px': '18px',
        '19px': '19px',
        '20px': '20px',
        '22px': '22px',
        '24px': '24px',
        '25px': '25px',
        '26px': '26px',
        '27px': '27px',
        '30px': '30px',
        '33px': '33px',
        '34px': '34px',
        '35px': '35px',
        '39px': '39px',
        '40px': '40px',
        '42px': '42px',
        '43px': '43px',
        '44px': '44px',
        '45px': '45px',
        '46px': '46px',
        '48px': '48px',
        '50px': '50px',
        '55px': '55px',
        '58px': '58px',
        '60px': '60px',
        '64px': '64px',
        '65px': '65px',
        '67px': '67px',
        '68px': '68px',
        '70px': '70px',
        '73px': '73px',
        '75px': '75px',
        '80px': '80px',
        '85px': '85px',
        '93px': '93px',
        '99px': '99px',
        '100px': '100px',
        '105px': '105px',
        '107px': '107px',
        '110px': '110px',
        '117px': '117px',
        '120px': '120px',
        '126px': '126px',
        '129px': '129px',
        '130px': '130px',
        '140px': '140px',
        '150px': '150px',
        '160px': '160px',
        '170px': '170px',
        '176px': '176px',
        '190px': '190px',
        '200px': '200px',
        '220px': '220px',
        '230px': '230px',
        '250px': '250px',
        '253px': '253px',
        '270px': '270px',
        '300px': '300px',
        '330px': '330px',
        '340px': '340px',
        '385px': '385px',
        '400px': '400px',
        '450px': '450px',
        '530px': '530px',
        '740px': '740px',
        '810px': '810px',
        '900px': '900px',
        '1/100': '1%',
        '38/100': '38%',
        '24/100': '24%',
        '25/100': '25%',
        '28/100': '28%',
        '36/100': '36%',
        '37/100': '37%',
        '39/100': '39%',
        '42/100': '42%',
        '45/100': '45%',
        '47/100': '47%',
        '49/100': '49%',
        '50/100': '50%',
        '55/100': '55%',
        '58/100': '58%',
        '61/100': '61%',
        '63/100': '63%',
        '66/100': '66%',
        '71/100': '71%',
        '75/100': '75%',
        '100/100': '100%',
        '200/100': '200%',
      },
      inset: {
        '-50': '-50%',
        '-100': '-100%',
        '50': '50%',
        '100': '100%',
        '-60px': '-60px',
        '-50px': '-50px',
        '-200px': '-200px',
        '-320px': '-320px',
        '-370px': '-370px',
        '5px': '5px',
        '10px': '10px',
        '15px': '15px',
        '20px': '20px',
        '30px': '30px',
        '35px': '35px',
        '38px': '38px',
        '39px': '39px',
        '40px': '40px',
        '42px': '42px',
        '44px': '44px',
        '50px': '50px',
        '60px': '60px',
        '67px': '67px',
        '70px': '70px',
        '90px': '90px',
        '100px': '100px',
        '110px': '110px',
        '160px': '160px',
        '200px': '200px',
        '250px': '250px'
      },
      borderRadius: {
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
        '8px': '8px',
        '10px': '10px',
        '14px': '14px',
        '50': '50%'
      },
      borderWidth: {
        '3': '3px'
      },
      lineHeight: {
        '0': '0',
        '30px': '30px',
        '40px': '40px',
        '43px': '43px',
        '44px': '44px',
        '45px': '45px',
        '48px': '48px',
        '50px': '50px',
        '55px': '55px',
        '60px': '60px',
        '70px': '70px',
        '1/6': '1.6'
      },
      fontFamily: {
        'hindSiliguri': ['Hind Siliguri'],
        'ebGaramond': ['EB Garamond'],
        'avabold': ['avabold'],
        'avaregular': ['avaregular'],
        'avasemiBold': ['avasemi-bold'],
        'openSans': ['Open Sans']
      },
      fontSize: {
        '1.6em': '1.6em',
        '0': '0',
        '11px': '11px',
        '12px': '12px',
        '13px': '13px',
        '15px': '15px',
        '17px': '17px',
        '18px': '18px',
        '19px': '19px',
        '20px': '20px',
        '22px': '22px',
        '24px': '24px',
        '28px': '28px',
        '30px': '30px',
        '32px': '32px',
        '34px': '34px',
        '38px': '38px',
        '46px': '46px',
        '54px': '54px',
        '61px': '61px',
        '70px': '70px',
        '80px': '80px',
        '89px': '89px'
      }
    },
    transform: {
      'none': 'none'
    },
    transformOrigin: {
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left'
    },
    translate: {
      '1/2': '50%',
      '-1/2': '-50%',
      'full': '100%',
      'centered': [
        '-50%', '-50%'
      ],
      'right-up': [
        '100%', '-100%'
      ],
      '3d': [
        '40px', '-60px', '-130px'
      ],
      'translate-x-50': 'tranform: translate3d(-50%, 0, 0)'
    },
    scale: {
      '90': '0.9',
      '100': '1',
      '110': '1.1',
      '-100': '-1',
      'stretched-x': [
        '2', '0.5'
      ],
      'stretched-y': [
        '0.5', '2'
      ],
      '3d': ['0.5', '1', '2']
    },
    rotate: {
      '90': '90deg',
      '180': '180deg',
      '270': '270deg',
      '3d': ['0', '1', '0.5', '45deg']
    },
    skew: {
      '-5': '-5deg',
      '5': '5deg'
    },
    perspective: {
      'none': 'none',
      '250': '250px',
      '500': '500px',
      '750': '750px',
      '1000': '1000px'
    },
    perspectiveOrigin: {
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left'
    }
  },
  variants: {
    textColor: [
      'responsive', 'hover', 'focus', 'group-hover'
    ],
    fill: [
      'responsive', 'hover', 'focus', 'group-hover'
    ],
    opacity: [
      'responsive', 'hover', 'focus', 'group-hover'
    ],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    translate: ['responsive'],
    scale: ['responsive'],
    rotate: ['responsive'],
    skew: ['responsive'],
    perspective: ['responsive'],
    perspectiveOrigin: ['responsive'],
    transformStyle: ['responsive'],
    backfaceVisibility: ['responsive'],
    transformBox: ['responsive'],
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [
    // require('tailwindcss-transforms')({   '3d': false, // defaults to false }),
  ]
}