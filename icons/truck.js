export default {
  name: 'feather-truck',
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
          y: 1,
          width: 15,
          height: 15
        }
      },
      {
        tag: 'polygon',
        attrs: {
          points: '16 8 20 8 23 11 23 16 16 16 16 8'
        }
      },
      {
        tag: 'circle',
        attrs: {
          cx: 5.5,
          cy: 18.5,
          r: 2.5
        }
      },
      {
        tag: 'circle',
        attrs: {
          cx: 18.5,
          cy: 18.5,
          r: 2.5
        }
      }
    ]
  }
};
