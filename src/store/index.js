import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
          positions: [
            {
                name: 'SloobCheese',
                photo: ''
            },
            {
                name: 'Los Pollos',
                photo: ''
            }
          ],
        }
      },
    mutations: {

    }
})