function ProviderCard({ provider, onContact }) {
    const handleContact = () => {
        if (typeof onContact === 'function') onContact(provider);
    };

    return (
        <div className="card">
            <img src={provider.image} alt={provider.name} loading="lazy" />
            <h3>{provider.name}</h3>
            <p>{provider.service}</p>
            <p>{provider.price}</p>
            <button type="button" aria-label={`Contact ${provider.name}`} onClick={handleContact}>
                Contact
            </button>
        </div>
    );
}

export default ProviderCard