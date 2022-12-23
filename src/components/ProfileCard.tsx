import React from 'react';
import { Email, Home } from '@carbon/icons-react';
import Image from './Image';
import SocialLinks from './SocialLinks';

import './ProfileCard.scss';

function ProfileCard() {
    return (
        <div className="profile-card">
            <div className="profile-card__image">
                <Image src="profile.jpeg" alt="Evan Profile Picture"/>
            </div>
            <div className="profile__description">
                <span className="profile__intro text--medium text--uppercase">Hello everybody, I am</span>
                <h3 className="profile__name text--large text--uppercase">Evan Teague</h3>
                <h4 className="profile__job text--medium text--uppercase">Senior Software Developer</h4>
                <div className="profile__info">
                    <Email size="32" fill="black" />
                    <a href="mailto:eteague13@gmail.com">eteague13@gmail.com</a>
                </div>
                <div className="profile__info">
                    <Home size="32" fill="black" />
                    Maryland
                </div>
                <SocialLinks />
            </div>
        </div>
    )
}

export default ProfileCard;