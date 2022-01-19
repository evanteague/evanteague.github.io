import React, { useState, useRef, useEffect } from 'react';
import { Link } from "gatsby"
import classNames from 'classnames';
import navlinks from '../data/navlinks';

import './Navigation.scss';

function getLink(linkData) {
    const { name, path, type, children } = linkData;
    switch(type) {
        case 'external':
            return (
                <a className="navigation__link" href={path} target="_blank" rel="noopener noreferrer">
                    {name}
                    {children && <span className="material-icons">
                        arrow_drop_down
                    </span>}
                </a>
            );
        case 'section':
            return (
                <a className="navigation__link" href={`#${path}`}>
                    {name}
                    {children && <span className="material-icons">
                        arrow_drop_down
                    </span>}
                </a>
            );
        case 'none':
            return (
                <a className="navigation__link">
                    {name}
                    {children && <span className="material-icons">
                        arrow_drop_down
                    </span>}
                </a>
            );
        default:
            return (
                <Link className="navigation__link" to={path}>
                    {name}
                    {children && <span className="material-icons">
                        arrow_drop_down
                    </span>}
                </Link>
            );
    }
}

function Navigation() {
    const [openMainMenu, setOpenMainMenu] = useState(false);
    const [navSticky, setNavSticky] = useState(false);
    const navRef = useRef(null);

    const handleOpenMainMenu = function handleOpenMainMenu() {
        setOpenMainMenu(prevState => !prevState);
    }

    const navClasses = classNames("navigation", {
        "navigation--sticky": navSticky
    });

    const navListClasses = classNames("navigation__list", {
        "navigation__list--open": openMainMenu, 
    });

    const detectScroll = function detectScroll() {
        if (window.scrollY > navRef?.current?.getBoundingClientRect().height) {
            setNavSticky(true);
        } else {
            setNavSticky(false);
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', detectScroll);

        return () => document.removeEventListener('scroll', detectScroll);
    })

    return (
        <nav className={navClasses} ref={navRef}>
            <div className="navigation__container">
                <h2 className="navigation__title">Evan Teague</h2>
                <ul className={navListClasses}>
                    {navlinks.map(link => {
                        return (
                            <li className="navigation__item">
                                {getLink(link)}
                            </li>
                        )
                    })}
                </ul>
                <button className="navigation__menu-btn" onClick={handleOpenMainMenu}>
                    <span className="material-icons">
                        {openMainMenu ? "close" : "menu"}
                    </span>
                </button>
            </div>
        </nav>
    )
}

export default Navigation;