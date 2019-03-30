var addParticipant = document.getElementById("addParticipant");
var signIn = document.getElementById("addPa");
var signInButton = document.getElementById("signinButton");
var signinblank = document.getElementById("signinblank");



addParticipant.onclick = function (){addP()};
signInButton.onclick = function (){signOut()};
signinblank.onclick = function (){closeSignUp()};

function addP(){
  console.log("open");
  signIn.style.transform = "translate(0vw)"
  signIn.classList.remove("exited");
  signIn.classList.add("back");
}
function signOut(){

}
function closeSignUp(){
  console.log("closed");
  signIn.classList.add("exited");
  signIn.classList.remove("back");
}

let app = new Vue({
  el: '#app',
  data:{
    participants: [
      {
        fName:'First Name',
        lName:'Last Name',
        min: 'Minutes Read',
        gr:'Grade',
        gf:'GreaterFive',
        pE:"Email",
        pU:"Parent Username",
        uP:"Use Parent",
        user:"Username",
        pass:"Password",
        sI: true,
      }
    ],
    exited: true,
    back: false,
    firstName: '',
    lastName: '',
    minutes: '',
    grade: '',
    greaterFive: '',
    participantEmail: '',
    parentUsername: '',
    useParent: '',
    partUser: '',
    partPass: ''
  },
  created(){
    this.getParticipants();
  },
  methods:{
    addPart(){
      if(this.firstName == ''){
        this.firstName = '!';
      }
      if(this.lastName == ''){
        this.lastName = '!';
      }
      if(this.minutes == ''){
        this.minutes = '!';
      }
      if(this.grade == ''){
        this.grade = '!';
      }
      if(this.participantEmail == ''){
        this.participantEmail = '!';
      }
      if(this.parentUsername == ''){
        this.parentUsername = '!';
      }
      if(this.partUser == ''){
        this.partUser = '!';
      }
      if(this.partPass == ''){
        this.partPass = '!';
      }
      this.register();
      this.participants.push({
        fName: this.firstName,
        lName: this.lastName,
        min: this.minutes,
        gr: this.grade,
        gf: this.greaterFive,
        pE: this.participantEmail,
        pU: this.parentUsername,
        uP: this.useParent,
        user: this.partUser,
        pass: this.partPass,
      });
      this.firstName = '';
      this.lastName = '';
      this.grade = '';
      this.minutes = '';
      this.greaterFive = '',
      this.participantEmail = '',
      this.parentUsername = '',
      this.useParent = '',
      this.partUser = '',
      this.partPass = ''
    },
    addPVue(){
      this.exited = false;
      this.back = true;
    },
    removePVue(){
      this.exited = true;
      this.back = false;
    },
    updatePVue(){
      this.exited = false;
      this.back = true;
    },
    async getParticipants(){
      try{
        let response = await axios.get("/api/Participants");
        this.participants = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async register(){
      try{
        const formData = new FormData();
        let r1 = await axios.post('/api/Participants', {
          firstName: this.firstName,
          lastName: this.lastName,
          minutes: this.minutes,
          grade: this.grade,
          greaterFive: this.greaterFive,
          participantEmail: this.participantEmail,
          parentUsername: this.parentUsername,
          useParent: this.useParent,
          partUser: this.partUser,
          partPass: this.partPass
        });
        this.addParticipant = r1.data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateUser(){
      try{
        const formData = new FormData();
      }
    }

  }

});
