<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
            flat
            dense
            round
            @click="toggleLeftDrawer"
            aria-label="Menu"
            icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">

          <q-toolbar-title shrink class="text-weight-bold">
            Schedule
          </q-toolbar-title>
        </q-btn>

        <q-space/>

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn to="/logout" round dense flat color="grey-8" icon="logout" v-if="$q.screen.gt.sm">
            <q-tooltip>Sair</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        class="bg-grey-2"
        :width="240"
    >
      <q-scroll-area class="fit">
        <context-menu  />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {useStore} from 'vuex'
import ContextMenu from '@/components/Menu/ContextMenu.vue'

const store = useStore()

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
onMounted(() => {
  store.commit('initialiseStore')
})
</script>
