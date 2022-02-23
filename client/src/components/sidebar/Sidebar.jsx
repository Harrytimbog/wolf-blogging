import './sidebar.css';

const Sidebar = () => {
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
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
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
