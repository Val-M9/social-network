let inintialState = [
  { id: 1, path: "/profile", name: "Profile" },
  { id: 2, path: "/dialogs", name: "Messages" },
  { id: 3, path: "/friends", name: "Friends" },
  { id: 4, path: "/search-users", name: "Find users" },
  { id: 5, path: "/settings", name: "Settings" },
];

const navbarReducer = (state = inintialState, action) => {
  return state;
};

export default navbarReducer;
