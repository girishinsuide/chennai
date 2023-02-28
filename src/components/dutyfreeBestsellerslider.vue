<template>

          <v-carousel :show-arrows="false" class="dutyfreecarousel"> 
        <template v-for="(item, index) in slider"> 
          <v-carousel-item  v-if="(index + 1) % columns === 1 || columns === 1" 
                           :key="index"
          > 
            <v-row class="flex-nowrap" > 
              <template v-for="(n,i) in columns"> 
                <template v-if="(+index + i) < slider.length"> 
                  <v-col :key="i"> 
                    <v-sheet v-if="(+index + i) < slider.length" 
                             :color="slider[+index + i]"
                             height="180px"
                             width="360px"
                            
                             class="px-1 bg-secondary rounded-xl mt-10"
                    >
                      <v-row class="fill-height px-1 bg-secondary rounded-xl"
                             align="center"
                             justify="center"
                      >
                        <div class="display-3 px-1 bg-secondary rounded-xl">
    <v-img
       src="../assets/images/bestslider/bestslider1.png"
       width="300px"
    ></v-img>

   

                        </div>

                    
                      </v-row>

                      <v-row class="fill-height"
                             align="left"
                           
                      >
                       
       
   
 
   <v-col cols="8" md="8"> 
      <p>Bvlgari Aqva Pour Homme Marine EDP 100ML </p>
        
         
   </v-col>

  <v-col cols="4" md="4">
    <div  class="amtBox ml-5">₹ 7,250</div> 
    
    </v-col>
  

   
     
                      </v-row>
                    </v-sheet>
                  </v-col> 
                </template> 
              </template> 
            </v-row> 
          </v-carousel-item> 
        </template> 
      </v-carousel>  



</template>
<script>

export default {
    name: 'dutyfreeBestsellerslider',
    data() {
        return {
        
        slider: [
        
        "light-bluecolor", 
        "light-purple", 
        "light-yellow",
        "light-turquoise",  
        "light-lemon",
        "skyblue", 
        "light-peach", 
        "light-pink", 
        "lightskyblue", 
       

        
      ],
        }
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
.light-purple{background-color: rgba(226, 214, 255, 0.4)}
.light-bluecolor{background-color: rgba(171, 222, 230, 0.4)}
.light-yellow{background-color: rgba(239, 221, 194, 0.7)}
.light-lemon{background-color: rgba(255, 246, 216, 0.7)}
.light-peach{background-color: rgba(241, 223, 205, 0.4)}
.light-pink{background-color: rgba(235, 201, 195, 0.4)}
.light-turquoise{background-color: rgba(101, 140, 173, 0.7)}
.skyblue{background-color: rgba(171, 201, 230, 0.4)}
.lightskyblue{background-color: rgba(209, 213, 219, 0.6)}

.dutyfreecarousel p{font-family: 'DM Sans Regular';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 28px;
letter-spacing: -0.4px;
color: #374151;
}

.amtBox {width: 80px;
height: 40px;
padding-top: 10px;
font-weight: 700;
font-size: 16px;
line-height: 24px;
background: #E8EFFE;
border-radius: 100px;color: #1B63F8; text-align: center;}

</style>