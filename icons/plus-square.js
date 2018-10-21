export default {
  name: 'feather-plus-square',
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
          x: 3,
          y: 3,
          width: 18,
          height: 18,
          rx: 2,
          ry: 2
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 12,
          y1: 8,
          x2: 12,
          y2: 16
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
