'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type TransitionEvent } from 'react';
import { categories, type Category } from '@/components/CategorySection/categoryData';

type CatalogRowProps = {
  category: Category;
  rowIndex: number;
  isActive: boolean;
  showPreview: boolean;
  onPreview: (rowIndex: number, category: Category) => void;
  onPreviewEnd: (event: TransitionEvent<HTMLDivElement>) => void;
};

function CatalogRow({
  category,
  rowIndex,
  isActive,
  showPreview,
  onPreview,
  onPreviewEnd
}: CatalogRowProps) {
  return (
    <Link
      className="catalog-row"
      href={`/category/${category.slug}`}
      aria-label={`View ${category.cardTitle} category`}
      onMouseEnter={() => onPreview(rowIndex, category)}
    >
      <span className="catalog-index">{category.index}</span>
      <div className="catalog-name-group">
        <h3>{category.title}</h3>
        <span>{category.count}</span>
      </div>
      <div className="catalog-preview-slot">
        {showPreview ? (
          <div
            className={`catalog-preview${isActive ? ' active' : ''}`}
            onTransitionEnd={onPreviewEnd}
          >
            <Image
              src={category.image}
              alt={`${category.cardTitle} preview`}
              fill
              sizes="280px"
              className="catalog-preview-img"
            />
          </div>
        ) : null}
      </div>
      <span className="catalog-arrow-button" aria-hidden="true">
        &rarr;
      </span>
    </Link>
  );
}

export function CategorySection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [previewCategory, setPreviewCategory] = useState<Category | null>(null);

  const handlePreview = (rowIndex: number, category: Category) => {
    setPreviewCategory(category);
    setActiveCategory(rowIndex);
  };

  const hidePreview = () => {
    setActiveCategory(null);
  };

  const handlePreviewEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName === 'opacity' && activeCategory === null) {
      setPreviewCategory(null);
    }
  };

  return (
    <section className="catalog-section" id="new">
      <div className="wrap">
        <div className="catalog-head">
          <h2>FULL CATALOG</h2>
          <p>Every category, indexed. Hover a row to preview.</p>
        </div>

        <div className="catalog-list" onMouseLeave={hidePreview}>
          {categories.map((category, index) => (
            <CatalogRow
              category={category}
              rowIndex={index}
              isActive={activeCategory === index}
              showPreview={previewCategory?.slug === category.slug}
              onPreview={handlePreview}
              onPreviewEnd={handlePreviewEnd}
              key={category.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
