import React from 'react';

const Hero = () => {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero__content">
        <p className="hero__eyebrow">Welcome</p>
        <h1>Build something remarkable.</h1>
        <p className="hero__text">
          Turn ideas into experiences with thoughtful design, smart development,
          and a clear path to launch.
        </p>

        <div className="hero__actions">
          <button type="button" className="hero__button hero__button--primary">
            Get Started
          </button>
          <button type="button" className="hero__button hero__button--secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
