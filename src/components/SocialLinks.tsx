import React from 'react';
import Image from './Image';
import socialLinks from '../data/socialLinks';
import './SocialLinks.scss';

function SocialLinks() {
    return (
        <ul className="social__links">
            {socialLinks.map(link => {
                const { title, link: src, imgPath } = link
                return (
                    <li className="social__link">
                        <a href={src} target="_blank" rel="noopener noreferrer"><Image src={imgPath} alt={title} /></a>
                    </li>
                );
            })}
        </ul>
    )
}

export default SocialLinks;