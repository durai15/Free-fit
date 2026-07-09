export type CategoryProduct = {
  name: string;
  detail: string;
  image: string;
  alt: string;
};

export type Category = {
  slug: string;
  index: string;
  title: string;
  cardTitle: string;
  count: string;
  description: string;
  image: string;
  alt: string;
  products: CategoryProduct[];
};

export const categories: Category[] = [
  {
    slug: 'outerwear',
    index: '01',
    title: 'OUTERWEAR',
    cardTitle: 'Outerwear',
    count: '12 Styles',
    description:
      'Structured layers built for movement, changing weather, and everyday city rhythm.',
    image: '/images/category/images_12.png',
    alt: 'Outerwear',
    products: [
      {
        name: 'Alpine Overshirt',
        detail: 'Insulated everyday layer',
        image: '/images/category/images_12.png',
        alt: 'Alpine outerwear look'
      },
      {
        name: 'Motion Jacket',
        detail: 'Relaxed technical shell',
        image: '/images/bestsellers/images_01.png',
        alt: 'Motion jacket'
      },
      {
        name: 'Studio Bomber',
        detail: 'Soft structured outer layer',
        image: '/images/bestsellers/images_06.png',
        alt: 'Studio bomber'
      }
    ]
  },
  {
    slug: 'tops',
    index: '02',
    title: 'TOPS',
    cardTitle: 'Tops',
    count: '24 Styles',
    description:
      'Clean tees, knits, and relaxed layers designed to sit comfortably through the day.',
    image: '/images/category/images_15.png',
    alt: 'Tops',
    products: [
      {
        name: 'Essential Crew',
        detail: 'Soft premium sweatshirt',
        image: '/images/category/images_15.png',
        alt: 'Essential crew top'
      },
      {
        name: 'Stretch Tee',
        detail: 'Lightweight movement tee',
        image: '/images/bestsellers/images_03.png',
        alt: 'Stretch tee'
      },
      {
        name: 'Knit Hoodie',
        detail: 'Relaxed daily hoodie',
        image: '/images/bestsellers/images_08.png',
        alt: 'Knit hoodie'
      }
    ]
  },
  {
    slug: 'bottoms',
    index: '03',
    title: 'BOTTOMS',
    cardTitle: 'Bottoms',
    count: '18 Styles',
    description:
      'Easy trousers and active essentials cut for flexible movement and clean silhouettes.',
    image: '/images/category/images_16.png',
    alt: 'Bottoms',
    products: [
      {
        name: 'Utility Trouser',
        detail: 'Relaxed structured pant',
        image: '/images/category/images_16.png',
        alt: 'Utility trouser'
      },
      {
        name: 'Wide Leg Trouser',
        detail: 'Tailored comfort fit',
        image: '/images/bestsellers/images_10.png',
        alt: 'Wide leg trouser'
      },
      {
        name: 'Track Pant',
        detail: 'Soft movement essential',
        image: '/images/bestsellers/images_13.png',
        alt: 'Track pant'
      }
    ]
  }
];
