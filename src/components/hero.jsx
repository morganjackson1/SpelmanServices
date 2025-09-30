const Hero = (props) => {

    const { title } = props;

    return (
        <section className="hero-section">
            <h2 className="hero-title">{title}</h2>
            <p className="hero-subtitle">Connecting You to Campus Services</p>
        </section>
    );

}

export default Hero