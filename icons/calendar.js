export default {
  name: 'feather-calendar',
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
          y: 4,
          width: 18,
          height: 18,
          rx: 2,
          ry: 2
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 16,
          y1: 2,
          x2: 16,
          y2: 6
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 8,
          y1: 2,
          x2: 8,
          y2: 6
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 3,
          y1: 10,
          x2: 21,
          y2: 10
        }
      }
    ]
  }
};
