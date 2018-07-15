module.exports = {

  // https://snazzymaps.com/style/8083/mymap
  mapStyles: [
    'element:labels.text.fill|color:0xffffff',
    'element:labels.text.stroke|color:0x000000|lightness:13',
    'feature:administrative|element:geometry.fill|color:0x000000',
    'feature:administrative|element:geometry.stroke|color:0x144b53|lightness:14|weight:1.4',
    'feature:administrative.locality|visibility:on',
    'feature:administrative.locality|element:labels.icon|visibility:on',
    'feature:landscape|color:0x08304b',
    'feature:poi|visibility:off',
    'feature:road|element:labels|visibility:off',
    'feature:road.arterial|element:geometry.fill|color:0x000000',
    'feature:road.arterial|element:geometry.stroke|color:0x0b3d51|lightness:16',
    'feature:road.highway|element:geometry.fill|color:0x000000',
    'feature:road.highway|element:geometry.stroke|color:0x0b434f|lightness:25',
    'feature:road.local|element:geometry|color:0x000000',
    'feature:transit|visibility:off',
    'feature:water|color:0x021019',
  ],

  relatedLinks: {
    train: {
      label: 'Train with us',
      href: '/',
      img: 'https://picsum.photos/342/193?random=1',
    },
    membership: {
      label: 'Choose your membership',
      href: '/',
      img: 'https://picsum.photos/342/193?random=2',
    },
    tkd: {
      label: 'What is Taekwon-Do?',
      href: '/tkd',
      img: 'https://picsum.photos/342/193?random=3',
    },
    instructors: {
      label: 'Meet our instructors',
      href: '/dojang',
      img: 'https://picsum.photos/342/193?random=4',
    },
    clubs: {
      label: 'Find affiliated clubs',
      href: '/dojang',
      img: 'https://picsum.photos/342/193?random=5',
    },
  },

}
