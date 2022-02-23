import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://res.cloudinary.com/harrytimbog/image/upload/v1607697560/p0b86wnq7mtkdijao4tt8zwpdif8.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label className="">Username</label>
          <input type="text" placeholder="Krista" />
          <label className="">Username</label>
          <input type="email" placeholder="krista@gmail.com" />
          <label className="">Username</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
