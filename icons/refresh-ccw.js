export default {
  name: 'feather-refresh-ccw',
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
          points: '1 4 1 10 7 10'
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '23 20 23 14 17 14'
        }
      },
      {
        tag: 'path',
        attrs: {
          d:
            'M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15'
        }
      }
    ]
  }
};
