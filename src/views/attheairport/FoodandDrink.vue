<template>
    <div class="">
        <v-card class="mx-auto mt-n3">
            <v-img :src="require('../../views/attheairport/images/dutyfreebanner.jpg')" class="my-3" contain />
            <v-card-title class="justify-center text-uppercase page-title mt-10">
                 at the airport
            </v-card-title>
            <v-card-subtitle class="text-center mt-2">
                <h1>Food & Drink</h1>
            </v-card-subtitle>
        
 <v-container class="bg-surface-variant mt-10">
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
      <v-col cols="6">
        <v-img
       src="../../views/attheairport/images/foodanddrink.png"
     
      
    ></v-img>

      
      </v-col>
   </v-row>

<v-row no-gutters>
      <v-col cols="12 mt-10">
    <v-card-title class="justify-center text-uppercase page-title mt-10">
                 global cuisines
            </v-card-title>
            <v-card-subtitle class="text-center mt-2">
                <h1>Dining Directory  </h1>
            </v-card-subtitle>

      </v-col></v-row>

<v-container class="bg-surface-variant mt-10 diningdirectoryBlock">
   <v-row no-gutters>
<v-col cols="4" class="mb-15">
        <v-sheet class="pa-2" width="350px">
          <v-card
          class="mx-auto ma-2"
          height="auto"
          width="100%"
         > 

             <div class="headingBox-txt">
   <h2>Street Foods by Punjab Grill</h2>
   <p>North Indian, Mughlai</p>

  </div>

    <v-img src="../../views/attheairport/images/dining/d1.jpg"
         class="mt-5 mb-6"></v-img>

 
    <div class="imageBox-txt">
   <p>T1 Departures</p>

   <v-card-actions>
  <v-btn rounded dark class="gradient-button text-capitalize" style="padding:10px 20px !important">
    More Info
 </v-btn>
    </v-card-actions>
   
      </div>

        </v-card>
        </v-sheet>
      </v-col>

<v-col cols="4" class="mb-15">
        <v-sheet class="pa-2" width="350px">
          <v-card
          class="mx-auto ma-2"
          height="auto"
          width="100%"
         > 

             <div class="headingBox-txt">
   <h2>Street Foods by Punjab Grill</h2>
   <p>North Indian, Mughlai</p>

  </div>

    <v-img src="../../views/attheairport/images/dining/d1.jpg"
         class="mt-5 mb-6"></v-img>

 
    <div class="imageBox-txt">
   <p>T1 Departures</p>

   <v-card-actions>
  <v-btn rounded dark class="gradient-button text-capitalize" style="padding:10px 20px !important">
    More Info
 </v-btn>
    </v-card-actions>
   
      </div>

        </v-card>
        </v-sheet>
      </v-col>

      <v-col cols="4" class="mb-15">
        <v-sheet class="pa-2" width="350px">
          <v-card
          class="mx-auto ma-2"
          height="auto"
          width="100%"
         > 

             <div class="headingBox-txt">
   <h2>Street Foods by Punjab Grill</h2>
   <p>North Indian, Mughlai</p>

  </div>

    <v-img src="../../views/attheairport/images/dining/d1.jpg"
         class="mt-5 mb-6"></v-img>

 
    <div class="imageBox-txt">
   <p>T1 Departures</p>

   <v-card-actions>
  <v-btn rounded dark class="gradient-button text-capitalize" style="padding:10px 20px !important">
    More Info
 </v-btn>
    </v-card-actions>
   
      </div>

        </v-card>
        </v-sheet>
      </v-col>

      <v-col cols="4" class="mb-15">
        <v-sheet class="pa-2" width="350px">
          <v-card
          class="mx-auto ma-2"
          height="auto"
          width="100%"
         > 

             <div class="headingBox-txt">
   <h2>Street Foods by Punjab Grill</h2>
   <p>North Indian, Mughlai</p>

  </div>

    <v-img src="../../views/attheairport/images/dining/d1.jpg"
         class="mt-5 mb-6"></v-img>

 
    <div class="imageBox-txt">
   <p>T1 Departures</p>

   <v-card-actions>
  <v-btn rounded dark class="gradient-button text-capitalize" style="padding:10px 20px !important">
    More Info
 </v-btn>
    </v-card-actions>
   
      </div>

        </v-card>
        </v-sheet>
      </v-col>

      <v-col cols="4" class="mb-15">
        <v-sheet class="pa-2" width="350px">
          <v-card
          class="mx-auto ma-2"
          height="auto"
          width="100%"
         > 

             <div class="headingBox-txt">
   <h2>Street Foods by Punjab Grill</h2>
   <p>North Indian, Mughlai</p>

  </div>

    <v-img src="../../views/attheairport/images/dining/d1.jpg"
         class="mt-5 mb-6"></v-img>

 
    <div class="imageBox-txt">
   <p>T1 Departures</p>

   <v-card-actions>
  <v-btn rounded dark class="gradient-button text-capitalize" style="padding:10px 20px !important">
    More Info
 </v-btn>
    </v-card-actions>
   
      </div>

        </v-card>
        </v-sheet>
      </v-col>

      <v-col cols="4" class="mb-15">
        <v-sheet class="pa-2" width="350px">
          <v-card
          class="mx-auto ma-2"
          height="auto"
          width="100%"
         > 

             <div class="headingBox-txt">
   <h2>Street Foods by Punjab Grill</h2>
   <p>North Indian, Mughlai</p>

  </div>

    <v-img src="../../views/attheairport/images/dining/d1.jpg"
         class="mt-5 mb-6"></v-img>

 
    <div class="imageBox-txt">
   <p>T1 Departures</p>

   <v-card-actions>
  <v-btn rounded dark class="gradient-button text-capitalize" style="padding:10px 20px !important">
    More Info
 </v-btn>
    </v-card-actions>
   
      </div>

        </v-card>
        </v-sheet>
      </v-col>


      <v-col cols="4" class="mb-15">
        <v-sheet class="pa-2" width="350px">
          <v-card
          class="mx-auto ma-2"
          height="auto"
          width="100%"
         > 

             <div class="headingBox-txt">
   <h2>Street Foods by Punjab Grill</h2>
   <p>North Indian, Mughlai</p>

  </div>

    <v-img src="../../views/attheairport/images/dining/d1.jpg"
         class="mt-5 mb-6"></v-img>

 
    <div class="imageBox-txt">
   <p>T1 Departures</p>

   <v-card-actions>
  <v-btn rounded dark class="gradient-button text-capitalize" style="padding:10px 20px !important">
    More Info
 </v-btn>
    </v-card-actions>
   
      </div>

        </v-card>
        </v-sheet>
      </v-col>
      

   </v-row>


   
</v-container>














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

.diningdirectoryBlock .v-sheet.v-card:not(.v-sheet--outlined) {
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

</style>