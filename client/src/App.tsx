import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "./providers/redux-provider";
import AuthProvider from "./context/auth/AuthProvider";

type Props = {};

export default function App({}: Props) {
  return (
    <AuthProvider>
      <ReduxProvider>
        <Header />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            success: {
              style: {
                color: "white",
                backgroundColor: "green",
              },
            },
            error: {
              style: {
                color: "white",
                backgroundColor: "red",
                opacity: 1,
              },
            },
            style: {
              marginBottom: "10px",
              border: "1px solid #000814 ",
            },
          }}
        />
        <main className="mx-auto min-h-screen max-w-screen-2xl px-4 py-6 font-primary">
          <Outlet />
        </main>
        <Footer />
      </ReduxProvider>
    </AuthProvider>
  );
}
