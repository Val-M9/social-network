import profileReducer, { addPost, deletePost } from "../redux/Reducers/ProfileReducer";

let state = {
  posts: [
    { id: 1, post: "Hi, need to talk", likeCount: "10" },
    { id: 2, post: "It's my first post", likeCount: "4" },
  ],
};

it("length of posts should incremented", () => {
  // 1. test data
  let action = addPost("some text added");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});
it("length of posts should decremented", () => {
  // 1. test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(1);
});
