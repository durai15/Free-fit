import { LogoImage } from '@/components/LogoImage';

const footerColumns = [
  {
    title: 'Shop',
    links: ['New In', 'Bestsellers', 'Outerwear', 'Loungewear']
  },
  {
    title: 'Support',
    links: ['Size Guide', 'Returns', 'Shipping', 'Contact']
  },
  {
    title: 'Company',
    links: ['Our Story', 'Sustainability', 'Careers']
  }
];

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <span className="logo logo-image" aria-label="Free Fit">
              <LogoImage />
            </span>
            <p>
              Clothing engineered for movement. Designed in studio, tested in motion, worn every
              day.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div className="footer-col" key={column.title}>
              <h5>{column.title}</h5>
              {column.links.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Free Fit. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
