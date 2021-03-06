export default {
  name: 'feather-shopping-bag',
  icon: {
    tag: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 3,
          y1: 6,
          x2: 21,
          y2: 6
        }
      },
      {
        tag: 'path',
        attrs: {
          d: 'M16 10a4 4 0 0 1-8 0'
        }
      }
    ]
  }
};
