

export default function Footer() {
    const year = new Date().getFullYear();
    return(
        <footer>
            <br/>
            <br/>
            <p>&copy; {year} ThatSombraCoder All rights reserved</p>
        </footer>
    );
}