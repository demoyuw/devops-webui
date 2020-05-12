<template>
  <v-container
    id="commithistory-tables"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="專案名稱：iServCloud UI開發 分支名稱: master"
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
            text: '操作者',
            align: 'start',
            value: 'user',
          },
          { text: 'Message', value: 'message' },
          { text: 'UUID', value: 'uuid' },
          { text: '時間', value: 'time' },
        ],
        desserts: [
          {
            user: 'Wu Chih-hang',
            message: '修改換行符號編碼問題',
            uuid: 'a0d20d7e',
            time: '2 weeks ago',
          },
          {
            user: 'Hwng Wen-Dwo',
            message: 'modify zabbix monitor',
            uuid: 'e983c37c',
            time: '2 weeks ago',
          },
          {
            user: 'We Chih-hang',
            message: '1. 修改 sudoers 中 zabbix 問題，保持 NOPASS 權限',
            uuid: 'ce540413',
            time: '2 weeks ago',
          },
          {
            user: 'Xui Wu-Zheng',
            message: 'API /enableFT 增加 migUri 參數(可有可無)，新增 API /queryFTStatus',
            uuid: '675b16fd',
            time: '2 months ago',
          },
          {
            user: 'Wen-Dwo Hwng',
            message: '1. net_billing files change to UNIX file format',
            uuid: '211e5064',
            time: '3 months ago',
          },
          {
            user: 'yuweichou',
            message: '處理 nova 無法呼叫glance api取得image問題，改用openstack command.',
            uuid: 'cff415b8',
            time: '4 months ago',
          },
          {
            user: 'Ian',
            message: 'Delete old vCtrl folder',
            uuid: 'aa8b81c3 ',
            time: '5 months ago',
          },
          {
            user: 'yuweichou',
            message: '1. 重寫log',
            uuid: 'd032498c',
            time: '5 months ago',
          },
          {
            user: 'Wen-Dwo Hwng',
            message: '增加後端定期檢查機制，解決VM進行移轉時，Nova DB無法正確更新VM移到那個節點上',
            uuid: '711c8c88',
            time: '5 months ago',
          },
          {
            user: 'yuweichou',
            message: 'Backend schedule add sync FT VM location function.',
            uuid: 'b494bc70 ',
            time: '5 months ago',
          },
          {
            user: 'Wen-Dwo Hwng',
            message: '判斷 NAS_HOST 若為空值, 則不將 mount 指令寫入 /etc/rc.local',
            uuid: 'f6bbfe1d ',
            time: '6 months ago',
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
