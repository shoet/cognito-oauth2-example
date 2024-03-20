import { BaseLayout } from "./components/layout/BaseLayout";
import { AuthContextProvider } from "./context/AuthContext";
import { LoginPage } from "./pages/LoginPage";
import "@aws-amplify/ui-react/styles.css";

// import './App.css'

function App() {
  return (
    <>
      <AuthContextProvider>
        <BaseLayout>
          <LoginPage />
        </BaseLayout>
      </AuthContextProvider>
    </>
  );
}

export default App;
