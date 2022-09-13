<template>
  <div>
    <AuthHeader class="header"/>
    <div class="container">
        <div class="title">Start exploring camps from all around the world.</div>
        <div class="inputFields">
          <p>Username</p>
          <BaseInputField @emit-data="modifyName" v-model="name" placeholder="Any username" :margin="false" bgColor="grey" />
          <p>Password</p>
          <BaseInputField @emit-data="modifyPassword" v-model="password" inputType="password" placeholder="Any password" :margin="false" bgColor="grey" />
          <div @click="submitForm">
            <BaseButton v-if="type === 'signin'"  size="long" class="btn">Login to account</BaseButton>
            <BaseButton v-if="type === 'signup'" size="long" class="btn">Create an account</BaseButton>
          </div>
        </div>
        <div v-if="type === 'signin'" class="sign-in-or-out">
          <span>Not yet a user?</span>
                <nuxt-link to="/signup">Sign up</nuxt-link>
        </div>
        <div v-if="type === 'signup'" class="sign-in-or-out">
          <span>Already a user?</span>
                <nuxt-link to="/signin">Sign in</nuxt-link>
        </div>
    </div>
  </div>
</template>

<script>
import BaseInputField from '@/components/BaseComponents/BaseInputField.vue';
import BaseButton from '@/components/BaseComponents/BaseButton.vue';
import AuthHeader from '@/components/Layout/Authentication/AuthHeader.vue'
export default {
  components: { 
    BaseInputField, 
    BaseButton, 
    AuthHeader 
    },
    props: {
      type: {
        type: String,
        required: true,
        /* accepts only 'signin' or 'signup' */ 
      }
    },
    data() {
      return {
        name: '',
        password: ''
      }
    },
    methods: {
      modifyName(data) {
        this.name = data
      },
      modifyPassword(data) {
        this.password = data
      },
      async submitForm() {
        // login

        if (this.$route.name === 'signin') {
          this.$auth.loginWith('local', {
            data: {
              name: this.name,
              password: this.password
            }
          })
          .then(res => {
            this.$router.push('/campgrounds')
          })
          .catch(err => {
            console.log(err)
            this.$store.commit('addErrorMessage', {
              value: 'Invalid username or password'
            })
            this.$store.commit('showErrorPopup', {
              value: true
            })
          })
        }  
        
        // sign-up
        /* else if (this.$route.name === 'signup') {
          this.$axios.post('api/v1/signup', {
            name: this.name,
            password: this.password,
          })
          .then(() => {
            this.$auth.loginWith('local', {
            data: {
              name: this.name,
              password: this.password
            }
            }).then(() => {
              
              this.$router.push('/campgrounds')
            })
          })
          .catch(err => {
            console.log(err)
            if (err.message.includes('500')) {
              this.$store.commit('addErrorMessage', {
              value: 'Username already taken'
              })
              this.$store.commit('showErrorPopup', {
                value: true
              })
            }
          })
        } */  
      }
    }
}
</script>

<style scoped>
.header {
  margin-top: 2rem;
}

.container {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.inputFields {
  max-width: 500px;
}

p {
  color: rgb(79, 79, 79);
  margin-bottom: 1rem;
  font-size: .9rem;
}

p:nth-of-type(2) {
  margin-top: 1rem;
}

.btn {
  margin-top: 1rem;
}

.sign-in-or-out {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

span {
    font-size: .9rem;
    color: rgb(80, 80, 80);
    font-weight: 500;
}

a {
    font-size: .9rem;
    color: lightseagreen;
    font-weight: 700;
}

@media screen and (min-width: 768px) {
  a {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .title {
    margin-top: 13rem;
  }
}
</style>