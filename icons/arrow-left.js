export default {
  name: 'feather-arrow-left',
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
          x1: 19,
          y1: 12,
          x2: 5,
          y2: 12
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '12 19 5 12 12 5'
        }
      }
    ]
  }
};
