<template>
  <v-container
    id="filelist-tables"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="iServCloud UI開發"
      class="px-5 py-3"
    >
      <v-row>
        <v-menu
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn
              color="primary"
              dark
              v-on="on"
            >
              <v-icon>mdi-call-split</v-icon>
              Branch: master
            </v-btn>
          </template>

          <v-list>
            <v-subheader><h2>Branchs</h2></v-subheader>
            <v-divider />
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="onButtonClick(index)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-spacer />
        <v-btn>
          <v-icon>mdi-file-plus</v-icon>
          Create new file
        </v-btn>
        <v-btn>
          <v-icon>mdi-upload</v-icon>
          Upload files
        </v-btn>
        <v-btn>
          <v-icon>mdi-download</v-icon>
          Clone or download
        </v-btn>
      </v-row>

      <v-data-table
        :headers="headers"
        :items="desserts"
        hide-default-footer
        disable-pagination
      >
        <template v-slot:item.name="{ item }">
          <v-icon>
            {{ getFileType(item.type) }}
          </v-icon>
          {{ item.name }}
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
        headers: [
          { text: '檔案名稱', value: 'name' },
          { text: '最近一次Commit訊息', value: 'message' },
          { text: '最近一次Commit時間', value: 'lastexetime' },
        ],
        desserts: [
          {
            name: 'public',
            type: 'folder',
            message: 'update title',
            lastexetime: '22 days ago',
          },
          {
            name: 'src',
            type: 'folder',
            message: 'eslint',
            lastexetime: '6 days ago',
          },
          {
            name: 'tests',
            type: 'folder',
            message: 'first version',
            lastexetime: 'last month',
          },
          {
            name: '.browserslistrc',
            type: 'file',
            message: 'first version',
            lastexetime: 'last month',
          },
          {
            name: '.editorconfig',
            type: 'file',
            message: 'first version',
            lastexetime: 'last month',
          },
          {
            name: '.env',
            type: 'file',
            message: 'first version',
            lastexetime: 'last month',
          },
          {
            name: '.eslintrc.js',
            type: 'file',
            message: 'first version',
            lastexetime: 'last month',
          },
          {
            name: '.LICENSE.md',
            type: 'file',
            message: 'first version',
            lastexetime: 'last month',
          },
          {
            name: 'package.json',
            type: 'file',
            message: 'first version',
            lastexetime: 'last month',
          },
          {
            name: 'vue.config.js',
            type: 'file',
            message: 'first version',
            lastexetime: 'last month',
          },
          {
            name: 'babel.config.js',
            type: 'file',
            message: 'first version',
            lastexetime: 'last month',
          },
          {
            name: 'cypress.json',
            type: 'file',
            message: 'first version',
            lastexetime: 'last month',
          },
          {
            name: 'jest.config.js',
            type: 'file',
            message: 'first version',
            lastexetime: 'last month',
          },
        ],
        items: [
          { title: 'master' },
          { title: 'develop' },
          { title: 'feature' },
        ],
      }
    },
    methods: {
      getFileType (type) {
        if (type === 'folder') return 'mdi-folder'
        else return 'mdi-file'
      },
    },
  }
</script>
