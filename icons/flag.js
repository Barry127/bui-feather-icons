export default {
  name: 'feather-flag',
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
          d: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 4,
          y1: 22,
          x2: 4,
          y2: 15
        }
      }
    ]
  }
};
