<template>
    <div class="">
        <v-card class="mx-auto mt-n3">
            <v-img :src="require('../../views/attheairport/images/dutyfreebanner.jpg')" class="my-3" contain />
            <v-card-title class="justify-center text-uppercase page-title mt-10">
                at the airport
            </v-card-title>
            <v-card-subtitle class="text-center mt-2">
                <h1>How can we help?</h1>
            </v-card-subtitle>
            <v-container class="bg-surface-variant mt-10">
                <v-row no-gutters class="atdariport">
                    <v-col cols="6">
                        <v-sheet class="pa-2">
                            <v-hover>
                                <v-card class="ma-2 imageBox" height="auto" width="100%" :class="`${hover? 'imgover': 'imgleave'}`" slot-scope="{ hover }">
                                    <v-img src="../../views/attheairport/images/dutyfreeimg1.jpg" class="gradi-Box"></v-img>
                                    <div class="imageBox-txt">
                                        <p class="ma-2">Breitling: Watches For World<br> Class Travellers</p>
                                        <v-card-actions>
                                            <v-btn rounded dark class="gradient-button text-capitalize" style="padding:10px 20px !important">
                                                More Info
                                            </v-btn>
                                        </v-card-actions>
                                    </div>
                                </v-card>
                            </v-hover>
                        </v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="pa-2 ">
                            <v-hover>
                                <v-card class="ma-2 imageBox" width="100%" depressed flat :class="`${hover? 'imgover': 'imgleave'}`" slot-scope="{ hover }">
                                    <v-img src="../../views/attheairport/images/dutyfreeimg2.jpg" class="gradi-Box"></v-img>
                                    <div class="imageBox-txt img-box-txt">
                                        <p>Upto 25% off Guerlain<br> Fragrances</p>
                                        <v-card-actions>
                                            <v-btn rounded dark class="gradient-button text-capitalize ml-15" style="padding:10px 20px !important">
                                                More Info
                                            </v-btn>
                                        </v-card-actions>
                                    </div>
                                </v-card>
                            </v-hover>
                        </v-sheet>
                        <v-sheet class="pa-2">
                            <v-hover>
                                <v-card class="ma-2 imageBox" width="100%" depressed flat :class="`${hover? 'imgover': 'imgleave'}`" slot-scope="{ hover }">
                                    <v-img src="../../views/attheairport/images/dutyfreeimg3.jpg" class="gradi-Box"></v-img>
                                    <div class="imageBox-txt img-box-txt">
                                        <p>Explore the Nike tradition <br>with upto 15% off</p>
                                        <v-card-actions>
                                            <v-btn rounded dark class="gradient-button text-capitalize ml-5" style="padding:10px 20px !important">
                                                More Info
                                            </v-btn>
                                        </v-card-actions>
                                    </div>
                                </v-card>
                            </v-hover>
                        </v-sheet>
                    </v-col>
                </v-row>
                <!-- New row Start -->
                <v-row no-gutters class="category mt-15">
                    <v-col cols="2">
                        <v-sheet class="pa-2 ">
                          <v-hover>
                            <v-card :class="`${hover? 'imgover': 'imgleave'}`" slot-scope="{ hover }">
                                <v-img src="../../views/attheairport/images/fashionbox.png"></v-img>
                                <div class="imageBox-txt-two">
                                    <p class="ma-2">Fashion</p>
                                </div>
                            </v-card>
                          </v-hover>
                        </v-sheet>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="2">
                        <v-sheet class="pa-2">
                            <v-hover>
                            <v-card :class="`${hover? 'imgover': 'imgleave'}`" slot-scope="{ hover }">
                                <v-img src="../../views/attheairport/images/beautybox.png"></v-img>
                                <div class="imageBox-txt-two">
                                    <p class="ma-2">Beauty</p>
                                </div>
                            </v-card>
                          </v-hover>
                        </v-sheet>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="2">
                        <v-sheet class="pa-2">
                            <v-hover>
                            <v-card :class="`${hover? 'imgover': 'imgleave'}`" slot-scope="{ hover }">
                                <v-img src="../../views/attheairport/images/liquorbox.png"></v-img>
                                <div class="imageBox-txt-two">
                                    <p class="ma-2">Liquor</p>
                                </div>
                            </v-card>
                          </v-hover>
                        </v-sheet>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="2">
                        <v-sheet class="pa-2">
                            <v-hover>
                            <v-card :class="`${hover? 'imgover': 'imgleave'}`" slot-scope="{ hover }">
                                <v-img src="../../views/attheairport/images/confectionarybox.png"></v-img>
                                <div class="imageBox-txt-two">
                                    <p class="ma-2">Confectionary</p>
                                </div>
                            </v-card>
                          </v-hover>
                        </v-sheet>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="2">
                        <v-sheet class="pa-2">
                            <v-hover>
                            <v-card :class="`${hover? 'imgover': 'imgleave'}`" slot-scope="{ hover }">
                                <v-img src="../../views/attheairport/images/electronicsbox.png"></v-img>
                                <div class="imageBox-txt-two">
                                    <p class="ma-2">Electronics</p>
                                </div>
                            </v-card>
                          </v-hover>
                        </v-sheet>
                    </v-col>
                </v-row>
                <!-- Bestsellers Slider Start -->
                <v-row class="bestseller">
                    <v-col cols="1" md="1">
                        <v-img width="60px" height="60px" src="../../views/attheairport/images/bestsellerIcon.svg" class="mt-2"></v-img>
                    </v-col>
                    <v-col cols="9" md="9">
                        <h2 class="mt-2">Bestsellers </h2>
                        <p>Our range of bestselling products available for your buying needs.</p>
                    </v-col>
                    <v-col cols="2" md="2">
                        <v-card-actions>
                            <v-btn rounded dark class="gradient-button text-capitalize" style="padding:10px 30px !important">
                                View All
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="12">
                        <dutyfreeBestsellerslider />
                    </v-col>
                </v-row>
                <!-- Bestsellers Slider End -->
                <!-- New Arrival Slider Start -->
                <v-row class="newarrival">
                    <v-col cols="1" md="1">
                        <v-img width="60px" height="60px" src="../../views/attheairport/images/new-arrivals.svg" class="mt-2"></v-img>
                    </v-col>
                    <v-col cols="9" md="9">
                        <h2 class="mt-2">New Arrivals </h2>
                        <p>For those looking for our latest releases, you’re in the right place.</p>
                    </v-col>
                    <v-col cols="2" md="2">
                        <v-card-actions>
                            <v-btn rounded dark class="gradient-button text-capitalize" style="padding:10px 30px !important">
                                View All
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="12">
                        <dutyfreeNewarrival />
                    </v-col>
                </v-row>
                <!-- New Arrival Slider End -->
                <!-- exclusive start -->
                <v-row class="mb-15 featuresBlk">
                    <v-col cols="3" md="3">
                        <v-row>
                            <v-col cols="3" md="3">
                                <v-img width="50px" height="50px" src="../../views/attheairport/images/exclusive.svg"></v-img>
                            </v-col>
                            <v-col cols="9" md="9">
                                <h2>Exclusive </h2>
                                <p>Website only Offers</p>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="3" md="3">
                        <v-row>
                            <v-col cols="3" md="3">
                                <v-img width="50px" height="50px" src="../../views/attheairport/images/savemore.svg"></v-img>
                            </v-col>
                            <v-col cols="9" md="9">
                                <h2>Save more</h2>
                                <p>Upto 70% off products</p>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="3" md="3">
                        <v-row>
                            <v-col cols="3" md="3">
                                <v-img width="50px" height="50px" src="../../views/attheairport/images/savemore.svg"></v-img>
                            </v-col>
                            <v-col cols="9" md="9">
                                <h2>Browse and Buy </h2>
                                <p>Convenience first</p>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="3" md="3">
                        <v-row>
                            <v-col cols="3" md="3">
                                <v-img width="50px" height="50px" src="../../views/attheairport/images/joinour.svg"></v-img>
                            </v-col>
                            <v-col cols="9" md="9">
                                <h2>Join our </h2>
                                <p>Global Rewards Program</p>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <!-- exclusive end -->
            </v-container>
        </v-card>
    </div>
</template>
<script>
import dutyfreeBestsellerslider from '../../components/dutyfreeBestsellerslider'
import dutyfreeNewarrival from '../../components/dutyfreeNewarrival'

export default {

    components: {
        dutyfreeBestsellerslider,
        dutyfreeNewarrival,


    },

    data() {

        return {
            BestsellersSlider: '',
            NewArrivalSlider: '',

            slider: [
                "red",
                "green",
                "orange",
                "blue",
                "pink",
                "purple",
                "indigo",
                "cyan",
                "deep-purple",
                "light-green",
                "deep-orange",
                "blue-grey"
            ],


        }

    },
    methods: {
        getColor(status) {
            if (status == "Delayed") return 'red'
            else return 'green'
        },
    },

    computed: {
        columns() {
            if (this.$vuetify.breakpoint.xl) {
                return 4;
            }

            if (this.$vuetify.breakpoint.lg) {
                return 3;
            }

            if (this.$vuetify.breakpoint.md) {
                return 2;
            }

            return 1;
        }
    },
}
</script>
<style scoped>
.gradi-Box {
    position: relative;
    display: inline-block;
    border-radius: 30px !important;

}

.gradi-Box::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: -webkit-gradient(90deg, rgba(17, 24, 39, 0.1) 0.08%, rgba(17, 24, 39, 0.3) 41.89%, rgba(17, 24, 39, 0.8) 100%);
    /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(90deg, rgba(17, 24, 39, 0.1) 0.08%, rgba(17, 24, 39, 0.3) 41.89%, rgba(17, 24, 39, 0.8) 100%);
    /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(90deg, rgba(17, 24, 39, 0.1) 0.08%, rgba(17, 24, 39, 0.3) 41.89%, rgba(17, 24, 39, 0.8) 100%);
    /* Opera 11.10+ */
    background: -ms-linear-gradient(90deg, rgba(17, 24, 39, 0.1) 0.08%, rgba(17, 24, 39, 0.3) 41.89%, rgba(17, 24, 39, 0.8) 100%);
    /* IE10+ */
    background: linear-gradient(90deg, rgba(17, 24, 39, 0.1) 0.08%, rgba(17, 24, 39, 0.3) 41.89%, rgba(17, 24, 39, 0.8) 100%);
    /* W3C */
}

.v-sheet.v-footer:not {
    box-shadow: none;
}

.v-sheet.v-card {
    box-shadow: none !important;
}


.imageBox {
    position: relative;
}

.imageBox-txt {
    position: absolute;
    bottom: 45px;
    left: 25px;
}

.imageBox-txt p {

    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
}


.imageBox-txt span {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
}

.img-box-txt p {
    float: left;
}

.img-box-txt v-btn {
    float: right
}



.gradient-button {font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px !important;
text-align: center;
color: #FFFFFF !important;}

.imageBox-txt-two p {
    position: absolute;
    top: 20px;
    left: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #374151;
}

.gradient-button {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px !important;
    /* identical to box height, or 150% */

    text-align: center;

    color: #FFFFFF !important;
}

.bestseller h2,
.newarrival h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: #374151;
}


.bestseller p,
.newarrival p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #6B7280;
}

.v-carousel {
    height: 350px !important;
}

.bestseller,
.newarrival,
.featuresBlk {
    margin-top: 80px;
}

.featuresBlk h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #374151;
}

.featuresBlk p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #6B7280;
}
</style>