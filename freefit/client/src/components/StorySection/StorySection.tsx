const stats = [
  { value: '40K+', label: 'Fit Tests Run' },
  { value: '98%', label: 'Reorder Rate' },
  { value: '4.8★', label: 'Avg. Rating' }
];

export function StorySection() {
  return (
    <section className="section story" id="story">
      <div className="wrap story-inner">
        <div className="story-img reveal">
          <img src="/images/ourstory/imgaes_14.png" alt="Free Fit design process" />
        </div>
        <div className="reveal">
          <span className="eyebrow story-eyebrow">Our Philosophy</span>
          <h2 className="story-title">Built Around The Fit, Not The Size</h2>
          <p>
            Every Free Fit piece is pattern-tested on real bodies in real motion — walking,
            reaching, sitting, stretching — before it ever reaches a rack.
          </p>
          <p>No stiff seams. No restrictive cuts. Just fabric that keeps up.</p>
          <div className="stat-row">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span>{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
