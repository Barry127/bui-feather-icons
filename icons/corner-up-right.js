export default {
  name: 'feather-corner-up-right',
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
          points: '15 14 20 9 15 4'
        }
      },
      {
        tag: 'path',
        attrs: {
          d: 'M4 20v-7a4 4 0 0 1 4-4h12'
        }
      }
    ]
  }
};
