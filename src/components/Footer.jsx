import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa';

function Footer() {
    return (
        <div className="bg-primary text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="https://facebook.com" role="button">
                        <FaFacebookF/></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com" role="button">
                        <FaTwitter/></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://instagram.com"
                       role="button"><FaInstagram/> </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://linkedin.com" role="button">
                        <FaLinkedinIn/></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com" role="button">
                        <FaGithub/></a>
                </section>
            </div>
            <div className="text-center p-3 bg-black">
                © 2023 Copyright &nbsp;
                <a className="text-white" href="https://argentina.com/" target="_blank">Argentina.com</a>
            </div>
        </div>

    );
}

export default Footer;