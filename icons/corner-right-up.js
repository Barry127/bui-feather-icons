export default {
  name: 'feather-corner-right-up',
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
          points: '10 9 15 4 20 9'
        }
      },
      {
        tag: 'path',
        attrs: {
          d: 'M4 20h7a4 4 0 0 0 4-4V4'
        }
      }
    ]
  }
};
