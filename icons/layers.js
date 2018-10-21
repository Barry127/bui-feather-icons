export default {
  name: 'feather-layers',
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
        tag: 'polygon',
        attrs: {
          points: '12 2 2 7 12 12 22 7 12 2'
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '2 17 12 22 22 17'
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '2 12 12 17 22 12'
        }
      }
    ]
  }
};