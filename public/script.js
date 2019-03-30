var app = new Vue({
  el: '#backgroundTint',
  data: {
    items: [],
  },
  created(){
    this.getItems();
  },
  methods: {
    async getItems(){
      try{
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error){
        console.log(error);
      }
    },
  }
});
