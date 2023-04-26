import { createStore } from 'vuex'
import { tokenKey } from '@/config'

const store = createStore({
  state: {
    token: {},
    user: {},
    sites: [
      { id: 2, name: 'Neovita' },
      { id: 3, name: 'Site teste' }
    ],
    site: {},
    lastPublish: null
  },
  mutations: {
    login (state, payload) {
      state.token = payload
    },
    logout (state) {
      state.token = {}
    },
    selectSite (state, payload) {
      state.site = payload
    },
    updatePublishedDate (state) {
      state.lastPublish = new Date().getTime()
    },
    initialiseStore (state) {
      if (localStorage.getItem(tokenKey)) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem(tokenKey)))
        )
      }
    }
  },
  getters: {
    token (state) {
      return state.token
    },
    isLogged (state) {
      return state.token &&
        state.token.access_token != null &&
        state.token.access_token.length > 20
    },
    selectedSite (state) {
      return state.site
    },
    selectedSiteId (state) {
      return state.site.id
    },
    siteList (state) {
      return state.sites
    },
    lastPublishDate (state) {
      return state.lastPublish
    }
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem(tokenKey, JSON.stringify(state))
})

export default store
