const firstRowProducts = [
  {
    image: '/images/bestsellers/images_01.png',
    alt: 'Relaxed Fit Overshirt',
    tag: 'Bestseller',
    name: 'Relaxed Overshirt',
    price: '₹2,499'
  },
  {
    image: '/images/bestsellers/images_03.png',
    alt: 'Everyday Stretch Tee',
    tag: 'New',
    name: 'Stretch Tee',
    price: '₹899'
  },
  {
    image: '/images/bestsellers/images_05.png',
    alt: 'Wide Leg Trouser',
    tag: 'Bestseller',
    name: 'Wide Leg Trouser',
    price: '₹2,199'
  },
  {
    image: '/images/bestsellers/images_06.png',
    alt: 'Soft Knit Hoodie',
    tag: 'Trending',
    name: 'Knit Hoodie',
    price: '₹2,899'
  },
  {
    image: '/images/bestsellers/images_08.png',
    alt: 'Cropped Utility Jacket',
    tag: 'New',
    name: 'Utility Jacket',
    price: '₹3,499'
  }
];

const secondRowProducts = [
  {
    image: '/images/bestsellers/images_09.png',
    alt: 'Casual Linen Shirt',
    tag: 'New',
    name: 'Linen Shirt',
    price: '₹1,999'
  },
  {
    image: '/images/bestsellers/images_10.png',
    alt: 'Track Pants',
    tag: 'Bestseller',
    name: 'Track Pants',
    price: '₹1,799'
  },
  {
    image: '/images/bestsellers/images_13.png',
    alt: 'Denim Jacket',
    tag: 'Trending',
    name: 'Denim Jacket',
    price: '₹3,199'
  },
  {
    image: '/images/bestsellers/images_01.png',
    alt: 'Pleated Skirt',
    tag: 'New',
    name: 'Pleated Skirt',
    price: '₹2,099'
  },
  {
    image: '/images/bestsellers/images_03.png',
    alt: 'Sports Bra Set',
    tag: 'Bestseller',
    name: 'Active Set',
    price: '₹1,499'
  }
];

type Product = (typeof firstRowProducts)[number];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="m-card">
      <img src={product.image} alt={product.alt} />
      <div className="m-overlay">
        <span className="m-tag">{product.tag}</span>
        <h4>{product.name}</h4>
        <span className="m-price">{product.price}</span>
      </div>
    </div>
  );
}

function MarqueeRow({ products, reverse = false }: { products: Product[]; reverse?: boolean }) {
  const loopProducts = [...products, ...products];

  return (
    <div className={`marquee-row${reverse ? ' reverse' : ''}`}>
      {loopProducts.map((product, index) => (
        <ProductCard key={`${product.name}-${index}`} product={product} />
      ))}
    </div>
  );
}

export function ProductCarousel() {
  return (
    <section className="infinite-strip" id="bestsellers">
      <div className="strip-head">
        <span>Always In Motion</span>
        <h2>Bestsellers This Week</h2>
      </div>

      <MarqueeRow products={firstRowProducts} />
      <MarqueeRow products={secondRowProducts} reverse />
    </section>
  );
}
