export default {
  name: 'feather-mic',
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
          d: 'M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d: 'M19 10v2a7 7 0 0 1-14 0v-2'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 12,
          y1: 19,
          x2: 12,
          y2: 23
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 8,
          y1: 23,
          x2: 16,
          y2: 23
        }
      }
    ]
  }
};
