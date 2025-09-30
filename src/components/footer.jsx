const Footer = (props) => {
    const info = (props && props.info) || { name: 'SpelmanServices', year: new Date().getFullYear() };

    return (
        <footer className="app-footer">
            <p>&copy; {info.year} {info.name}. All rights reserved.</p>
        </footer>
    );
}

export default Footer