<template>
  <v-container
    id="filelist-tables"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title=""
      class="px-5 py-3"
    >
      <!--
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
      -->
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
