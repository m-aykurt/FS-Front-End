// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
// import ClassComponent from './components/ClassComponent';
// import FunctionalComponent from './components/FunctionalComponent';
// import MyHeader from './components/Styling';
// import MyComponent from './components/Header';
// import Stylesheet from './components/Stylesheet';
import axios from "axios";
// import "./appstyle.css"
// import styles from "./appstyle.module.css"

function App() {
  const [image, setImage] = useState();
  useEffect(() => {
    myApi();
  }, []);

  const myApi = async () => {
    let responseApi
    let url =
      "https://api.unsplash.com/photos/?client_id=XPSdFP5kOS3DgvEgh2x9HRqBPRCu4BUd6ai5eRwi79w";
    await axios.get(url).then((response) => (responseApi = response.data[0]));
    console.log(responseApi)
    setImage(responseApi)
  };
  return (
    <div className="App">
      <img src="https://api.unsplash.com/photos/Yh2Y8avvPec/download?ixid=MnwyNzA4MTZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTYzNTI2ODA0Mw" alt="1" />
      {/* <Stylesheet primary = {true}  /> */}
      {/* <MyComponent/>
      <MyHeader />
      <ClassComponent name = "murat aykurt"/>
      <FunctionalComponent name="Murat Aykurt" dateBirth = "1992" /> */}
    </div>
  );
}

export default App;
