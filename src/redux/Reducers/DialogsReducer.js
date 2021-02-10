const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Val",
      ava:
        "data:image/png;base64,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",
    },
    {
      id: 2,
      name: "Roman",
      ava:
        "data:image/png;base64,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",
    },
    {
      id: 3,
      name: "Nik",
      ava:
        "data:image/png;base64,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",
    },
    {
      id: 4,
      name: "Maria",
      ava:
        "https://i.pinimg.com/originals/4d/be/f2/4dbef203bdbb796f95cd3b395d263f09.jpg",
    },

    {
      id: 5,
      name: "Oksana",
      ava:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdH4kcHCeAQE00YGCQuzt1UvcpwymmNybew&usqp=CAU",
    },
  ],
  messages: [
    { id: 1, message: "Hello, how're you" },
    { id: 2, message: "Need to meet ASAP" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: action.newMessage,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

export const sendMessageAC = (newMessage) => ({
  type: SEND_MESSAGE,
  newMessage,
});

export default dialogsReducer;
