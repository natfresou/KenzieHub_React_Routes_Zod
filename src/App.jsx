import { RoutesMain } from "../src/routes/RoutesMain";
import { GlobalStyles } from "../src/styles/globalStyles";
import { GlobalReset } from "../src/styles/reset";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./providers/UserContext";

export const App = () => {
  return (
    <>
      <UserProvider>
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
      </UserProvider>
    </>
  );
}

export default App;
