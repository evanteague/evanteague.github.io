import React from 'react';
import classNames from 'classnames';
import "./Image.scss";

function Image(props) {
    const { src, alt, className } = props;
    const classes = classNames("image__container", className);
    return (
        <div className={classes}>
            <img src={src} alt={alt} />
        </div>
    )
}

export default Image;