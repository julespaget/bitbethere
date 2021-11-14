import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Wheel } from "react-custom-roulette";
import { isEmpty, map, random, range, union } from "lodash";
import { useState, useEffect } from "react";
import backgroundBit from "./static/bit2.png";

import rp from "request-promise";
var XMLHttpRequest = require("xhr2");

function App() {
  // var xhr = new XMLHttpRequest();
  const data = union(
    map(range(9), (r) => {
      return { option: "non", style: { backgroundColor: "black", textColor: "white" } };
    }),
    [{ option: "OUI", style: { backgroundColor: "white", textColor: "black" } }]
  );
  const [mustSpin, setMustSpin] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log("value of text : ", text);
    console.log("value of error : ", error);
    if (!isEmpty(text) && error) {
      setError(false);
    }
  }, [text]);

  // var window.location.href = 'https://www.bonjourmadame.fr/page/2/';
  // var _test = require("https://www.bonjourmadame.fr/page/2/");

  // function httpGet(theUrl) {
  //   if (XMLHttpRequest) {
  //     // code for IE7+, Firefox, Chrome, Opera, Safari
  //     xmlhttp = new XMLHttpRequest();
  //   } else {
  //     // code for IE6, IE5
  //     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  //   }
  //   xmlhttp.onreadystatechange = function () {
  //     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  //       return xmlhttp.responseText;
  //     }
  //   };
  //   xmlhttp.open("GET", theUrl, false);
  //   xmlhttp.send();
  // }

  function getUrl(url) {
    // fetch("")
    rp(url).then((html) => console.log(html));
  }
  useEffect(() => {
    // const test = getUrl("https://www.bonjourmadame.fr/page/2/");
    const test = getUrl(
      "https://www.google.com/search?q=bugatti+veyron&tbm=isch&ved=2ahUKEwiC3p7xzpj0AhUKAGMBHZB4C9QQ2-cCegQIABAA&oq=bugatti&gs_lcp=CgNpbWcQARgAMgcIABCxAxBDMgcIABCxAxBDMggIABCABBCxAzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIFCAAQgAQyCAgAEIAEELEDMgsIABCABBCxAxCDAToECAAQQzoICAAQsQMQgwE6BggAEAoQQ1C_BljbEGC6G2gBcAB4AIABbogBmwWSAQM4LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=R2eRYcKeEoqAjLsPkPGtoA0&bih=637&biw=1366"
    );
    console.log("value of test : ", test);
  }, []);

  return (
    <div className="App">
      <div>
        Voici une IA très sophistiquée qui permet de savoir si oui ou non Tib' sera présent pour un
        évènement
      </div>
      <div>
        <label>Entrez l'évenement en question </label>
        <input type="text" onInput={(v) => setText(v)} />
      </div>
      {error && <div>Entre un évènement !</div>}
      <div
        style={{
          backgroundImage: `url(${backgroundBit})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={random(0, 9)}
          data={data}
          backgroundColors={["#3e3e3e", "#df3428"]}
          radiusLineColor={"red"}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
          textColors={["#ffffff"]}
        />
        <button onClick={() => (isEmpty(text) ? setError(true) : setMustSpin(true))}>
          Pour lancer l'intelligence artificielle, CLIQUE ICI !
        </button>
      </div>
    </div>
  );
}

export default App;
