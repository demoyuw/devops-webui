<template>
  <v-container
    id="Cicdgraph"
    fluid
    tag="section"
  >
    <v-row>
      <!--
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <md-checkbox v-model="array">Array</md-checkbox>
      </v-col>
      -->
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <base-material-card
          color="teal lighten-2"
        >
          <template v-slot:heading>
            <div class="display-1 font-weight-light">
              靜態程式語法分析
            </div>
          </template>
          <v-card-text>
            <v-btn
              block="true"
              color="blue lighten-1"
            >
              SonarQube
            </v-btn>
            <v-btn
              block="true"
              color="blue lighten-4"
              disabled="true"
            >
              CheckMark
            </v-btn>
          </v-card-text>
        </base-material-card>
      </v-col>
      <!--
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <base-material-card
          color="teal lighten-1"
        >
          <template v-slot:heading>
            <div class="display-1 font-weight-light">
              單元測試
            </div>
          </template>
          <v-card-text>
            <v-btn
              block="true"
              color="blue lighten-4"
              disabled="true"
            >
              Unittest
            </v-btn>
            <v-btn
              block="true"
              color="blue lighten-4"
              disabled="true"
            >
              JUnit
            </v-btn>
          </v-card-text>
        </base-material-card>
      </v-col>
      -->
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <base-material-card
          color="teal darken-1"
        >
          <template v-slot:heading>
            <div class="display-1 font-weight-light">
              API整合測試
            </div>
          </template>
          <v-card-text>
            <v-btn
              block="true"
              color="blue lighten-1"
            >
              Postman
            </v-btn>
          </v-card-text>
        </base-material-card>
      </v-col>
      <!--
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <base-material-card
          color="teal darken-2"
        >
          <template v-slot:heading>
            <div class="display-1 font-weight-light">
              功能整合測試
            </div>
          </template>
          <v-card-text>
            <v-btn
              block="true"
              color="blue lighten-4"
              disabled="true"
            >
              Robot Framework
            </v-btn>
          </v-card-text>
        </base-material-card>
      </v-col>
      -->
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <base-material-card
          color="teal darken-3"
        >
          <template v-slot:heading>
            <div class="display-1 font-weight-light">
              部署
            </div>
          </template>
          <v-card-text>
            <v-btn
              block="true"
              color="blue lighten-1"
              @click.native="softSettingPage"
            >
              Kubernetes
            </v-btn>
          </v-card-text>
        </base-material-card>
      </v-col>
      <!--
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <base-material-card
          color="teal darken-4"
        >
          <template v-slot:heading>
            <div class="display-1 font-weight-light">
              監控
            </div>
          </template>
          <v-card-text>
            <v-btn
              block="true"
              color="blue lighten-4"
              disabled="true"
            >
              Pormetheus & Grafana
            </v-btn>
          </v-card-text>
        </base-material-card>
      </v-col>
      -->
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardDashboard',

    data () {
      return {
      }
    },

    methods: {
      /*
      complete (index) {
        this.list[index] = !this.list[index]
      },
      */
      softSettingPage: function () {
        this.$router.push('softwaresetting')
      },
    },
  }
</script>
