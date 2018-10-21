export default {
  name: 'feather-battery-charging',
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
          d:
            'M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 23,
          y1: 13,
          x2: 23,
          y2: 11
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '11 6 7 12 13 12 9 18'
        }
      }
    ]
  }
};
