import React from 'react';
import socialLinks from '../data/socialLinks';
import './SocialLinks.scss';

function SocialLinks() {
    return (
        <ul className="social__links">
            {socialLinks.map(link => {
                const { link: src, icon } = link
                return (
                    <li className="social__link">
                        <a href={src} target="_blank" rel="noopener noreferrer">{icon}</a>
                    </li>
                );
            })}
        </ul>
    )
}

export default SocialLinks;