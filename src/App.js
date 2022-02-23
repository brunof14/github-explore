import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { EmptyState } from "./components/EmptyState";
import { Repositories } from "./components/Repositories";
import { useGithubData } from "./hooks/useGithubData";

function App() {
  const {
    githubData: { user },
  } = useGithubData();
  return (
    <div className="container">
      <Header />
      {!user ? (
        <EmptyState />
      ) : (
        <>
          <Profile />
          <Repositories />
        </>
      )}
    </div>
  );
}

export default App;
