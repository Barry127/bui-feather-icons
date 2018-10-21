export default {
  name: 'feather-arrow-right',
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
          x1: 5,
          y1: 12,
          x2: 19,
          y2: 12
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '12 5 19 12 12 19'
        }
      }
    ]
  }
};
