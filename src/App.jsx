import { RoutesMain } from "../routes/RoutesMain";
import { GlobalStyles } from "../styles/globalStyles";
import { GlobalReset } from "../styles/reset";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//oi
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <RoutesMain />
      <GlobalReset />
      <GlobalStyles />
    </>
  );
}

export default App;
