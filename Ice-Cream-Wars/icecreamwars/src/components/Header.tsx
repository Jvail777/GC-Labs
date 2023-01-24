import "../css/Header.css";
interface HeaderProps {
  user: string;
}

function Header(props: HeaderProps) {
  return (
    <div className="Header">
      <header>
        <h1 id="H1">Ice Cream Wars</h1>
        <p id="Greeting">Welcome {props.user}</p>
      </header>
    </div>
  );
}

export default Header;
