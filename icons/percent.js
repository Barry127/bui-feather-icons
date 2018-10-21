export default {
  name: 'feather-percent',
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
          y1: 5,
          x2: 5,
          y2: 19
        }
      },
      {
        tag: 'circle',
        attrs: {
          cx: 6.5,
          cy: 6.5,
          r: 2.5
        }
      },
      {
        tag: 'circle',
        attrs: {
          cx: 17.5,
          cy: 17.5,
          r: 2.5
        }
      }
    ]
  }
};
