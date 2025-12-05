const Hero = (props) => {

    const { title = 'Discover Stylists & Services' } = props;

    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h2 className="hero-title">{title}</h2>
                    <p className="hero-subtitle">Book trusted stylists and creators near you</p>
                </div>
                <div className="hero-image" aria-hidden>
                    <img src="/assets/hero.jpg" alt="Stylists working" />
                </div>
            </div>
        </section>
    );

}

export default Hero