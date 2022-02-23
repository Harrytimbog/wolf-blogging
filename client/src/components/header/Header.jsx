import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Travels</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="/images/blog_wallpaper.jpeg" alt="" />
    </div>
  );
}
