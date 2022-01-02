const Footer = () => {
    let todaysYear = new Date().getFullYear();
    return (
        <footer>
            <h4>Copyright &copy; {todaysYear}</h4>
        </footer>
    )
}

export default Footer