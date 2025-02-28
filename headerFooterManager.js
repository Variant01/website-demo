class CommonHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="header-left">
            <a href="index.html" title="go to home page">WEBSITE</a>
            </div>
            <div class="header-middle">
                <a href="deals.html" title="go to deals page">DEALS</a>
                <a href="prebuilt.html" title="go to prebuilt page">PREBUILT</a>
                <a href="custom.html" title="go to custom page">CUSTOM</a>
                <a href="accessories.html" title="go to accessories page">ACCESSORIES</a>
                <a href="software.html" title="go to software page">SOFTWARE</a>
            </div>
            <div class="header-right">
                <a href="index.html" ><i class="fas fa-search" alt="search" title="search"></i></a>
                <a href="index.html" ><i class="fas fa-shopping-cart" alt="cart" title="cart"></i></a>
                <a href="account.html" ><i class="fas fa-user" alt="account" title="account"></i></a>
                <a href="index.html" ><i class="fas fa-bars menu-icon" alt="menu" title="menu"></i></a>
            </div>
        </header>
        `
    }
}
class CommonFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-left">
                <ul>
                    <li><a href="index.html" title="">About us</a></li>
                    <li><a href="contact.html" title="">Contact us</a></li>
                    <li><a href="index.html" title="">Support</a></li>
                    <li><a href="faq.html" title="">FAQs</a></li>
                    <li></li>
                </ul>
            </div>
            <div class="footer-middle">
                <ul>
                    <li><a href="index.html" title="">Terms and Conditions</a></li>
                    <li><a href="index.html" title="">Privacy Policy</a></li>
                    <li><a href="index.html" title="">Sustainability</a></li>
                    <li><a href="index.html" title="">E-Waste Management</a></li>
                </ul>
            </div>
            <div class="footer-right">
                <ul>
                    <li>Connect with us</li>
                    <li>
                        <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook" alt="facebook" title="facebook"></i></a>
                        <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram" alt="instagram" title="instagram"></i></a>
                        <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube" alt="youtube" title="youtube"></i></a>
                        <a href="https://x.com" target="_blank"><i class="fab fa-twitter" alt="x" title="x"></i></a>
                        <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin" alt="linkedin" title="linkedin"></i></a>
                    </li>
                </ul>
            </div>
            <div class="footer-bottom">  
                <p>&copy WEBSITE 2025<p>
            </div>
        </footer>
        `
    }
}

customElements.define('common-header', CommonHeader)
customElements.define('common-footer', CommonFooter)