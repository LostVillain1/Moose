import { createStore } from 'vuex'

export const store = createStore({
  state: {
    positions: [
      {
          name: 'SloobCheese',
          photo: require('@/assets/Sloob.jpg')
      },
      {
          name: 'Los Pollos',
          photo: require('@/assets/LosPollos.jpg')
      }
    ],
  },
  getters: {
    getAllPositions(state)  {
      return state.positions
    }
  },
})

