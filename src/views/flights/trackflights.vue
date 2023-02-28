<template>
    <div class="home">
        <v-card class="mx-auto mt-n3" flat>
            <v-img :src="require('../../views/services/images/lostnfound.jpg')" class="my-3" contain />
            <v-container>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar size="x-large" class="rounded-lg">
                            <v-img :src="require('../../assets/images/flights/emirates.svg')" class="my-3" contain />
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="text-h5"> EK 568</v-list-item-title>
                            <v-list-item-subtitle>Emirates</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-icon>
                            <v-chip large class="ma-2 pl-10 pr-10" color="#BBF7D0" text-color="green">
                                On Time
                            </v-chip>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>
                <v-row align="center">
                    <v-col cols="2">
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5"> EK 568</v-list-item-title>
                                    <v-list-item-subtitle>Emirates</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col cols="8">
                        <v-slider append-icon="mdi-record-circle-outline" prepend-icon="mdi-record-circle-outline" v-model="sliderValue" thumb-color="primary" thumb-label="always"  hide-details>
                            <template v-slot:thumb-label>
                                <v-icon dark>mdi-airplane-takeoff</v-icon>
                            </template>
                        </v-slider>
                    </v-col>
                    <v-col cols="2">
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5"> EK 568</v-list-item-title>
                                    <v-list-item-subtitle>Emirates</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
                <v-row class="mt-5 mb-10">
                    <v-col>
                        <v-list>
                            <v-list-item>
                                <v-list-item-avatar class="rounded-lg" size="62">
                                    <v-icon x-large class=" lighten-1" style="border:2px solid #D1D5DB">
                                        mdi-clock-outline
                                    </v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h6"> Scheduled</v-list-item-title>
                                    <v-list-item-subtitle>14:10</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col>
                        <v-list>
                            <v-list-item>
                                <v-list-item-avatar class="rounded-lg" size="62">
                                    <v-icon x-large class=" lighten-1" style="border:2px solid #D1D5DB">
                                        mdi-timer-plus-outline
                                    </v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h6"> Estimated</v-list-item-title>
                                    <v-list-item-subtitle>14:23</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col>
                        <v-list>
                            <v-list-item>
                                <v-list-item-avatar class="rounded-lg" size="62">
                                    <v-icon x-large class=" lighten-1" style="border:2px solid #D1D5DB">
                                        mdi-airport
                                    </v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h6"> Terminal</v-list-item-title>
                                    <v-list-item-subtitle>T4</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col>
                        <v-list>
                            <v-list-item>
                                <v-list-item-avatar class="rounded-lg" size="62">
                                    <v-icon x-large class=" lighten-1 " light style="border:2px solid #D1D5DB">
                                        mdi-bag-suitcase
                                    </v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h6"> Baggage</v-list-item-title>
                                    <v-list-item-subtitle>Belt 7</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
                <v-row class="mb-10">
                    <v-col>
                        <v-card flat>
                            <v-card-actions>
                                <v-btn depressed rounded large color="#E8EFFE" class="pl-4 pr-4">
                                    <v-icon left>mdi-airplane</v-icon>
                                    Back to Flights
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn depressed rounded dark large class="gradient-button pl-10 pr-10">
                                    <v-icon left>mdi-plus</v-icon>
                                    Track Flight
                                </v-btn>
                                <v-btn text class="ml-10 mr-10" color="#00C6FF">
                                    <v-icon left>mdi-share-variant</v-icon>
                                    Share Flight
                                </v-btn>
                                <v-btn text color="#00C6FF">
                                    <v-icon left>mdi-phone</v-icon>
                                    Contact Airline
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-card-title class="justify-center text-uppercase page-title mb-2">
                next steps
            </v-card-title>
            <v-card-subtitle class="text-center  mb-4">
                <h1>Your Itinerary</h1>
            </v-card-subtitle>
            <v-tabs background-color=" accent-4" centered class="mytabs">
                <v-tab href="#tab1" class="border-radiusbefore">
                    Immigration
                </v-tab>
                <v-tab-item value="tab1">
                    <v-row>
                        <v-col cols="4">
                            <v-hover>
                                <div slot-scope="{ hover }" :class="`${hover? 'imgover': 'imgleave'}`">
                                    <v-img src="../../assets/images/train.png" width="90%"></v-img>
                                </div>
                            </v-hover>
                        </v-col>
                        <v-col cols="8">
                            <v-card class="mx-auto" width="90%" :elevation="0">
                                <v-card-text>
                                    <p class="text-h4 text--primary">Immigration</p>
                                    <p class="text--primary">
                                        Upon your arrival at the Airport make sure all your documents are kept ready before reaching the Immigration Hall.</p>
                                    <p class="text--primary">
                                        Please follow the Signage available near the transfer area</p>
                                    <p class="text--primary">
                                        We have 48 Immigration counters & 46 E-visa counter/ Visa Counters at the Arrival Section.</p>
                                    <p class="text--primary">
                                        We have 60 Immigration counters & 4 counters at the Domestic to International Transfer.</p>
                                    <p class="text--primary">
                                        For details on immigration requirements, please visit <a href="http://boi.gov.in" target="_blank">http://boi.gov.in/</a></p>
                                </v-card-text>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-avatar class="rounded-lg" size="62">
                                            <v-icon x-large class=" lighten-1" style="border:2px solid #D1D5DB">
                                                mdi-clock-outline
                                            </v-icon>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title> Immigration Waiting Time</v-list-item-title>
                                            <v-list-item-subtitle>14:10</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab href="#tab2">
                    Baggage
                </v-tab>
                <v-tab-item value="tab2">
                    <v-row>
                        <v-col cols="4">
                            <v-hover>
                                <div slot-scope="{ hover }" :class="`${hover? 'imgover': 'imgleave'}`">
                                    <v-img src="../../assets/images/train.png" width="90%"></v-img>
                                </div>
                            </v-hover>
                        </v-col>
                        <v-col cols="8">
                            <v-card class="mx-auto" width="90%" :elevation="0">
                                <v-card-text>
                                    <p class="text-h4 text--primary">Baggage</p>
                                    <p class="text--primary">
                                        Upon your arrival at the Airport make sure all your documents are kept ready before reaching the Immigration Hall.</p>
                                    <p class="text--primary">
                                        Please follow the Signage available near the transfer area</p>
                                    <p class="text--primary">
                                        We have 48 Immigration counters & 46 E-visa counter/ Visa Counters at the Arrival Section.</p>
                                    <p class="text--primary">
                                        We have 60 Immigration counters & 4 counters at the Domestic to International Transfer.</p>
                                    <p class="text--primary">
                                        For details on immigration requirements, please visit <a href="http://boi.gov.in" target="_blank">http://boi.gov.in/</a></p>
                                </v-card-text>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-avatar class="rounded-lg" size="62">
                                            <v-icon x-large class=" lighten-1" style="border:2px solid #D1D5DB">
                                                mdi-clock-outline
                                            </v-icon>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title> Immigration Waiting Time</v-list-item-title>
                                            <v-list-item-subtitle>14:10</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab href="#tab3">
                    Customs
                </v-tab>
                <v-tab-item value="tab3">
                    <v-row>
                        <v-col cols="4">
                            <v-hover>
                                <div slot-scope="{ hover }" :class="`${hover? 'imgover': 'imgleave'}`">
                                    <v-img src="../../assets/images/train.png" width="90%"></v-img>
                                </div>
                            </v-hover>
                        </v-col>
                        <v-col cols="8">
                            <v-card class="mx-auto" width="90%" :elevation="0">
                                <v-card-text>
                                    <p class="text-h4 text--primary">Customs</p>
                                    <p class="text--primary">
                                        Upon your arrival at the Airport make sure all your documents are kept ready before reaching the Immigration Hall.</p>
                                    <p class="text--primary">
                                        Please follow the Signage available near the transfer area</p>
                                    <p class="text--primary">
                                        We have 48 Immigration counters & 46 E-visa counter/ Visa Counters at the Arrival Section.</p>
                                    <p class="text--primary">
                                        We have 60 Immigration counters & 4 counters at the Domestic to International Transfer.</p>
                                    <p class="text--primary">
                                        For details on immigration requirements, please visit <a href="http://boi.gov.in" target="_blank">http://boi.gov.in/</a></p>
                                </v-card-text>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-avatar class="rounded-lg" size="62">
                                            <v-icon x-large class=" lighten-1" style="border:2px solid #D1D5DB">
                                                mdi-clock-outline
                                            </v-icon>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title> Immigration Waiting Time</v-list-item-title>
                                            <v-list-item-subtitle>14:10</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab href="#tab4" class="border-radiusafter">
                    Exit Gate
                </v-tab>
                <v-tab-item value="tab4">
                    <v-row>
                        <v-col cols="4">
                            <v-hover>
                                <div slot-scope="{ hover }" :class="`${hover? 'imgover': 'imgleave'}`">
                                    <v-img src="../../assets/images/train.png" width="90%"></v-img>
                                </div>
                            </v-hover>
                        </v-col>
                        <v-col cols="8">
                            <v-card class="mx-auto" width="90%" :elevation="0">
                                <v-card-text>
                                    <p class="text-h4 text--primary">Exit Gate</p>
                                    <p class="text--primary">
                                        Upon your arrival at the Airport make sure all your documents are kept ready before reaching the Immigration Hall.</p>
                                    <p class="text--primary">
                                        Please follow the Signage available near the transfer area</p>
                                    <p class="text--primary">
                                        We have 48 Immigration counters & 46 E-visa counter/ Visa Counters at the Arrival Section.</p>
                                    <p class="text--primary">
                                        We have 60 Immigration counters & 4 counters at the Domestic to International Transfer.</p>
                                    <p class="text--primary">
                                        For details on immigration requirements, please visit <a href="http://boi.gov.in" target="_blank">http://boi.gov.in/</a></p>
                                </v-card-text>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-avatar class="rounded-lg" size="62">
                                            <v-icon x-large class=" lighten-1" style="border:2px solid #D1D5DB">
                                                mdi-clock-outline
                                            </v-icon>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title> Immigration Waiting Time</v-list-item-title>
                                            <v-list-item-subtitle>14:10</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs>
        </v-card>
    </div>
</template>
<script>
    // @ is an alias to /src


export default {
    name: 'trackFlights',
    components: {
        

    },
    data: () => ({
        sliderValue: 0,
}),

}
</script>
<style type="text/css">
.imgover .v-image__image {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 1s ease;
}

.imgleave .v-image__image {
    transition: 1s ease;
}

.before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0px);
}
</style>