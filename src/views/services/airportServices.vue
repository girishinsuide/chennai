<template>
    <div class="">
        <v-card class="mx-auto mt-n3" flat>
            <v-img :src="require('../../views/services/images/lostnfound.jpg')" class="my-3" contain />
            <v-card-title class="justify-center text-uppercase page-title">
                chennai airport
            </v-card-title>
            <v-card-subtitle class="text-center">
                <h1>Services</h1>
            </v-card-subtitle>
            </v-card>
            <v-container >
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
                <v-card-title v-text="card.title"></v-card-title>
              <v-spacer></v-spacer>
              <v-btn icon :to="card.path">
                <v-icon>mdi-arrow-right-drop-circle</v-icon>
              </v-btn>              
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
        
    </div>
</template>
<script>
export default {
    components: {

    },

    data() {
        return {
            cards: [
        { title: 'Baggage', path: '/lostfound', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
        { title: 'Lost & Found', path: '/lostfound', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
        { title: 'Special Assistance', path: '/lostfound', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
        { title: 'Meet & Greet', path: '/lostfound', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
        { title: 'Medical Assistance', path: '/lostfound', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
        { title: 'Other Services and Facilities', path: '/lostfound', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      ],
        }
    },

    methods: {},

    computed: {

    },
}
</script>
<style scoped>
.gradi-icon {
    background: linear-gradient(90deg, #00C6FF 0%, #0072FF 100%);
    border-radius: 100px;
    font-style: inherit;
}
</style>