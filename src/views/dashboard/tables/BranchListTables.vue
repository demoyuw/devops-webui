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
            <td>{{ row.item.branchname }}</td>
            <td>{{ row.item.Thelastcommitmessage }}</td>
            <td>{{ row.item.Thelastcommittime }}</td>
            <td>
              <!--
              <v-btn
                class="mx-2"
                fab
                small
                color="grey"
                @click="onButtonClick(row.item)"
              >
                <v-icon>mdi-hammer-wrench</v-icon>
              </v-btn>
              -->
              <!--
              <v-overflow-btn
                class="my-2"
                :items="items"
                label="Overflow Btn - Dense"
                dense
              >
                <v-icon>mdi-hammer-wrench</v-icon>
              </v-overflow-btn>
              -->
              <v-menu
                top
                offset-x
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    color="primary"
                    dark
                    v-on="on"
                  >
                    <v-icon>mdi-hammer-wrench</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    @click="onButtonClick(index)"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
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
          { text: '', value: '' },
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
        items: [
          { title: '新增檔案' },
          { title: '上傳檔案' },
          { title: '建立新資料夾' },
          { title: '編輯檔案' },
          { title: '新增分支' },
          { title: '新增版本號' },
          { title: '分支版控紀錄' },
          { title: '下載檔案' },
          { title: '合併分支' },
          { title: '刪除分支' },
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
      onButtonClick (index) {
        console.log('click on ' + index)
        if (index === 6) {
          this.$router.push('commithistorytables')
        }
      },
    },
  }
</script>
