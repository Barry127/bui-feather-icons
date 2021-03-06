export default {
  name: 'feather-pause-circle',
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
        tag: 'line',
        attrs: {
          x1: 10,
          y1: 15,
          x2: 10,
          y2: 9
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 14,
          y1: 15,
          x2: 14,
          y2: 9
        }
      }
    ]
  }
};
