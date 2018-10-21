export default {
  name: 'feather-repeat',
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
        tag: 'polyline',
        attrs: {
          points: '17 1 21 5 17 9'
        }
      },
      {
        tag: 'path',
        attrs: {
          d: 'M3 11V9a4 4 0 0 1 4-4h14'
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '7 23 3 19 7 15'
        }
      },
      {
        tag: 'path',
        attrs: {
          d: 'M21 13v2a4 4 0 0 1-4 4H3'
        }
      }
    ]
  }
};
