<template>
    <div class="">
        <v-card class="mx-auto mt-n3" >
            <v-img :src="require('../../views/attheairport/images/dutyfreebanner.jpg')" class="my-3" contain />
            <v-card-title class="justify-center text-uppercase page-title mt-10">
                 at the airport
            </v-card-title>
            <v-card-subtitle class="text-center mt-2">
                <h1>Food & Drink</h1>
            </v-card-subtitle>
 
 <v-container class="bg-surface-variant mt-10">
      <!-- Food & Drink Start    -->
   <v-row no-gutters>
      <v-col cols="5">
         <v-carousel
   
    height="400"
    delimiter-icon="mdi-circle"
    :show-arrows="false"
    class="foodanddrinkcarousel"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
       
        height="100%"
      >
        <div class="d-flex fill-height carouselText mt-5">
          <div>
           <h2> {{ slide.title }} </h2>
           <p> {{ slide.detail }} </p>
            <v-card-actions>
          <v-btn rounded dark class="gradient-button text-capitalize " style="padding:10px 20px !important">
                           More Info
           </v-btn>
     </v-card-actions>
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
     
      </v-col>

      <v-col cols="1"></v-col>
      <v-col cols="6" class="fooddrinkImg">
        <v-sheet class="pa-2 ">
                          <v-hover>
                            <v-card :class="`${hover? 'imgover': 'imgleave'}`" slot-scope="{ hover }">
        <v-img
       src="../../views/attheairport/images/foodanddrink.png"></v-img>
                            </v-card></v-hover></v-sheet>

      
      </v-col>
   </v-row>

      <!-- Food & Drink End    -->

<!-- Dining Directory Start -->
<v-row no-gutters>
      <v-col cols="12 mt-10">
    <v-card-title class="justify-center text-uppercase page-title mt-10">
                 global cuisines
            </v-card-title>
            <v-card-subtitle class="text-center mt-2">
                <h1>Dining Directory  </h1>
            </v-card-subtitle>

      </v-col></v-row>

         <div class="rounded-xl" style="width: 100%; padding:10px; margin: 35px auto;  background-color: #fff; box-shadow: 0px 20px 25px -5px rgba(16, 24, 40, 0.06), 0px 8px 10px -6px rgba(16, 24, 40, 0.06); border: 2px solid #F3F4F6;">
                    <v-toolbar flat>
                        <v-text-field v-model="search" prepend-icon="mdi-magnify" label="Search by name" single-line hide-details></v-text-field>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-select  :items="allcuisines" prepend-icon="mdi-silverware-variant" hide-details label="All Cuisines" flat></v-select>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-select :items="allterminals" prepend-icon="mdi-airport" hide-details label="All Terminals" flat></v-select>
                        <v-spacer></v-spacer>
                        <v-btn rounded large color="#E8EFFE" v-bind="attrs" v-on="on">
                                    Filters
                                </v-btn>
                       
                     
                    </v-toolbar>
                </div>

<v-container class="bg-surface-variant mt-10 diningdirectoryBlock">
   <v-row no-gutters>
<v-col cols="4" class="mb-15"  v-for="(resturant, i) in resturants"
      :key="i">
        <v-sheet class="pa-2" width="350px">
          <v-card
          class="mx-auto ma-2"
          height="auto"
          width="100%"
          
         > 

             <div class="headingBox-txt">
   <h2>{{resturant.name}}</h2>
   <p>{{resturant.cuisines}}</p>

  </div>
<v-sheet>
                          <v-hover>
                            <v-card :class="`${hover? 'imgover': 'imgleave'}`" slot-scope="{ hover }">
    <v-img :src="resturant.src"  class="mt-5 mb-6"></v-img>
                            </v-card></v-hover></v-sheet>
 
    <div class="imageBox-txt">
   <p>{{resturant.location}}</p>

<!-- Dialog box Start -->
     <v-dialog transition="dialog-bottom-transition" max-width="900" style=" overflow: hidden !important; box-shadow:  none !important;" >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn rounded dark class="gradient-button text-capitalize" style="padding:10px 20px !important" v-bind="attrs" v-on="on">
                                      More Info
                                </v-btn>
                            </template>
                           
                            <template style="overflow:hidden !important">
                              
                             
                              


                               
<v-row style="background:#fff; max-height:600px;  margin:0 !important" class="pb-15 pr-8 rounded-xl"  v-for="(dining, i) in dinings"
      :key="i">

<v-col cols="6" style="padding:0 !important">
  <v-sheet>
                          <v-hover>
                            <v-card :class="`${hover? 'imgover': 'imgleave'}`" slot-scope="{ hover }">
  <v-img :src="dining.src"
         class="mt-15" style="float:left"></v-img></v-card></v-hover></v-sheet>
                            
         </v-col>
  <v-col cols="6">
    <v-row>
<v-col cols="12" class="mt-5">
  <h2 class="text-uppercase page-title mt-10">{{dining.heading}}</h2>
   <h1 class="mt-2">{{dining.name}}</h1>
   <h3 class=" mt-2"><span class="mdi mdi-silverware-variant mr-2"></span>{{dining.cuisines}}</h3>
<p class="mt-5">
{{dining.details}}

</p>
</v-col></v-row>

<v-row class="mt-2">
<v-col cols="6">
<P>Location</P>
<span class="dtlrestu">{{dining.location}}</span>

</v-col>
<v-col cols="6">
  <P>Timings</P>
<span class="dtlrestu">{{dining.timing}}</span>

</v-col>
</v-row>


<v-row>
<v-col cols="12" class="mt-5">
 <v-btn rounded dark class="gradient-button text-capitalize mr-5" style="padding:10px 20px 10px 10px !important">
  <span class="mdi mdi-phone mr-2"></span> Call
 </v-btn>
  <v-btn rounded dark class="gradient-button text-capitalize  mr-5" style="padding:10px 20px 10px 10px !important">
    <span class="mdi mdi-email mr-2"></span> Email
 </v-btn>
  <v-btn rounded dark class="gradient-button text-capitalize  mr-5" style="padding:10px 20px 10px 10px !important">
   <span class="mdi mdi-link-variant mr-2"></span> Website
 </v-btn>
</v-col></v-row>

</v-col>

</v-row>

                             
                            </template>
                        </v-dialog>

<!-- Dialog box End -->
      </div>

        </v-card>
        </v-sheet>
      </v-col>



      

    


      
      

   </v-row>


   
</v-container>



<!-- Dining Directory End -->










 </v-container>
    </v-card>   
    </div>
</template>

<script>


export default {

    components: {
     
      

    },

    data() {

     return {
      
        slides: [
          { title:'Enjoy Gourmet Burgers and Fries at Grillerama', detail:'Try their famous Gourmet burgers which are made to order and served between brioche buns, along with your favourite side of curly fries.', href: 'https://github.com/vuetifyjs/vuetify',},
           { title:'Elevate your dining experiences at Street Foods by Punjab Grill', detail:'Try their famous Gourmet burgers which are made to order and served between brioche buns, along with your favourite side of curly fries.',},
        ],
        resturants:
       [
        { name:'Street Foods by Punjab Grill', cuisines:'North Indian, Mughlai', src: require('../../views/attheairport/images/dining/small-img/d1.jpg'), location:'T1 Departures', },
        { name:'Street Foods by Punjab Grill', cuisines:'North Indian, Mughlai', src: require('../../views/attheairport/images/dining/small-img/d1.jpg'), location:'T1 Departures', },
        { name:'Street Foods by Punjab Grill', cuisines:'North Indian, Mughlai', src: require('../../views/attheairport/images/dining/small-img/d1.jpg'), location:'T1 Departures', },
        { name:'Street Foods by Punjab Grill', cuisines:'North Indian, Mughlai', src: require('../../views/attheairport/images/dining/small-img/d1.jpg'), location:'T1 Departures', },
        { name:'Street Foods by Punjab Grill', cuisines:'North Indian, Mughlai', src: require('../../views/attheairport/images/dining/small-img/d1.jpg'), location:'T1 Departures', },
        { name:'Street Foods by Punjab Grill', cuisines:'North Indian, Mughlai', src: require('../../views/attheairport/images/dining/small-img/d1.jpg'), location:'T1 Departures', },
        { name:'Street Foods by Punjab Grill', cuisines:'North Indian, Mughlai', src: require('../../views/attheairport/images/dining/small-img/d1.jpg'), location:'T1 Departures', },
        { name:'Street Foods by Punjab Grill', cuisines:'North Indian, Mughlai', src: require('../../views/attheairport/images/dining/small-img/d1.jpg'), location:'T1 Departures', },
        { name:'Street Foods by Punjab Grill', cuisines:'North Indian, Mughlai', src: require('../../views/attheairport/images/dining/small-img/d1.jpg'), location:'T1 Departures', },
      ],

       dinings:
       [
        { heading:'Dining', name:'Street Foods by Punjab Grill', cuisines:'North Indian, Mughlai', src: require('../../views/attheairport/images/dining/big-img/fd1.jpg'), details:'The new breakfast buffet is worth trying especially the Anda Bhurjee and Safed Matter Masala. Bite into the delectable Ambarsari Machhi De Pakode along with your Shorba', location:'T1 Departures', timing:'Open 24 hours',},
       


      ]
      }
        
    },
    methods: {
     
    },

    computed: {
    
  },
}
</script>

<style scoped>

.carouselText h2 {font-weight: 700;
font-size: 44px;
line-height: 51px;
letter-spacing: -0.02em;
color: #374151;}

.carouselText p {
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #6B7280; margin-top: 20px;}

.diningdirectoryBlock .v-sheet.v-card:not(.v-sheet--outlined), .fooddrinkImg .v-sheet.v-card:not(.v-sheet--outlined){
      box-shadow:  none
}


.headingBox-txt h2 {font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
letter-spacing: -0.02em;
color: #374151;
}

.headingBox-txt p {font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;
color: #6B7280;}

.imageBox-txt p{
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 28px;
color: #6B7280;float: left;
}

.imageBox-txt .gradient-button {font-weight: 700;
font-size: 16px;
line-height: 24px !important;
text-align: center;
color: #FFFFFF !important;
float: right; margin-right: 0;}

.imageBox-txt .v-card__actions {display: block; padding:0;}
.v-dialog.FandD-dialogBox {
    overflow: hidden;
}
.v-dialog.FandD-dialogBox h2{
   font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 20px;
letter-spacing: 4px;
text-transform: uppercase;
color: #1B63F8;
}
.v-dialog.FandD-dialogBox h1{font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 40px;
letter-spacing: -0.02em;
color: #374151;}

.v-dialog.FandD-dialogBox h3 {font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 28px;
color: #374151;}

.v-dialog.FandD-dialogBox p {font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #6B7280;}


.dtlrestu {
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 28px;
letter-spacing: -0.02em;
color: #374151;
}

.carouselText .v-card__actions { padding: 0;}


</style>