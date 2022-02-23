import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Repositories } from "./components/Repositories";

function App() {
  return (
    <div className="container">
      <Header />
      <Profile />
      <Repositories />
    </div>
  );
}

export default App;
