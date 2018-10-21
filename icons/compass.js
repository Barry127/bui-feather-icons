export default {
  name: 'feather-compass',
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
        tag: 'circle',
        attrs: {
          cx: 12,
          cy: 12,
          r: 10
        }
      },
      {
        tag: 'polygon',
        attrs: {
          points: '16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76'
        }
      }
    ]
  }
};
