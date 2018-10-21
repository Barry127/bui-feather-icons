export default {
  name: 'feather-scissors',
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
          cx: 6,
          cy: 6,
          r: 3
        }
      },
      {
        tag: 'circle',
        attrs: {
          cx: 6,
          cy: 18,
          r: 3
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 20,
          y1: 4,
          x2: 8.12,
          y2: 15.88
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 14.47,
          y1: 14.48,
          x2: 20,
          y2: 20
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 8.12,
          y1: 8.12,
          x2: 12,
          y2: 12
        }
      }
    ]
  }
};
