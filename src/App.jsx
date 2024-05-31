import { useState } from "react";
import bookLogo from "./assets/books.png";
import RegisterForm from "./components/Register";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      <RegisterForm />
    </>
  );
}

export default App;
