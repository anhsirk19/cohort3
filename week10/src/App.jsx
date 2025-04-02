import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {

  return (
    <>
    
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/neet/class11" element={<Class11Program/>}/>
        <Route path="/neet/class12" element={<Class12Program/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path="*" element= {<ErrorPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

function Layout(){
  return <div style={{height : "100vh", background : "skyblue"}}>
    <Header/>
    <div style={{height : "90vh", background : "gray"}}>
    <Outlet />

    </div>
    footer
  </div>
}

function Header(){
  return <>
  <Link to="/">Allen</Link>
    |
    <Link to="/neet/class11">class 11</Link>
    |
    <Link to="/neet/class12">class 12</Link>
  </>
}

function Landing(){
  return <div>
    Welcome to allen
  </div>
}

function ErrorPage(){
  return <div>
    no such rotes available 
  </div>
}

function Class11Program(){
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      navigate("/");
      console.log("inside timer");
    }, 5000);
    return function(){
      console.log("unmount");
      clearInterval(timer);
    }
  }, []);
  return <div>
    class 11 online programs
  </div>
}
function Class12Program(){
  const navigate = useNavigate();
  function backHome(){
    navigate("/")
  }
  return <div>
    class 12 online programs zoom
    <br></br>
    <button onClick={backHome}>back to Home</button>
  </div>
}
export default App
