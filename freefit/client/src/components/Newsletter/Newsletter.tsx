'use client';

import { useNewsletter } from '@/hooks/useNewsletter';

export function Newsletter() {
  const { message, handleSubmit } = useNewsletter();

  return (
    <section className="section newsletter-section">
      <div className="wrap">
        <div className="newsletter reveal">
          <h2>Get Early Access</h2>
          <p>New drops, restocks, and fit guides — straight to your inbox.</p>
          <form className="n-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Your email address" required aria-label="Email address" />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
          <p className="n-msg">{message}</p>
        </div>
      </div>
    </section>
  );
}
