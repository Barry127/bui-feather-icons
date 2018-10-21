export default {
  name: 'feather-speaker',
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
        tag: 'rect',
        attrs: {
          x: 4,
          y: 2,
          width: 16,
          height: 20,
          rx: 2,
          ry: 2
        }
      },
      {
        tag: 'circle',
        attrs: {
          cx: 12,
          cy: 14,
          r: 4
        }
      },

      {
        tag: 'line',
        attrs: {
          x1: 12,
          y1: 6,
          x2: 12,
          y2: 6
        }
      }
    ]
  }
};
