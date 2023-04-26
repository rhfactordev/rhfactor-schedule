<template>
  <q-page class="q-gutter-md q-pa-md">
    <q-card class="q-gutter-none">
      <q-card-section>
        <h4 class="q-ma-none text-center">Adicionar agendamento</h4>
      </q-card-section>
      <q-card-section>

        <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
        >

          <q-select filled label="Seleciona a unidade" />
          <q-select filled label="Seleciona a quadra" />

          <q-input filled v-model="schedule.dateTime">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="schedule.dateTime" mask="YYYY-MM-DD HH:mm">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time v-model="schedule.dateTime" mask="YYYY-MM-DD HH:mm" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <div class="text-right">
            <q-btn label="Criar agendamento" type="submit" color="primary"/>
          </div>
        </q-form>



      </q-card-section>
    </q-card>
  </q-page>
</template>


<script setup>
import {ref} from 'vue'

const schedule = ref({
  dateTime : '2019-02-01 12:44'
})
</script>
