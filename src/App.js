import "./App.css";
import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <div className="addForm">
        <PostForm />
      </div>
      <div className="posts">
        <div className="syncPosts">
          <h3>Синхронні пости</h3>
          <Posts />
        </div>
        <div className="asyncPosts">
          <h3>Асинхронні пости</h3>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
