export default {
  name: 'feather-map',
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
        tag: 'polygon',
        attrs: {
          points: '1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 8,
          y1: 2,
          x2: 8,
          y2: 18
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 16,
          y1: 6,
          x2: 16,
          y2: 22
        }
      }
    ]
  }
};
