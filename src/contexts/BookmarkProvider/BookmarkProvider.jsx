import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const instance = axios.create({
  baseURL: "  http://localhost:5000",
});

const BookmarkContext = createContext();

const initialState = {
  isLoading: false,
  bookmarks: [],
  bookmark: {},
  error: null,
};

function reducerFunction(state, { type, payload }) {
  switch (type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "bookmarks/loaded":
      return {
        ...state,
        isLoading: false,
        bookmarks: payload,
      };
    case "bookmark/created":
      return {
        ...state,
        isLoading: false,
        bookmark: payload,
        bookmarks: [...state.bookmarks, payload],
      };
    case "bookmark/deleted":
      return {
        ...state,
        isLoading: false,
        bookmarks: state.bookmarks.filter((item) => item.id !== payload),
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
  }
}

const BookmarkProvider = ({ children }) => {
  useEffect(() => {
    async function getBookmarks() {
      dispatch({ type: "loading" });
      try {
        const { data } = await instance.get("/bookmarks");
        dispatch({ type: "bookmarks/loaded", payload: data });
      } catch (error) {
        dispatch({ type: "rejected", payload: error.message });
      }
    }
    getBookmarks();
  }, []);

  async function createBookmark(newBookmark) {
    dispatch({ type: "loading" });
    try {
      await instance.post("/bookmarks", newBookmark);
      dispatch({ type: "bookmark/created", payload: newBookmark });
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  async function deleteBookmark(id) {
    dispatch({ type: "loading" });

    try {
      await instance.delete(`/bookmarks/${id}`);
      dispatch({
        type: "bookmark/deleted",
        payload: id,
      });
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  const [{ isLoading, bookmarks, bookmark, error }, dispatch] = useReducer(
    reducerFunction,
    initialState
  );

  return (
    <BookmarkContext.Provider
      value={{
        isLoading,
        bookmarks,
        error,
        createBookmark,
        deleteBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;

export const useBookmarks = () => useContext(BookmarkContext);
