let inintialState = [
  { id: 1, path: "/profile", name: "Profile" },
  { id: 2, path: "/friends", name: "My Friends" },
  { id: 3, path: "/dialogs", name: "Messages" },
  { id: 4, path: "/news", name: "News" },
  { id: 5, path: "/music", name: "Music" },
  { id: 6, path: "/search-users", name: "Find users" },
  { id: 7, path: "/settings", name: "Settings" },
];

const navbarReducer = (state = inintialState, action) => {
  return state;
};

export default navbarReducer;
