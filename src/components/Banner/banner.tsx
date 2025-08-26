import "./banner.css";

interface BannerProps {
  img: string;
  alt: string;
}

function Banner({ img, alt }: BannerProps) {
  return (
    <header className="banner">
      <img src={img} alt={alt} />
    </header>
  );
}

export default Banner;
