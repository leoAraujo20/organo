import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social">
          <img src="/images/fb.png" alt="Imagem da logo do Facebook" />
          <img src="/images/ig.png" alt="Imagem da logo do Instagram" />
          <img src="/images/tw.png" alt="Imagem da logo do Twitter" />
        </div>
        <div className="logo">
          <img src="/images/logo.png" alt="Logo do Organo" />
        </div>
        <p>Desenvolvido por Leônidas Araújo</p>
      </div>
    </footer>
  );
}

export default Footer;
