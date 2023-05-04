import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-5 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Food</a>
                    <a className="link link-hover">Chef</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Website</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Employee</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <p className='text-center bg-neutral text-neutral-content'><small>@2023 Sazzad,Bangladesh,All Rights Reserved.</small></p>
        </div>
    );
};

export default Footer;