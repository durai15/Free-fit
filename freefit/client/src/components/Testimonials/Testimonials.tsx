'use client';

import { useTestimonials } from '@/hooks/useTestimonials';

const testimonials = [
  {
    quote: '"I wear this for every long shift — nothing pulls, nothing rides up. It just fits."',
    who: 'Anitha R. · Chennai'
  },
  {
    quote:
      '"The sizing matches the fabric feel — relaxed where it should be, structured where it counts."',
    who: 'Rahul K. · Bengaluru'
  },
  {
    quote:
      '"Ordered three overshirts after the first. Genuinely the most comfortable outerwear I own."',
    who: 'Divya S. · Coimbatore'
  }
];

export function Testimonials() {
  const { activeIndex, setActiveIndex } = useTestimonials(testimonials.length, 5000);

  return (
    <section className="section testimonials" id="reviews">
      <div className="wrap">
        <div className="t-carousel">
          {testimonials.map((testimonial, index) => (
            <div className={`t-slide${activeIndex === index ? ' active' : ''}`} key={testimonial.who}>
              <div className="stars">★★★★★</div>
              <p>{testimonial.quote}</p>
              <div className="who">{testimonial.who}</div>
            </div>
          ))}
          <div className="t-dots">
            {testimonials.map((testimonial, index) => (
              <button
                className={`t-dot${activeIndex === index ? ' active' : ''}`}
                key={testimonial.who}
                type="button"
                aria-label={`Testimonial ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
