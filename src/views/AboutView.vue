<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <div class="rounded-xl" style="width: 100%; padding:10px; margin: 35px auto;  background-color: #fff; box-shadow: 0px 20px 25px -5px rgba(16, 24, 40, 0.06), 0px 8px 10px -6px rgba(16, 24, 40, 0.06); border: 2px solid #F3F4F6;">
                    <v-toolbar flat>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search by City / Flight no." single-line hide-details></v-text-field>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-select hide-details label="Solo field" flat></v-select>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-select hide-details label="Outlined style" flat></v-select>
                        <v-spacer></v-spacer>
                        <v-dialog transition="dialog-bottom-transition" max-width="600">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn rounded large color="#E8EFFE" v-bind="attrs" v-on="on">
                                    Filters
                                </v-btn>
                            </template>
                            <template v-slot:default="dialog">
                                <v-card class="rounded-xl">
                                    <v-card-title>
                                        <span class="text-h5">Sort & Filter</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-radio-group column>
                                            <v-radio label="Bahamas, The" value="bahamas"></v-radio>
                                            <v-radio label="Bahrain" value="bahrain"></v-radio>
                                            <v-radio label="Bangladesh" value="bangladesh"></v-radio>
                                            <v-radio label="Barbados" value="barbados"></v-radio>
                                        </v-radio-group>
                                    </v-card-text>
                                    <v-card-actions class="justify-end">
                                        <v-btn text @click="dialog.value = false">
                                            Reset Filters > </v-btn>
                                        <v-btn rounded dark large class="gradient-button pl-10 pr-10" @click="dialog.value = false">
                                            Apply
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                        <v-spacer></v-spacer>
                        <v-btn rounded dark large class="gradient-button">
                            See All Flights
                        </v-btn>
                    </v-toolbar>
                </div>
                <v-data-table :headers="headers" :items="flightlist" :search="search" class="mytable">
                    <template v-slot:[`item.img`]="{ item }">
                        <img :src="item.img" class="mt-1" width="50" />
                    </template>
                    <template v-slot:[`item.status`]="{ item }">
                        <v-chip :color="getColor(item.status)" dark>
                            {{ item.status }}
                        </v-chip>
                    </template>
                    <template v-slot:[`item.track`]="{ item }">
                        <v-btn class="mx-2" small fab dark color="indigo">
                            <v-icon dark>
                                mdi-plus {{ item.track }}
                            </v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            search: '',
            filter: {},
            headers: [{
                    text: 'Airline',
                    align: 'start',
                    filterable: false,
                    value: 'img',
                    sortBy: 'flight',
                },
                { text: 'Dessert (100g serving)', value: 'name' },
                { text: 'Flight', value: 'flight' },
                { text: 'Origin', value: 'origin' },
                { text: 'Scheduled', value: 'scheduled' },
                { text: 'Estimated', value: 'estimated' },
                { text: 'Status', value: 'status' },
                { text: 'Terminal', value: 'terminal' },
                { text: 'Baggage', value: 'baggage' },
                { text: 'Track', value: 'track', sortable: false },
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
                },
                {
                    img: require("@/assets/images/flights/emirates.svg"),
                    name: 'Emirates',
                    flight: '6EK 568',
                    origin: 'Dubai',
                    scheduled: '14:10',
                    estimated: '14:23',
                    status: 'On Time',
                    terminal: 'T1',
                    baggage: 'Belt 3',
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
                },



            ],
        }
    },
    methods: {
        getColor(status) {
            if (status == "Delayed") return 'red'
            else return 'green'
        },
    },
}
</script>