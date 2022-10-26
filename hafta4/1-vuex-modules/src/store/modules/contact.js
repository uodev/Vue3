export default {
  namespaced: true,

  state: {
    contactName: "puresol",
    contactAdress: "Turkey",
    propertyList: [],
  },
  mutations: {
    setItem(state, name) {
      state.contactName = name;
    },
  },
  getters: {
    _contactName: (state) => state.contactName,
    _itemList: (state) => state.propertyList,
  },
};
