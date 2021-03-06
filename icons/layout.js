export default {
  name: 'feather-layout',
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
          x1: 3,
          y1: 9,
          x2: 21,
          y2: 9
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 9,
          y1: 21,
          x2: 9,
          y2: 9
        }
      }
    ]
  }
};
