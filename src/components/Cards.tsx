import React from 'react';
import InfoCard from '../components/InfoCard';
import './Cards.scss';

function Cards(props) {
    const { data } = props;
    return (
        <div className="cards">
            {data.map(d => <InfoCard title={d.title} linkUrl={d.link} imgUrl={d.imgPath} liveUrl={d.liveUrl} />)}
        </div>
    )
}

export default Cards;