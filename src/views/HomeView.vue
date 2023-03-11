<template>
    <div class="home">
        <homeSlider />
        <v-container>
        <v-card class="mx-auto mt-n12 rounded-xl" >
            <v-row>
                <v-col>
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="text-h5 pt-2 pl-10 ">
                                Find your Flight
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col>
                    <v-list-item >
                        <v-list-item-content>
                            <div class="">
                                <v-text-field class="mt-0 pt-2"  label="Search by City / Flight no." hide-details prepend-icon="mdi-magnify" two-line></v-text-field>
                            </div>
                            <!-- <v-list-item-subtitle>by City / Flight no.</v-list-item-subtitle> -->
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col>
                    <v-list-item two-line>
                        <v-list-item-content>
                            <div class="text-overline">
                                <v-select class="mt-0 pt-2" label="Arrivals or Departures" hide-details two-line :items="['Arrivals', 'Departures']">
                                    <template v-slot:item="{ item, attrs, on }">
                                        <v-list-item v-bind="attrs" v-on="on">
                                            <v-list-item-title :id="attrs['aria-labelledby']" v-text="item"></v-list-item-title>
                                        </v-list-item>
                                    </template>
                                </v-select>
                            </div>
                            <!-- <v-list-item-subtitle>or Departures</v-list-item-subtitle> -->
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col>
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-btn rounded color="" dark large class="gradient-button">
                                Search
                            </v-btn>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
        <v-card v-scrollanimation flat class="mt-10 mb-10">
            <v-card-text class="text-center justify-center  ">
                <h4 class="text-uppercase">airport guide</h4>
                <h2 class="font-weight-bold text-h2 basil--text">
                    How can we help?
                </h2>
            </v-card-text>
            <v-tabs background-color=" accent-4" centered class="mytabs">
                <v-tab href="#tab1" class="border-radiusbefore">
                    To & From the Airport
                </v-tab>
                <v-tab-item value="tab1">
                    <v-row>
                        <v-col cols="4">
                            <v-hover>
                                <div slot-scope="{ hover }" :class="`${hover? 'imgover': 'imgleave'}`">
                                    <v-img src="../assets/images/train.png" width="90%"></v-img>
                                </div>
                            </v-hover>
                        </v-col>
                        <v-col cols="8">
                            <v-card class="mx-auto" width="90%" :elevation="0">
                                <v-card-text>
                                    <p class="text-h4 text--primary">To & From the Airport</p>
                                    <p class="text--primary">
                                        Lorem ipsum dolor sit amet unc consectetur nulla tincidunt Lorem ipsum dolor sit amet unc consectetur nulla
                                    </p>
                                </v-card-text>
                                <v-row>
                                    <v-col>
                                        <v-list flat>
                                            <v-list-item-group color="primary">
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Parking</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Metro Train</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Suburban Train</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Public Bus</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list-item-group>
                                        </v-list>
                                    </v-col>
                                    <v-col>
                                        <v-list flat>
                                            <v-list-item-group color="primary">
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Taxis / Cabs</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Car Rentals</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Pick up & Drop off</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list-item-group>
                                        </v-list>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab href="#tab2">
                    Before You Fly
                </v-tab>
                <v-tab-item value="tab2">
                    <v-row>
                        <v-col cols="4">
                            <v-img src="../assets/images/train.png" width="90%"></v-img>
                        </v-col>
                        <v-col cols="8">
                            <v-card class="mx-auto" width="90%" :elevation="0">
                                <v-card-text>
                                    <p class="text-h4 text--primary">Before You Fly</p>
                                    <p class="text--primary">
                                        Lorem ipsum dolor sit amet unc consectetur nulla tincidunt Lorem ipsum dolor sit amet unc consectetur nulla tincidunt
                                    </p>
                                </v-card-text>
                                <v-row>
                                    <v-col>
                                        <v-list flat>
                                            <v-list-item-group color="primary">
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Arrival Guide</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Deprture Guide</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Transit Guide</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Passenger Charter</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list-item-group>
                                        </v-list>
                                    </v-col>
                                    <v-col>
                                        <v-list flat>
                                            <v-list-item-group color="primary">
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Covid-19 Guidelines</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Waiting Time</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Airport Maps</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list-item-group>
                                        </v-list>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab href="#tab3" class="border-radiusafter">
                    At the Airport
                </v-tab>
                <v-tab-item value="tab3">
                    <v-row>
                        <v-col cols="4">
                            <v-img src="../assets/images/train.png" width="90%"></v-img>
                        </v-col>
                        <v-col cols="8">
                            <v-card class="mx-auto" width="90%" :elevation="0">
                                <v-card-text>
                                    <p class="text-h4 text--primary">At the Airport</p>
                                    <p class="text--primary">
                                        Lorem ipsum dolor sit amet unc consectetur nulla tincidunt Lorem ipsum dolor sit amet unc consectetur nulla tincidunt
                                    </p>
                                </v-card-text>
                                <v-row>
                                    <v-col>
                                        <v-list flat>
                                            <v-list-item-group color="primary">
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Baggage</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <router-link to="/lostfound">
                                                            <v-list-item-title>Lost & Found</v-list-item-title>
                                                        </router-link>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Special Assistance</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Meet & Greet</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list-item-group>
                                        </v-list>
                                    </v-col>
                                    <v-col>
                                        <v-list flat>
                                            <v-list-item-group color="primary">
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Other Services & Facilities</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Shopping and Duty Free</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Food and Drink</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon large color="blue darken-2">
                                                            mdi-arrow-right-drop-circle-outline
                                                        </v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Lounges</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list-item-group>
                                        </v-list>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs>
        </v-card>
        <v-card v-scrollanimation class="mb-10">
            <v-img height="50%" src="../assets/images/experience-airport.jpg">
                <v-card flat width=80% style="margin:0 auto; background:none" class="rounded-xl
">
                    <v-card-text class="mt-10 vertical-tab-title">
                        <div class=" mt-10 text-uppercase white--text">experience</div>
                        <p class="text-h2  white--text">
                            Chennai Airport
                        </p>
                    </v-card-text>
                    <v-tabs vertical class="vertical-tab">
                        <v-tab class="">
                            <v-icon left>
                                mdi-arrow-right-drop-circle-outline
                            </v-icon>
                            Food & Drink
                        </v-tab>
                        <v-tab class="">
                            <v-icon left>
                                mdi-arrow-right-drop-circle-outline
                            </v-icon>
                            Shopping & Duty Free
                        </v-tab>
                        <v-tab class="">
                            <v-icon left>
                                mdi-arrow-right-drop-circle-outline
                            </v-icon>
                            Relax & Unwind
                        </v-tab>
                        <v-tab-item>
                            <v-card flat class="mx-auto" tile>
                                <v-list>
                                    <v-list-item-group color="primary">
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <v-img :src="require('../assets/images/icon.jpg')"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>Accessorize London</v-list-item-title>
                                                <v-list-item-subtitle>Accessories, Fashion</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <v-img :src="require('../assets/images/icon.jpg')"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>Forest Essentials</v-list-item-title>
                                                <v-list-item-subtitle>Beauty & Grooming</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <v-img :src="require('../assets/images/icon.jpg')"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>FabIndia</v-list-item-title>
                                                <v-list-item-subtitle>Clothing, Accessories</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                                <v-card-actions>
                                    <v-btn block rounded dark class="gradient-button">
                                        Explore All
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat class="mx-auto" tile>
                                <v-list>
                                    <v-list-item-group color="primary">
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <v-img :src="require('../assets/images/icon.jpg')"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>Accessorize London</v-list-item-title>
                                                <v-list-item-subtitle>Accessories, Fashion</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <v-img :src="require('../assets/images/icon.jpg')"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>Forest Essentials</v-list-item-title>
                                                <v-list-item-subtitle>Beauty & Grooming</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <v-img :src="require('../assets/images/icon.jpg')"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>FabIndia</v-list-item-title>
                                                <v-list-item-subtitle>Clothing, Accessories</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                                <v-card-actions>
                                    <v-btn block rounded dark class="gradient-button">
                                        Explore All
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat class="mx-auto" tile>
                                <v-list>
                                    <v-list-item-group color="primary">
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <v-img :src="require('../assets/images/icon.jpg')"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>Accessorize London</v-list-item-title>
                                                <v-list-item-subtitle>Accessories, Fashion</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <v-img :src="require('../assets/images/icon.jpg')"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>Forest Essentials</v-list-item-title>
                                                <v-list-item-subtitle>Beauty & Grooming</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <v-img :src="require('../assets/images/icon.jpg')"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>FabIndia</v-list-item-title>
                                                <v-list-item-subtitle>Clothing, Accessories</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                                <v-card-actions>
                                    <v-btn block rounded dark class="gradient-button">
                                        Explore All
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-img>
        </v-card>
        <v-row v-scrollanimation>
            <v-col cols="6">
                <v-card flat class="mx-auto float-right" width="75%">
                    <v-card-text>
                        <div class="mb-4">plan your trip</div>
                        <p class="text-h3 text--primary mb-10">
                            Charming Chennai
                        </p>
                        <div class="text--primary">
                            If you’re a first-time traveller, here are some experiences that can help you plan your trip to Chennai.
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <router-link to="/charmingChennai">
                        <v-btn rounded dark class="gradient-button " style="padding:10px 20px !important">
                            Let’s Go
                        </v-btn>
                    </router-link>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-hover>
                    <v-card flat class="float-right mb-10" width="80%" slot-scope="{ hover }" :class="`${hover? 'imgover': 'imgleave'}`">
                        <v-img :src="require('../assets/images/frame.png')"></v-img>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    // @ is an alias to /src
import homeSlider from '../components/homeSlider'

export default {
    name: 'HomeView',
    components: {
        homeSlider,

    },
    data: () => ({
}),

}
</script>
<style type="text/css">

</style>