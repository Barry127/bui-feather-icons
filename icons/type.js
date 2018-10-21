export default {
  name: 'feather-type',
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
          points: '4 7 4 4 20 4 20 7'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 9,
          y1: 20,
          x2: 15,
          y2: 20
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 12,
          y1: 4,
          x2: 12,
          y2: 20
        }
      }
    ]
  }
};
