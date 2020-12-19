import React, { useState } from 'react';

import './styles.css';

import { BsGrid3X3Gap } from 'react-icons/bs';
import { BiQuestionMark } from 'react-icons/bi';
import { VscMegaphone, VscSearch, VscSettingsGear, VscAccount } from 'react-icons/vsc';

function Header() {
  const [searchBarState, setSearchBarState] = useState('');

  return (
    <div className="header-component">
      <header>
        <nav className="menu-left">
          <button className="menu-button">
            <BsGrid3X3Gap className="icon" />
          </button>
          <h3>
            <a href="/">To Do</a>
          </h3>
        </nav>

        <div className="search-bar">
          <VscSearch id="search-icon" className="icon" />
          <input 
            type="text"
            id="search-bar-input"
            value={searchBarState}
            onChange={event => setSearchBarState(event.target.value)} />
        </div>

        <nav className="menu-right">
          <ul>
            <li>
              <button className="menu-button">
                <VscSettingsGear className="icon" />
              </button>
            </li>
            <li>
              <button className="menu-button">
                <BiQuestionMark id="question-icon" className="icon" />
              </button>
            </li>
            <li>
              <button className="menu-button">
                <VscMegaphone className="icon" />
              </button>
            </li>
            <li>
              <button className="menu-button">
                <VscAccount id="user-icon" className="icon"/>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
