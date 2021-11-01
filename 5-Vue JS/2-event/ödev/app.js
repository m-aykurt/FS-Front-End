new Vue({
  el: "#exercise",
  data: {
    value: "",
  },
  methods: {
    alertFunc: function () {
      alert();
    },
    keydownFunc: function (event) {
      this.value = event.target.value;
    },
  },
});
