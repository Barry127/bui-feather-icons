export default {
  name: 'feather-arrow-down',
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
          x1: 12,
          y1: 5,
          x2: 12,
          y2: 19
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '19 12 12 19 5 12'
        }
      }
    ]
  }
};