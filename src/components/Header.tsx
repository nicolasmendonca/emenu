import React from "react";
import { debounce } from "ts-debounce";

interface IHeaderProps {
  backgroundImageUrl: string;
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ backgroundImageUrl, title }) => {
  const [styles, setStyles] = React.useState({});
  const headerRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offset = headerRef.current
        ? headerRef.current!.getBoundingClientRect().top + scrollTop
        : 0;
      const maxScroll = window.innerWidth;
      const percentScrolled = Math.max(
        (window.scrollY - offset) / maxScroll,
        0
      );
      const blur = Math.min(10, Math.floor(percentScrolled * 10));
      const scale = Math.min(1 + percentScrolled, 2).toFixed(2);

      setStyles({ filter: `blur(${blur}px)`, transform: `scale(${scale})` });
    }, 10);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyles = {
    backgroundImage: `linear-gradient(
        to bottom right,
        rgba(0, 0, 0, 0.2),
        rgba(255, 176, 2, 0.2)
      ),
      url('${backgroundImageUrl}')`,
    ...styles
  };

  return (
    <header
      ref={headerRef}
      className="Header"
      style={{
        filter: "1px"
      }}
    >
      <div className="Header__image" style={headerStyles} />
      <h1 className="Header__title">{title}</h1>
    </header>
  );
};

export default Header;
