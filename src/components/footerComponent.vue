<template>
    <!-- <v-container>
    hellow
  </v-container> -->
    <v-footer padless style="background-color: none !important;">
        <v-card class="flex" flat tile>
            <v-container>
            <v-card-title v-scrollanimation class="rounded-xl
" style="width: 100%; margin: 10px auto;  background-color: #fff; box-shadow: 0px 25px 50px -12px rgba(16, 24, 40, 0.2);
border-radius: 24px">
                <v-btn class="mx-4" color="#00C6FF " icon>
                    <v-icon size="34px">
                        mdi-deskphone
                    </v-icon>
                </v-btn>
                <div class="subheading">+91 44 2256 0551<br>
                    <span>24x7 Helpline</span></div>
                <v-spacer></v-spacer>
                <span>Follow us on</span>
                <v-btn v-for="icon in icons" :key="icon" class="mx-4" color="#00C6FF " icon>
                    <v-icon size="34px">
                        {{ icon }}
                    </v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn class="mx-4" color="#00C6FF " icon>
                    <v-icon size="34px">
                        mdi-message-reply
                    </v-icon>
                </v-btn>
                 <div class="subheading">
                Feedback to share?<br>
                   <span> Submit now</span>
                </div>
            </v-card-title>
        </v-container>
            <v-card-actions  class="py-2 white--text text-center mt-10 footer-action" style="background-color: #0B2A68; ">
                <v-img style="fill:green" :src="require('../assets/logoWhite.svg')" class="my-3" max-width="150" />
                <v-spacer></v-spacer>
                <v-btn color="white" text>
                    Terms & Conditions
                </v-btn>
                <v-btn color="white" text>
                    Privacy Policy
                </v-btn>
                <v-btn color="white" text>
                    Disclaimer
                </v-btn>
                <v-spacer></v-spacer>
                <span class="mr-4">Download App</span>
                <v-img :src="require('../assets/images/GooglePlay.png')" class="my-3 mr-4" max-width="120" />
                <v-img :src="require('../assets/images/AppStore.png')" class="my-3 mr-4" max-width="120" />
            </v-card-actions>
            <!-- <v-card-text class="py-2 white--text text-center mt-10" style="background-color: #0B2A68">
                
            </v-card-text> -->
        </v-card>
    </v-footer>
</template>
<script>
export default {
    name: 'FooterContent',

    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>
<style type="text/css">
    .subheading span{font-size: 16px; font-weight: 400}
</style>