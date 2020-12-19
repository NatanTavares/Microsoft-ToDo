import React from 'react';

import { FiSun, FiUsers } from 'react-icons/fi';
import { IoMdStarOutline } from 'react-icons/io';
import { VscCalendar, VscHome, VscMail } from 'react-icons/vsc';
import { AiOutlineUser, AiOutlinePlus } from 'react-icons/ai';
import { MdAttachFile } from 'react-icons/md';
import { ImCheckmark2 } from 'react-icons/im';

import './styles.css';

function SideMenu() {
  return (
    <div className="SideMenu-component">
      <div className="icons-left-side">
        <nav>
          <ul>
            <li>
              <FiSun id="sun-icon" className="icon" />
            </li>
            <li>
              <IoMdStarOutline className="icon" />
            </li>
            <li>
              <VscCalendar className="icon" />
            </li>
            <li>
              <AiOutlineUser className="icon" />
            </li>
            <li className="current">
              <VscHome className="icon" />
            </li>
          </ul>
        </nav>

        <div className="new-list-section">
          <div className="icon-position">
            <AiOutlinePlus id="plus-icon" className="icon" />
          </div>
        </div>
      </div>

      <div className="icons-left-bottom-side"> 
        <button className="mail-button">
          <VscMail className="icon" />
        </button>

        <button>
          <VscCalendar className="icon" />
        </button>
        
        <button>
          <FiUsers className="icon" />
        </button>
        
        <button className="attach-button">
          <MdAttachFile className="icon" />
        </button>

        <button>
            <ImCheckmark2 className="icon" id="checked-icon" />
        </button>
      </div>
    </div>
  );
}

export default SideMenu;
