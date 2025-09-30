import React from 'react';


const ServiceCard = (props) => {
    const { category, onCategorySelect } = props;

    if (!category) return null;

    const handleSelect = () => {
        if (typeof onCategorySelect === 'function') onCategorySelect(category.name);
    };

    const handleKeyDown = (e) => {
        // support Enter and Space to activate the card via keyboard
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSelect();
        }
    };

    return (
        <div
            className="service-card"
            role="button"
            tabIndex={0}
            onClick={handleSelect}
            onKeyDown={handleKeyDown}
            aria-pressed={false}
        >
            <h3 className="service-name">{category.name}</h3>
            {/* Prefer explicit description, otherwise show icon and count */}
            {category.description ? (
                <p className="service-description">{category.description}</p>
            ) : (
                <p className="service-description">{category.icon} {category.count}</p>
            )}
        </div>
    );
}

export default ServiceCard