new Vue({
    el: '#app',
    data: {
      value: 0,
      time:null,
    },
    methods: {
    },
    computed: {
      result(){
        return this.value === 33 ? "Tamamlandı" : "Henüz Bitmedi!!"
      }
    },
    watch : {
      time: function(value){
        setTimeout(()=>{
          this.value = 0
        },value * 1000)
      }
    }
  });