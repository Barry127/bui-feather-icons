export default {
  name: 'feather-move',
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
          points: '5 9 2 12 5 15'
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '9 5 12 2 15 5'
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '15 19 12 22 9 19'
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '19 9 22 12 19 15'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 2,
          y1: 12,
          x2: 22,
          y2: 12
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 12,
          y1: 2,
          x2: 12,
          y2: 22
        }
      }
    ]
  }
};
