import React from 'react'
import Langsvg from '../../assets/Icon material-language.svg';
import './Header.scss';
import Search from '../Search/Search';
import {useDispatch,connect} from 'react-redux';

class Header extends React.Component{
  
render(){
    return (
            <div className="header">
            <div className="container">
              <div className="header-body">
                <div className="header-body__top">
                    <div className="header-body-language">
                      <ul className="header-body-language-list">
                        <li>
                          <a href="" className="header-body-language-list__link"><img src={Langsvg}/><span>EN</span></a>
                          <ul className="submenu">
                             <li><a href="">EN</a></li>
                             <li><a href="">UA</a></li>
                             <li><a href="">HE</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                </div>
                <div className="header-body__bottom">
                <Search />
                </div>
              </div>
            </div>
         </div>
    )
}
}




export default Header;
