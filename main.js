const DateToday = {
  data() {
    return {
      date: "Not sure what today is?"
    }
  },
  mounted() {},
  methods: {
    swapIt() {
      today = new Date();
      hour = today.getHours();
      if(hour > 17) {
        this.date = "Get out of here. Today is " + today.toLocaleString() 
                    + ". You're " + (-1*(17 - hour)) + " hours overtime";
      }
      else {
        this.date = "Yo, stay here. You aint finished. You got " 
                    + (17 - hour) + " hours left"
      }
    }
  }
}

// Create app
Vue.createApp(DateToday).mount('#date-today')

// Define a component
app.compnent('test-item', {
  template: "<li>What's good?</li>"
})

app.mount()