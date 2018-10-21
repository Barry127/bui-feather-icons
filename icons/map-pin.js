export default {
  name: 'feather-map-pin',
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
          d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'
        }
      },
      {
        tag: 'circle',
        attrs: {
          cx: 12,
          cy: 10,
          r: 3
        }
      }
    ]
  }
};
