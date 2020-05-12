<template>
  <v-container
    id="branchlist-tables"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="專案名稱：iServCloud UI開發"
      class="px-5 py-3"
    >
      <v-card-title>
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      >
        <!--
        <template v-slot:item.status="{ item }">
          <v-chip
            :color="getColor(item.status)"
            dark
          >
            {{ item.status }}
          </v-chip>
        </template>
        -->
        <template v-slot:item="row">
          <tr>
            <td>{{row.item.branchname}}</td>
            <td>{{row.item.Thelastcommitmessage}}</td>
            <td>{{row.item.Thelastcommittime}}</td>
            <td>
                <v-btn
                  class="mx-2"
                  fab
                  small
                  color="grey"
                  @click="onButtonClick(row.item)"
                >
                  <v-icon>mdi-hammer-wrench</v-icon>
                </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </base-material-card>

    <div class="py-3" />
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardDashboard',

    data () {
      return {
        search: '',
        headers: [
          {
            text: '分支名稱',
            align: 'start',
            value: 'branchname',
          },
          { text: '最新Commit訊息', value: 'Thelastcommitmessage' },
          { text: '最近一次Commit時間', value: 'Thelastcommittime' },
        ],
        desserts: [
          {
            branchname: 'feautre',
            Thelastcommitmessage: 'Delete file',
            Thelastcommittime: '24 min ago',
          },
          {
            branchname: 'develop',
            Thelastcommitmessage: 'Merge branch master into develop',
            Thelastcommittime: '1 day ago',
          },
          {
            branchname: 'master',
            Thelastcommitmessage: 'Release v2.8.0',
            Thelastcommittime: '2 weeks ago',
          },
        ],
      }
    },
    methods: {
      /*
      getColor (status) {
        if (status === 'Failed') return 'red'
        else return 'green'
      },
      */
      onButtonClick (item) {
        console.log('click on ' + item.no)
      },
    },
  }
</script>
