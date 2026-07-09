import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories } from '@/components/CategorySection/categoryData';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return {
      title: 'Category Not Found | Free Fit'
    };
  }

  return {
    title: `${category.cardTitle} | Free Fit`,
    description: category.description
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="category-page">
        <section className="category-page-hero">
          <div className="wrap">
            <Link href="/#new" className="category-back-link">
              &larr; Full Catalog
            </Link>
            <span className="category-page-count">{category.count}</span>
            <h1>{category.cardTitle}</h1>
            <p>{category.description}</p>
          </div>
        </section>

        <section className="category-products-section">
          <div className="wrap">
            <div className="category-products-head">
              <span>{category.count}</span>
              <p>Three selected pieces from the {category.cardTitle.toLowerCase()} edit.</p>
            </div>

            <div className="category-product-grid">
              {category.products.map((product) => (
                <article className="category-product-card" key={product.name}>
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    className="category-product-img"
                  />
                  <div className="category-product-overlay">
                    <span>{category.count}</span>
                    <h2>{product.name}</h2>
                    <p>{product.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
