export default {
  name: 'feather-arrow-up',
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
          y1: 19,
          x2: 12,
          y2: 5
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '5 12 12 5 19 12'
        }
      }
    ]
  }
};
