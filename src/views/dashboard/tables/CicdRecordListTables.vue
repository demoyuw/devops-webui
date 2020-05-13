<template>
  <v-container
    id="cicdrecordlist-tables"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title=""
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
        <template v-slot:item.index="{ item }">
          <a href='#/cicd/recorddetail'>
            {{ item.index }}
          </a>
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip
            :color="getColor(item.status)"
            dark
          >
            {{ item.status }}
          </v-chip>
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
            text: 'Index',
            align: 'start',
            value: 'index',
          },
          { text: '狀態', value: 'status' },
          { text: '分支名稱', value: 'branchname' },
          { text: '程式碼版控訊息', value: 'message' },
          { text: '最近一次執行時間', value: 'lastexetime' },
        ],
        desserts: [
          {
            index: '#8',
            status: 'Failed',
            branchname: 'feature',
            message: 'Change chart type from "Line" to "Bar".',
            lastexetime: '5 mins ago',
          },
          {
            index: '#7',
            status: 'Success',
            branchname: 'develop',
            message: "Update stats-card's title, value and color.",
            lastexetime: '20 mins ago',
          },
          {
            index: '#6',
            status: 'Success',
            branchname: 'develop',
            message: '1. remove one v-col 2. reorder v-col',
            lastexetime: '1 hr ago',
          },
          {
            index: '#5',
            status: 'Failed',
            branchname: 'master',
            message: 'remove bar bottom image and transparency.',
            lastexetime: '4 hrs ago',
          },
          {
            index: '#4',
            status: 'Success',
            branchname: 'feature',
            message: '1. Add png file "infinite.png" 2. rename router name "src/router.js"',
            lastexetime: '5 mins ago',
          },
          {
            index: '#3',
            status: 'Success',
            branchname: 'develop',
            message: 'Added fenkins file',
            lastexetime: '2 days ago',
          },
          {
            index: '#2',
            status: 'Failed',
            branchname: 'feature',
            message: "Merge branch 'master'",
            lastexetime: '18 days ago',
          },
          {
            index: '#1',
            status: 'Success',
            branchname: 'master',
            message: 'Use alpine python',
            lastexetime: '1 month ago',
          },
        ],
      }
    },
    methods: {
      getColor (status) {
        if (status === 'Failed') return 'red'
        else return 'green'
      },
    },
  }
</script>
