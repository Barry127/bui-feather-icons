export default {
  name: 'feather-battery',
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
          x: 1,
          y: 6,
          width: 18,
          height: 12,
          rx: 2,
          ry: 2
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 23,
          y1: 13,
          x2: 23,
          y2: 11
        }
      }
    ]
  }
};
