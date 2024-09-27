import Footer from "./components/Footer";
import Header from "./components/Header";
import MoviesGrid from "./components/MoviesGrid";
import "./styles.css";

function App() {
  return (
    <>
      <div>
        <div className="container">
          <Header></Header>
          <MoviesGrid></MoviesGrid>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
