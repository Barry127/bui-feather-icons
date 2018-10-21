export default {
  name: 'feather-file-text',
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
          d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '14 2 14 8 20 8'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 16,
          y1: 13,
          x2: 8,
          y2: 13
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 16,
          y1: 17,
          x2: 8,
          y2: 17
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '10 9 9 9 8 9'
        }
      }
    ]
  }
};
