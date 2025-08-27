import "./btn.css";
import React from 'react';

interface BtnProps {
  children: React.ReactElement | string;
}

function Btn(props: BtnProps) {
  return <button className="btn">{props.children}</button>;
}

export default Btn;
