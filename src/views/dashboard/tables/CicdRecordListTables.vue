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
      <!--
      <v-card-title>
        Nutrition
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
      >
      </v-data-table>
      -->
      <v-sample-table>
        <thead>
          <tr>
            <th class="primary--text">
              Index
            </th>
            <th class="primary--text">
              狀態
            </th>
            <th class="primary--text">
              分支名稱
            </th>
            <th class="primary--text">
              程式碼版控訊息
            </th>
            <th class="primary--text">
              最近一次執行時間
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <a href="#/cicd/recorddetail">
                #8
              </a>
            </td>
            <td class="red--text">
              Failed
            </td>
            <td>feature</td>
            <td>Change chart type from "Line" to "Bar".</td>
            <td>5 mins</td>
          </tr>

          <tr>
            <td>
              <a href="#/cicd/recorddetail">
                #7
              </a>
            </td>
            <td class="green--text">
              Success
            </td>
            <td>develop</td>
            <td>Update stats-card's title, value and color.</td>
            <td>20 mins</td>
          </tr>

          <tr>
            <td>
              <a href="#/cicd/recorddetail">
                #6
              </a>
            </td>
            <td class="green--text">
              Success
            </td>
            <td>develop</td>
            <td>1. remove one v-col 2. reorder v-col</td>
            <td>1 hr</td>
          </tr>

          <tr>
            <td>
              <a href="#/cicd/recorddetail">
                #5
              </a>
            </td>
            <td class="red--text">
              Failed
            </td>
            <td>master</td>
            <td>remove bar bottom image and transparency.</td>
            <td>4 hrs</td>
          </tr>
          <tr>
            <td>
              <a href="#/cicd/recorddetail">
                #4
              </a>
            </td>
            <td class="green--text">
              Success
            </td>
            <td>develop</td>
            <td>
              1. Add png file "infinite.png"
              2. rename router name "src/router.js"
            </td>
            <td>1 day</td>
          </tr>
          <tr>
            <td>
              <a href="#/cicd/recorddetail">
                #3
              </a>
            </td>
            <td class="green--text">
              Success
            </td>
            <td>develop</td>
            <td>Added fenkins file</td>
            <td>2 days</td>
          </tr>
          <tr>
            <td>
              <a href="#/cicd/recorddetail">
                #2
              </a>
            </td>
            <td class="red--text">
              Failed
            </td>
            <td>feature</td>
            <td>Merge branch 'master'</td>
            <td>18 days</td>
          </tr>
          <tr>
            <td>
              <a href="#/cicd/recorddetail">
                #1
              </a>
            </td>
            <td class="green--text">
              Success
            </td>
            <td>master</td>
            <td>Use alpine python</td>
            <td>1 month</td>
          </tr>
        </tbody>
      </v-sample-table>
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
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
  }
</script>
