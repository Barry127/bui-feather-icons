export default {
  name: 'feather-codepen',
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
          points: '12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 12,
          y1: 22,
          x2: 12,
          y2: 15.5
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '22 8.5 12 15.5 2 8.5'
        }
      },
      {
        tag: 'polyline',
        attrs: {
          points: '2 15.5 12 8.5 22 15.5'
        }
      },
      {
        tag: 'line',
        attrs: {
          x1: 12,
          y1: 2,
          x2: 12,
          y2: 8.5
        }
      }
    ]
  }
};
