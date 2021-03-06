export default {
  name: 'feather-upload',
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
          d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '17 8 12 3 7 8'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 12,
          y1: 3,
          x2: 12,
          y2: 15
        }
      }
    ]
  }
};
