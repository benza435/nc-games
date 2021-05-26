import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import {getCategories} from '../utils/api'

const Nav = () => {
const [categories, setCategories] = useState([])

useEffect(()=>{
    getCategories().then((cats)=>{
        setCategories(cats)})
    .catch(err =>{
        console.log(err)
    })
},[])

    return (
        <div className="app-navbar">
            <ul className="links-list">
         <li className="nav-element">
           <Link to="/reviews">
               All Reviews
           </Link> 

                </li>
           {categories.map((cat)=>{
               return <li key={cat.slug}><Link to={`/reviews/${cat.slug}`}>
                   {cat.slug}
               </Link></li>
           })}
           </ul>
        </div>
    );
};

export default Nav;