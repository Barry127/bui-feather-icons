export default {
  name: 'feather-printer',
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
          points: '6 9 6 2 18 2 18 9'
        }
      },
      {
        tag: 'path',
        attrs: {
          d:
            'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2'
        }
      },
      {
        tag: 'rect',
        attrs: {
          x: 6,
          y: 14,
          width: 12,
          height: 8
        }
      }
    ]
  }
};
