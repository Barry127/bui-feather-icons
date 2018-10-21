export default {
  name: 'feather-anchor',
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
          cy: 5,
          r: 3
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 12,
          y1: 22,
          x2: 12,
          y2: 8
        }
      },
      {
        tag: 'path',
        attrs: {
          d: 'M5 12H2a10 10 0 0 0 20 0h-3'
        }
      }
    ]
  }
};
