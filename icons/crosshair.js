export default {
  name: 'feather-crosshair',
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
          x1: 22,
          y1: 12,
          x2: 18,
          y2: 12
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 6,
          y1: 12,
          x2: 2,
          y2: 12
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 12,
          y1: 6,
          x2: 12,
          y2: 2
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 12,
          y1: 22,
          x2: 12,
          y2: 18
        }
      }
    ]
  }
};
