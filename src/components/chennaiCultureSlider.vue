<template>
    <v-container>
        <v-row class="">
            <v-col cols="12">
                <slick ref="slick" :options="slickOptions" class="culture-slider">
                    <v-card dark class="rounded-xl">
                        <v-img src="../assets/images/MarinaBeach.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="400">
                            <v-card-title class="text-h5">Visit Marina Beach</v-card-title>
                            <v-card-subtitle>Marina Beach is the second-longest urban beach in the world, stretching over 13 kilometers. You can take a stroll along the beach, enjoy the fresh sea breeze, and watch the sunset.</v-card-subtitle>
                        </v-img>
                    </v-card>
                    <v-card dark class="rounded-xl">
                        <v-img src="../assets/images/MarinaBeach.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="400">
                            <v-card-title class="text-h5">Explore Fort St. George</v-card-title>
                            <v-card-subtitle>This historic fort was built by the British in the 17th century and houses the Fort Museum. You can learn about the history of Chennai and the British colonial era.</v-card-subtitle>
                        </v-img>
                    </v-card>
                    <v-card dark class="rounded-xl">
                        <v-img src="../assets/images/MarinaBeach.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="400">
                            <v-card-title class="text-h5">Experience the Nightlife</v-card-title>
                            <v-card-subtitle>
Chennai has a vibrant nightlife scene, with many bars, nightclubs, and rooftop restaurants that offer stunning views of the city skyline.</v-card-subtitle>
                        </v-img>
                    </v-card>

                </slick>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Slick from 'vue-slick';
export default {
    components: { Slick },
    name: 'CarouselExample',
    data() {
        return {
            slickOptions: {
                dots: true,
                infinite: true,
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                // Any other options that can be got from plugin documentation
            },
        };
    },

}
</script>
<style scoped>

.culture-slider .v-card__subtitle{margin-bottom: 30px; margin-top: 5px;}
.culture-slider .slick-slide{width: 80% !important}
</style>