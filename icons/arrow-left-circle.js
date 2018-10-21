export default {
  name: 'feather-arrow-left-circle',
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
        tag: 'polyline',
        attrs: {
          points: '12 8 8 12 12 16'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 16,
          y1: 12,
          x2: 8,
          y2: 12
        }
      }
    ]
  }
};
