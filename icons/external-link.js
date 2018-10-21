export default {
  name: 'feather-external-link',
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
          d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '15 3 21 3 21 9'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 10,
          y1: 14,
          x2: 21,
          y2: 3
        }
      }
    ]
  }
};
