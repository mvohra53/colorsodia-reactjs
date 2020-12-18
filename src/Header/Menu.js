import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {SITE_URL,HEADER_MENU_URL} from '../Constants';
const Menu = () => {
    const [menuList,setMenus] = useState([]);
    useEffect(()=>{
        getMenus();
    },[]);
    const getMenus = async ()=>{
        await axios.get(`${HEADER_MENU_URL}`)
        .then((response)=>{
            let items = response.data.items;
            setMenus(items);
        })
        .catch((error)=>{
            console.error(error);
        });
    }
    const createMenuList = (items)=>{
        return (
            <ul>
                {items.map(function (i) {
                    let replaceURl = (i.url).replace(SITE_URL,'');
                    return <li key={"social_h_" + i.id}>
                    {
                        i.target === '_blank' && 
                        <a href={i.url} target="_blank" rel="noreferrer">{i.title}</a>
                    }
                    {
                        i.target !== '_blank' && 
                        <NavLink to={replaceURl} activeClassName="selected">
                            {/* <img src={i.icon} alt={i.name} /> */}
                            {i.title}
                        </NavLink>
                    }
                    {typeof(i.children) !== "undefined" && createMenuList(i.children)}
                </li>;
                })}
            </ul>
        )
    }
    return (
        <div className="common-h nav-h">
            <nav>
                <div className="collapse navbar-collapse js-navbar-collapse">
                    {menuList.length > 0 && createMenuList(menuList)}
                </div>
            </nav>
        </div>
    );
};
export default Menu;