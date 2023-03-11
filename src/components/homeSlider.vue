<template>
    <v-carousel cycle :show-arrows="false" hide-delimiter-background class="myslider">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
            <div dark class="overlay">
                <v-row class="fill-height " align="center" justify="center">
                    <div class="text-h4">
                        {{ item.title }}
                    </div>
                </v-row>
            </div>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
    name: 'homeSlider',
    data() {
        return {
            items: [{
                    src: require('../assets/slider/slide1.jpg'),
                    title: "Fly with ease and explore the cultural capital of South India through Chennai Airport."
                },
                {
                    src: require('../assets/slider/slide2.jpg'),
                    title: "Fly with ease and explore the cultural capital of South India through Chennai Airport."

                },
                {
                    src: require('../assets/slider/slide3.jpg'),
                    title: "Fly with ease and explore the cultural capital of South India through Chennai Airport."

                },

            ],
        }
    },
}
</script>
<style scoped>
.overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1
}

.fill-height {
    color: #fff;
}
</style>