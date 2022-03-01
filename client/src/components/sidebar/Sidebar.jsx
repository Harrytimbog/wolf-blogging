import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(`/categories`);
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://res.cloudinary.com/harrytimbog/image/upload/v1643368675/sdymnii5pc3d3f4wmbfmywvvr2kb.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className="link" key={cat._id}>
              <li className="sidebarListItem">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon topIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon topIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon topIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon topIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
