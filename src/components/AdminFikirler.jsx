import React, { useState} from "react";
import '../App.css'


const Home = () => {

  const [msg, setMsg] = useState("");

  const yenile = () => {
    setMsg("Tıklandı")
  }
  const sil = () => {
    setMsg("")
  }

  return (
    <div>
      <h1>React</h1><button onClick={yenile}>Yenile</button><button onClick={sil}>Sil</button>
      <div>{msg}</div>
    </div>
  );
};

export default Home;
