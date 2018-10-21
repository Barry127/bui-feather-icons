export default {
  name: 'feather-arrow-right-circle',
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
          points: '12 16 16 12 12 8'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 8,
          y1: 12,
          x2: 16,
          y2: 12
        }
      }
    ]
  }
};
