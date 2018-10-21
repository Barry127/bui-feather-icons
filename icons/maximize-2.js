export default {
  name: 'feather-maximize-2',
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
          points: '15 3 21 3 21 9'
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '9 21 3 21 3 15'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 21,
          y1: 3,
          x2: 14,
          y2: 10
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 3,
          y1: 21,
          x2: 10,
          y2: 14
        }
      }
    ]
  }
};
