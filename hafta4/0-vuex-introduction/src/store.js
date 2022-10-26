import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: "Uygar",
      lname: "Ceylan",
      age: 20,
      adress: {},
      password: "132132",
      tc: "22222222",
    },
    theme: "dark",
    fullName: "Ayda Yazgaç",
    permissions: [1, 2, 3, 4, 5, 6],
    userList: ["Uygar", "Sude", "Ayda"],
    itemList: [
      {
        id: 1,
        title: "Masa",
        type: "Mobilya",
      },
      {
        id: 2,
        title: "Telefon",
        type: "Elektronik",
      },
      {
        id: 3,
        title: "Fırın",
        type: "Mutfak",
      },
      {
        id: 4,
        title: "Sehpa",
        type: "Mobilya",
      },
      {
        id: 5,
        title: "Koltuk",
        type: "Mobilya",
      },
    ],
  },
  mutations: {
    newItem(state, item) {
      state.itemList.push(item);
    },
  },
  actions: {
    newItem({ commit }, item) {
      setTimeout(() => {
        // context.state
        // context.dispatch

        // context.commit("newItem", item);
        commit("newItem", item);
      }, 1000);
    },
  },
  getters: {
    //state'den bilgi alır bize verir tek işi bu!
    _woodItems: (state) => state.itemList.filter((i) => i.type === "Mobilya"),
    _activeUser(state) {
      const user = {
        ...state.user,
      };
      delete user.password;
      return user;
    },
  },
});

export default store;
