import React, { useState, useRef, useEffect } from 'react';
import { Link } from "gatsby"
import { CaretDown, Close, Menu } from '@carbon/icons-react';
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
                    {children && <CaretDown size="16" fill="#fff" />}
                </a>
            );
        case 'section':
            return (
                <a className="navigation__link" href={`#${path}`}>
                    {name}
                    {children && <CaretDown size="" fill="#fff" />}
                </a>
            );
        case 'none':
            return (
                <a className="navigation__link">
                    {name}
                    {children && <CaretDown size="16" fill="#fff" />}
                </a>
            );
        default:
            return (
                <Link className="navigation__link" to={path}>
                    {name}
                    {children && <CaretDown size="16" fill="#fff" />}
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
                    {openMainMenu ? <Close size="24" fill="#fff" /> : <Menu size="24" fill="#fff" />}
                </button>
            </div>
        </nav>
    )
}

export default Navigation;