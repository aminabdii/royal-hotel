import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./pages/Home/Home";
import HotelLayout from "./components/HotelLayout/HotelLayout";
import Hotels from "./pages/Hotels/Hotels";
import HotelProvider from "./contexts/HotelProvider/HotelProvider";
import SingleHootel from "./pages/SingleHotel/SingleHootel";
import BookmarkLayout from "./components/BoomarkLayout/BookmarkLayout";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import BookmarkProvider from "./contexts/BookmarkProvider/BookmarkProvider";
import AddNewBookmark from "./pages/Bookmarks/AddNewBookmark/AddNewBookmark";
import Signin from "./pages/Signin/Signin";
import Login from "./pages/login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import ScrollToTop from "./shared/ScrollToTop";

function App() {
  return (
    <AuthProvider>
      <BookmarkProvider>
        <HotelProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/hotels" element={<HotelLayout />}>
                <Route index element={<Hotels />} />
                <Route path=":id" element={<SingleHootel />} />
              </Route>
              <Route
                path="/bookmarks"
                element={
                  <ProtectedRoutes>
                    <BookmarkLayout />
                  </ProtectedRoutes>
                }
              >
                <Route index element={<Bookmarks />} />
                <Route path="add" element={<AddNewBookmark />} />
              </Route>
            </Route>
            <Route path="signin" element={<Signin />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </HotelProvider>
      </BookmarkProvider>
    </AuthProvider>
  );
}

export default App;
