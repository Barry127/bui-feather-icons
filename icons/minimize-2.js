export default {
  name: 'feather-minimize-2',
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
        tag: 'polyline',
        attrs: {
          points: '4 14 10 14 10 20'
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '20 10 14 10 14 4'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 14,
          y1: 10,
          x2: 21,
          y2: 3
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 3,
          y1: 21,
          x2: 10,
          y2: 14
        }
      }
    ]
  }
};
