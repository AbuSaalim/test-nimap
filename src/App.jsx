import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingPage from "./pages/UpcomingPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import SearchPage from "./pages/SearchPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="bg-dark">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
