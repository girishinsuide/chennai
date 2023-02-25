<template>
    <div class="">
        <v-card class="mx-auto mt-n3">
            <v-img :src="require('../../views/services/images/lostnfound.jpg')" class="my-3" contain />
            <v-card-title class="justify-center text-uppercase page-title" color="red">
                Flight Informagtion
            </v-card-title>
        </v-card>
        <v-tabs background-color=" accent-4" centered class="mytabs">
            <v-tab href="#tab1">
                To & From the Airport
            </v-tab>
            <v-tab-item value="tab1">
                <v-container>
                    <v-card>
                       <!--  <template v-slot:item.status="{ item }">
                                <v-chip :color="getColor(item.status)" dark>
                                    {{ item.statu }}
                                </v-chip>
                            </template> -->
                        <v-simple-table fixed-header height="400px">
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left subtitle-2">
                                            Airline
                                        </th>
                                        <th class="text-left  subtitle-2">
                                            Flight
                                        </th>
                                        <th class="text-left subtitle-2">
                                            Origin
                                        </th>
                                        <th class="text-left subtitle-2">
                                            Scheduled
                                        </th>
                                        <th class="text-left subtitle-2">
                                            Estimated
                                        </th>
                                        <th class="text-left subtitle-2">
                                            Status
                                        </th>
                                        <th class="text-left subtitle-2">
                                            Terminal
                                        </th>
                                        <th class="text-left subtitle-2">
                                            Baggage
                                        </th>
                                        <th class="text-left subtitle-2">
                                            Track
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in flightlist" :key="item.name">
                                        <td><img :src="item.img" class="mt-1" width="50"></td>
                                        <td><span class="font-weight-black">{{ item.name }}</span><br><span class="productspan grey--text">{{item.flight}}</span></td>
                                        <td><span class="font-weight-black">{{item.origin}}</span></td>
                                        <td><span class="font-weight-black">{{ item.scheduled }}</span></td>
                                        <td><span class="font-weight-black">{{item.estimated}}</span></td>
                                        <td><span class="green--text"><v-chip :color="getColor(item.status)" dark>{{item.status}}</v-chip></span></td>
                                       
                                        <td><span class="font-weight-black">{{item.terminal}}</span></td>
                                        <td><span class="font-weight-black">{{item.baggage}}</span></td>
                                        <td><span class="font-weight-black">
                                                <v-btn class="mx-2" small fab dark color="indigo">
                                                    <v-icon dark>
                                                        mdi-plus
                                                    </v-icon>
                                                </v-btn>
                                            </span></td>
                                        <td>
                                        </td>
                                    </tr>
                                </tbody>
                            </template>                            
                        </v-simple-table>
                    </v-card>
                    <div class="rounded-xl mb-10" style="width: 100%; margin: 10px auto;  background-color: #fff; box-shadow: 0px 20px 25px -5px rgba(16, 24, 40, 0.06), 0px 8px 10px -6px rgba(16, 24, 40, 0.06); border: 2px solid #F3F4F6;">
                        <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title class="text-h5 pt-2 pl-10 ">
                                    Find your Flight
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-spacer></v-spacer>
                        <v-list-item>
                            <v-list-item-content>
                                <div class="">
                                    <v-text-field class="mt-0 pt-2" label="Sby City / Flight no.earch" hide-details prepend-icon="mdi-magnify" two-line></v-text-field>
                                </div>
                                <!-- <v-list-item-subtitle>by City / Flight no.</v-list-item-subtitle> -->
                            </v-list-item-content>
                        </v-list-item>
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
                        <v-list-item two-line>
                            <v-list-item-content>
                                <v-btn rounded dark large class="gradient-button">
                                    Search
                                </v-btn>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-container>
            </v-tab-item>
            <v-tab href="#tab2">
                Before You Fly
            </v-tab>
            <v-tab-item value="tab2">
                tab2
            </v-tab-item>
        </v-tabs>
    </div>
</template>
<style scoped>
.gradi-icon {
    background: linear-gradient(90deg, #00C6FF 0%, #0072FF 100%);
    border-radius: 100px;
    font-style: inherit;
}
</style>
<script>
export default {
    data() {
        return {
            search: '',
            headers: [{
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    filterable: false,
                    value: 'name',
                },
                { text: 'Airline', value: 'img' },
                { text: 'Flight', value: 'flight' },
                { text: 'Origin', value: 'origin' },
                { text: 'Scheduled', value: 'scheduled' },
                { text: 'Estimated', value: 'estimated' },
                { text: 'Status', value: 'status' },
                { text: 'Terminal', value: 'terminal' },
                { text: 'Baggage', value: 'baggage' },
                { text: 'Track', value: 'track' },
            ],
            flightlist: [{
                    img: require("@/assets/images/flights/flightimg.svg"),
                    name: 'Indigo',
                    flight: '6E 5284',
                    origin: 'Bengaluru',
                    scheduled: '14:10',
                    estimated: '14:23',
                    status: 'Arrived',
                    terminal: 'T1',
                    baggage: 'Belt 3',
                    track: 'Track',
                },
                {
                    img: require("@/assets/images/flights/emirates.svg"),
                    name: 'Emirates',
                    flight: '6E 5284',
                    origin: 'Dubai',
                    scheduled: '14:10',
                    estimated: '14:23',
                    status: 'On Time',
                    terminal: 'T1',
                    baggage: 'Belt 3',
                    track: 'Track',
                },
                {
                    img: require("@/assets/images/flights/flightimg.svg"),
                    name: 'Indigo',
                    flight: '6E 5284',
                    origin: 'Bengaluru',
                    scheduled: '14:10',
                    estimated: '14:23',
                    status: 'Delayed',
                    terminal: 'T1',
                    baggage: 'Belt 3',
                    track: 'Track',
                },



            ],
        }
    },
    methods: {
      getColor (status) {
        if (status == "Delayed") return 'red'
        else return 'green'
      },
    },
}
</script>