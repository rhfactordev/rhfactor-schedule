<template>
  <q-list bordered class="rounded-borders">



    <div v-for="({label, icon, inset, children}, index) in menus" :key="index">

      <q-item v-if="children == null || children.length == 0" :to="to" v-ripple clickable>
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

        <q-item v-for="({label: cLabel, to}, cIndex) in children" :key="cIndex" :to="to" v-ripple clickable>
          <q-item-section>
            <q-item-label>{{ cLabel }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-expansion-item>
    </div>






  </q-list>
</template>

<script setup>

const menus = [
  {icon: 'today', label: 'Agendar', inset: 0},
  {icon: 'calendar_month', label: 'Meus agendamentos', inset: 0},
  {icon: 'person', label: 'Meu perfil', inset: 0},
  {
    icon: 'settings', label: 'Configurações', inset: 0, children: [
      {to: '/settings/users', label: 'Usuários'},
      {to: '/settings/unit', label: 'Unidades'},
      {to: '/settings/time', label: 'Tempo'},
      {to: '/settings/rooms', label: 'Quadras'},
      {to: '/settings/clients', label: 'Clientes'}

    ]
  },
]
</script>
