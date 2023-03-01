<template>
    <div>
        <v-app-bar color="#00308F" dense dark flat>
            <span class="ml-6">Important Notice: Your safety is our priority. Read our COVID-19 Guidelines</span>
            <v-icon class="ml-6">mdi-chevron-right</v-icon>
            <v-spacer></v-spacer>
            <v-icon>mdi-cloud-outline</v-icon>
            <span class="mr-4 ml-2">36 °C Moderate Rain</span>
            <v-icon>mdi-clock</v-icon>
            <span class="mr-4 ml-2">IST 3.20 PM</span>
        </v-app-bar>
        <v-toolbar dense height="110px">
            <v-toolbar-title class='logo-shape'>
                <router-link to="/">
                    <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <!-- <router-link to="/about">
                    <v-btn text plain>
                        Flights
                    </v-btn>
                </router-link> -->
                <div class="top-menu">
                    <v-menu offset-y :nudge-width="1500">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn text plain v-bind="attrs" v-on="on">
                                Flights
                            </v-btn>
                        </template>
                        <v-card class="overflow-hidden">
                            <v-row align="center" justify="center">
                                <v-col class="text-center">
                                    <h2>Flights</h2>
                                </v-col>
                                <v-col>
                                    <v-list>
                                        <v-list-item>
                                            <v-list-item-title>
                                                <router-link to="/flightinformation">
                                                    <v-btn text plain>
                                                        Flight Information
                                                    </v-btn>
                                                </router-link>
                                            </v-list-item-title>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-title>
                                                <router-link to="/about">
                                                    <v-btn text plain>
                                                        Airline Information
                                                    </v-btn>
                                                </router-link>
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                                <v-col>
                                    <v-img :src="require('../assets/images/Ads.jpg')" class="my-3" contain />
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-menu>
                </div>
                <router-link to="/about">
                    <v-btn text plain>
                        To & From Airport
                    </v-btn>
                </router-link>
                <router-link to="/about">
                    <v-btn text plain>
                        Before You Fly
                    </v-btn>
                </router-link>
                <v-btn text plain>
                    At The Airport
                </v-btn>
                <v-btn icon plain>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn icon plain>
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </v-toolbar-items>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-toolbar>
        <div class="right-menu">
            <v-navigation-drawer right v-model="drawer" absolute bottom temporary :width="1500">
                <v-row align="center" justify="center">
                    <v-col><v-img cover :src="require('../assets/images/menu.jpg')" class="my-3" contain /></v-col>
                    <v-col>
                        <v-list nav dense>
                            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                                <v-list-item>
                                    <v-menu top :offset-x="offset" >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-list-item-title v-bind="attrs" v-on="on">Flight</v-list-item-title>
                                        </template>
                                        <v-list>
                                            <v-list-item>
                                                <v-list-item-title>menu1</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-title>menu1</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-title>menu1</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>Before you Fly</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>To & From Airport</v-list-item-title>
                                </v-list-item>
                               
                                <v-list-item>
                                    <v-menu top :offset-x="offset" >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-list-item-title v-bind="attrs" v-on="on">At The Airport</v-list-item-title>
                                        </template>
                                        <v-list>
                                            <v-list-item>
                                                <v-list-item-title>Duty Free</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-title>menu1</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-title>menu1</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-list-item>
                                <v-list-item>
                                    <v-menu top :offset-x="offset">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-list-item-title v-bind="attrs" v-on="on">Services</v-list-item-title>
                                        </template>
                                        <v-list>
                                            <v-list-item>
                                                <v-list-item-title>Baggage</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <router-link to="/lostfound">
                                                    <v-list-item-title>Lost & Found</v-list-item-title>
                                                </router-link>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-title>Special Assistance</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-title>Meet & Greet</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-title>Medical Assistance</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-title>Other Services & Facilities</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>Airport Maps</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>Discover Chennai</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>Contact Us</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>FAQ</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>AAI Officials</v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-col>
                    <v-col></v-col>
                </v-row>
            </v-navigation-drawer>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    showMenu: false,
    data: () => ({
        drawer: false,
        group: null,
        items: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
        ],
        offset: true,
    }),
    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-btn:not(.v-btn--round).v-size--default {
    height: 100%
}

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.top-menu .v-menu__content.theme--light.menuable__content__active {
    width: 100% !important;
    left: 0;
    max-width: 100% !important
}

.v-menu__content{box-shadow: none};
.v-list-item--link::before{background-color: none !important}


 

</style>