import {useState} from "react"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextGlobal } from "./Components/utils/global.context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"

function App() {
  const [theme, setTheme] = useState('dark');
  const handleChangeTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };
  return (
      <div className="App">

        <ContextGlobal.Provider value={{theme, handleChangeTheme}}>
          <BrowserRouter>
              <Navbar/>
               <Routes>
                   <Route path = "/" element={<Home />} />
                   <Route path="contacto" element={<Contact />} />
                   <Route path ="users">
                    <Route index element={<Detail />} />
                    <Route path =":id" element={<Detail />}/>
                  </Route>
                  <Route path = "favs" element= {<Favs />} />
                </Routes>
                <Footer/>
          </BrowserRouter>
          </ContextGlobal.Provider>
      </div>
  );
}

export default App;
