<template>
  <q-list bordered class="rounded-borders">
    <div v-for="({label, icon, inset, path, children}, index) in menus" :key="index">
      <q-item v-if="children == null || children.length == 0" :to="path" v-ripple clickable>
        <q-item-section avatar>
          <q-icon :name="icon"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ label }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-expansion-item
          v-else
          expand-separator
          :content-inset-level="inset"
          :icon="icon"
          :label="label"
      >
        <q-item v-for="({label: cLabel, path: cPath}, cIndex) in children" :key="cIndex" :to="cPath" v-ripple clickable>
          <q-item-section>
            <q-item-label>{{ cLabel }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>
    </div>
  </q-list>
</template>

<script setup>
import {admin} from '@/router/admin.js'
import {user} from '@/router/user.js'

const menus = [
  ...user,
  {
    icon: 'settings', label: 'Configurações', inset: 0, children: [
      ...admin
    ]
  },
]

</script>
