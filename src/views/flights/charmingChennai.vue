<template>
    <div class="">
        <v-card class="mx-auto mt-n3">
            <v-img :src="require('../../views/services/images/lostnfound.jpg')" class="my-3" contain />
            <v-card-title class="justify-center text-uppercase page-title">
                plan your trip
            </v-card-title>
            <v-card-subtitle class="text-center">
                <h1>Discover Chennai</h1>
            </v-card-subtitle>
            <v-container>
                <div class="ml-10 text-center">
                    <p>Chennai, also known as the "Gateway to South India", is a city that is rich in culture, history, and diversity. As soon as you step out of the Chennai airport, you will be welcomed with the warmth of the people and the unique aroma of the city.</p>
                </div>
                <template>
                    <v-card class="mx-auto rounded-xl mt-10 mb-10" max-width="650">
                        <v-img src="../../views/flights/images/slide1.jpg">
                        </v-img>
                    </v-card>
                </template>
                <v-row class="mb-10">
                    <v-col>
                        <p class="text-h6">Chennai is famous for its <span class="primary--text">beautiful beaches, intricate temples, and mouth-watering cuisine.</span> The city is a perfect blend of traditional values and modernity, making it an ideal destination for travelers.</p>
                    </v-col>
                    <v-col>
                        <p>One of the most famous landmarks in Chennai is the Marina Beach, which is the second-longest urban beach in the world. The city is also home to many historic temples such as Kapaleeswarar Temple and the Sri Parthasarathy Temple, which attract thousands of tourists every year.</p>
                        <p>
                            Apart from its natural and cultural beauty, Chennai is also known for its delicious food. From crispy dosas to spicy Chettinad curries, Chennai's cuisine is sure to tantalize your taste buds.</p>
                    </v-col>
                </v-row>
                <chennaiCultureSlider />
                <div class="ml-10 mt-10 text-center text-h6">
                    <p>In conclusion, Chennai is a city that has something for everyone.
                        Whether you are a history buff, a foodie, or a beach lover, Chennai will not disappoint.
                        So come and experience the magic of this beautiful city for yourself!</p>
                </div>
            </v-container>
        </v-card>
    </div>
</template>
<script>
import chennaiCultureSlider from '../../components/chennaiCultureSlider'

export default {

    components: {
        chennaiCultureSlider,


    },

    data() {

        return {



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