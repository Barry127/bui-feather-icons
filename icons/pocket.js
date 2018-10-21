export default {
  name: 'feather-pocket',
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
        tag: 'path',
        attrs: {
          d:
            'M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z'
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '8 10 12 14 16 10'
        }
      }
    ]
  }
};
