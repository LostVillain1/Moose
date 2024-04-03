import { createStore } from 'vuex'

export const store = createStore({
    state: {
      positions: [
        {
            name: 'SloobCheese',
            photo: '@/assets/first.jpg'
        },
        {
            name: 'Los Pollos',
            photo: '@/assets/second.jpg'
        }
      ],
    },
    getters: {
      getAllPositions: (state) => {
        console.log(state)
        return state.positions
      }
    },
})