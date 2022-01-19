import React from 'react';
import Image from './Image';
import './InfoCard.scss';

function InfoCard(props) {
    const { imgUrl, title, linkUrl, liveUrl } = props;
    return (
        <div className="info-card">
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                <Image src={imgUrl} alt={title} />
            </a>
            <div className="info-card__title">
                {title}
                {liveUrl && (
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                        Test it out
                        <span className="material-icons">
                            navigate_next
                        </span>
                    </a>
                )}
            </div>
        </div>
    )
}

export default InfoCard;