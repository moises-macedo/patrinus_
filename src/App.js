import { ToastContainer } from "react-toastify";
import { Routes } from "./Routes";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
      />
      <Routes />
    </>
  );
}

export default App;
