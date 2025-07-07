<template>
  <v-form>
    <v-container
      fluid
      class="d-flex justify-center align-center"
      style="min-height: 100vh;"
    >
      <v-row justify="center" align="center" class="w-100">
        <v-col cols="12" md="5" class="d-flex flex-column align-center">
          <v-card class="pa-6 d-flex flex-column align-center" elevation="2" style="border-radius: 5px; width: 65%;">
            <div class="d-flex justify-center align-center mb-4">
              <h1 class="text-h5 font-weight-medium text-center">Login</h1>
            </div>
            <v-text-field
              prepend-inner-icon="mdi-email"
              v-model="email"
              label="Email Address"
              solo-inverted
              dense
              rounded
              class="mb-3"
              style="text-align: center;"
            />
            <v-text-field
              prepend-inner-icon="mdi-lock"
              v-model="password"
              label="Password"
              type="password"
              solo-inverted
              dense
              rounded
              class="mb-0"
              style="text-align: center;"
            />
            <div class="d-flex justify-center mb-3">
              <v-btn
                color="primary"
                @click="login"
              >
                Sign In
              </v-btn>
            </div>
            <div class="d-flex justify-center">
              <v-btn
                color="secondary"
                @click="SignInWithGoogle"
              >
                Sign in Using Google
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  layout: 'auth',
  middleware: 'guest',
  methods: {
    SignInWithGoogle() {
      this.$auth.loginWith('google')
    }
  }
}
</script>

