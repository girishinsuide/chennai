<template>
    <div class="">
        <v-card class="mx-auto mt-n3">
            <v-img :src="require('../../views/services/images/lostnfound.jpg')" class="my-3" contain />
            <v-card-title class="justify-center text-uppercase page-title">
                Services
            </v-card-title>
            <v-card-subtitle class="text-center">
                <h1>Lost and Found</h1>
            </v-card-subtitle>
            <v-container>
                <v-list two-line>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-icon class="gradi-icon lighten-1" dark>
                                1
                            </v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Forgot your personal belongings at the airport? </v-list-item-title>
                            <v-list-item-subtitle>You can find a list of items left behind by passengers on the website aai.aero/en.</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-icon class="gradi-icon lighten-1" dark>
                                2
                            </v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Once you locate your item on the list, you can initiate a claim.</v-list-item-title>
                            <v-list-item-subtitle>If your item is not on the list, you will need to wait until it appears before initiating a claim.</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-icon class="gradi-icon lighten-1" dark>
                                3
                            </v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Misplaced your baggage or belongings at the airport?</v-list-item-title>
                            <v-list-item-subtitle>In case you happen to misplace your baggage or your belongings at Chennai Airport, kindly contact Lost & Found enquiry, at: </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-row class="ml-10 mt-5 mb-10">
                    <v-col md="4">
                        <v-card ronded class=" rounded-xl" max-width="344">
                            <v-card-text class>
                                <p class="text-h6 text--primary">
                                    Airport Manager, Domestic:
                                </p>
                                <div class="text--primary">
                                    <v-icon color="#00C6FF">
                                        mdi-phone
                                    </v-icon>
                                    044 22563100/01 (Time 24/7)
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col md="4">
                        <v-card ronded class=" rounded-xl" max-width="344">
                            <v-card-text class>
                                <p class="text-h6 text--primary">
                                    Airport Manager, International:
                                </p>
                                <div class="text--primary">
                                    <v-icon color="#00C6FF">
                                        mdi-phone
                                    </v-icon>
                                    044 22563600/01 (Time 24/7)
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <div class="ml-10">
                    <p>As a policy and practise all agencies at the airport are expected to deposit any unclaimed goods under the Lost & found property to the Duty Terminal Manager both at Domestic & International Terminals. </p>
                    <p>The Lost & Found item are deposited after duly recording the contents, description, date & time of deposition and the depositors signature. The Lost & Found items are deposited to warehouse after 24hrs and can be reclaimed by the passenger or by any person duly authorized by passenger on all working days between 0930 – 1800hrs.</p>
                </div>
                <div class="ml-10 mt-10">
                    <h4>Please note:</h4>
                    <p>Baggage handling & delivery at the Airport is the responsibility of the concerned airline from the point of check-in to the point of collection. In case if anything is left behind on an aircraft, kindly contact the respective airlines.</p>
                </div>
            </v-container>
        </v-card>
    </div>
</template>
<style scoped>
.gradi-icon {
    background: linear-gradient(90deg, #00C6FF 0%, #0072FF 100%);
    border-radius: 100px;
    font-style: inherit;
}
</style>