interface Props {
  logo: string;
  title: string;
}

const Header = ({ logo, title }: Props) => {
  return (
    <>
      <header id="header">
        <div className="image">
          <img src={`./${logo}.png`} alt={logo} />
        </div>
        <h1 id="header">{title}</h1>
      </header>
    </>
  );
};

export default Header;
