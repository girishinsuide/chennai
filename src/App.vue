<template>
    <v-app>
        <v-main>    
            <TopHeader />
            <router-view />
            <footerComponent />

        </v-main>
    </v-app>
</template>
<script>
    //import Description from "./components/Description";
  //import Images from "./components/Images";
import TopHeader from './components/TopHeader';
import footerComponent from './components/footerComponent';
export default {
    name: 'App',
    components: {
        TopHeader,
        footerComponent,
       // Description,
     // Images
    },

    data: () => ({
        //
    }),
};
</script>

<style type="text/css">
button{text-transform: unset !important;}
.page-title{color: #1B63F8; font-size: 16px;}
.myslider .v-carousel__controls{bottom:10% !important;}
.mytabs .v-item-group{margin-bottom: 30px;}
.vertical-tab .v-tabs-bar{background:none !important;}
.vertical-tab .v-tab{justify-content: left !important; color: rgba(255, 255, 255, 0.5)!important; margin: 10px 0}
.vertical-tab .v-tabs-items{width:  35% !important; border-radius: 30px !important; position: absolute!important; right: 0; top: 15%; padding:2%;}
.v-tabs--vertical > .v-tabs-bar .v-tab{font-size: 24px;}
.v-tabs--vertical .v-list-item__title{font-size: 24px !important;margin-top: 10px; margin-bottom: 10px; line-height: auto !important; }
.v-tabs--vertical .v-list-item__subtitle{font-size:16px !important;}
.v-tabs--vertical .v-list-item {margin-bottom: 10px;}
.vertical-tab-title .mt-10{margin: 20px 0}
.vertical-tab{margin-top:  50px !important;}
.vertical-tab .v-tab--active{font-size: 28px !important; color: rgba(255, 255, 255, 1)!important}
.vertical-tab .v-tab--active .v-icon{font-size: 28px !important; color: rgba(255, 255, 255, 1)!important}
.vertical-tab .v-icon{margin-right: 20px; color: rgba(255, 255, 255, 0.5)!important}
.gradient-button{background: linear-gradient(90deg, #00C6FF 0%, #0072FF 100%);}
.footer-action .v-btn{font-size: 14px}
.theme--light.v-list-item--active:hover::before, .theme--light.v-list-item--active::before{opacity: 0;}
.before-enter {
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s cubic-bezier(.41,.01,.57,1.61);
  }

  /* 
    If the element intersects with the viewport, the before-enter class is added.
  */
  .enter {
    opacity: 1;
    transform: translateX(0px);
  }
  .v-ripple__container {
    display:none !important;
}
.theme--light.v-list-item:focus::before{opacity: 0}
.mytable .v-data-table__wrapper table tbody tr{ background-color:#fff; }
.mytable .v-data-table__wrapper table {border-collapse: separate; border-spacing: 0 20px !important;}
.mytable .v-data-table__wrapper table tbody td:first-child { border-left: 2px solid #E5E7EB !important;
  border-right: 0 !important;
  border-top: 2px solid #E5E7EB !important;
  border-bottom: 2px solid #E5E7EB !important;
  border-radius: 10px 0 0 10px; padding:10px;
}
.mytable .v-data-table__wrapper table tbody td:last-child{
  border-left: 0 solid #E5E7EB !important;
  border-right: 2px solid #E5E7EB  !important;
  border-top: 2px solid #E5E7EB !important;
  border-bottom: 2px solid #E5E7EB !important;
  border-radius: 0 10px 10px 0; padding:10px;
}
.mytable .v-data-table__wrapper table tbody td{border-bottom: 2px solid #E5E7EB !important; border-top: 2px solid #E5E7EB !important;}
.mytable th.text-start.sortable{border-bottom: 0 !important;}
/*TAB STYLE STARTS*/
.mytabs a.v-tab{background-color: #E8EFFE; padding:30px; position:relative;}
.mytabs a.v-tab:first-child {background-color: red !important}
.mytabs .v-tabs-bar{height: auto}
.mytabs .v-tabs-slider-wrapper{height: 65% !important; top: 16%; opacity: 0.3}
a.border-radiusbefore.v-tab{}
a.border-radiusbefore.v-tab{ border-radius:20px  0 0 20px}
a.border-radiusafter.v-tab{ border-radius:0px  20px  20px 0px}
/*TAB STYLE ENDS*/

/*image over effect START*/
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
/*image over effect END*/

</style>