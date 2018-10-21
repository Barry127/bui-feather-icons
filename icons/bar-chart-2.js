export default {
  name: 'feather-bar-chart-2',
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
        tag: 'line',
        attrs: {
          x1: 18,
          y1: 20,
          x2: 18,
          y2: 10
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 12,
          y1: 20,
          x2: 12,
          y2: 4
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 6,
          y1: 20,
          x2: 6,
          y2: 14
        }
      }
    ]
  }
};
