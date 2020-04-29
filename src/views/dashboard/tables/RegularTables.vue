<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <!--
    <base-v-component
      heading="Simple Tables"
      link="components/simple-tables"
    />
    -->

    <base-material-card
      icon="mdi-clipboard-text"
      title=""
      class="px-5 py-3"
    >
      <v-simple-table>
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
            <!--
            <th class="text-right primary--text">
              Salary
            </th>
            -->
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#8</td>
            <td class="red--text">
              Failed
            </td>
            <td>feature</td>
            <td>Change chart type from "Line" to "Bar".</td>
            <td>5 mins</td>
            <!--
            <td class="text-right">
              $36,738
            </td>
            -->
          </tr>

          <tr>
            <td>#7</td>
            <td class="green--text">
              Success
            </td>
            <td>develop</td>
            <td>Update stats-card's title, value and color.</td>
            <td>20 mins</td>
          </tr>

          <tr>
            <td>#6</td>
            <td class="green--text">
              Success
            </td>
            <td>develop</td>
            <td>1. remove one v-col 2. reorder v-col</td>
            <td>1 hr</td>
          </tr>

          <tr>
            <td>#5</td>
            <td class="red--text">
              Failed
            </td>
            <td>master</td>
            <td>remove bar bottom image and transparency.</td>
            <td>4 hrs</td>
          </tr>
          <tr>
            <td>#4</td>
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
            <td>#3</td>
            <td class="green--text">
              Success
            </td>
            <td>develop</td>
            <td>Added fenkins file</td>
            <td>2 days</td>
          </tr>
          <tr>
            <td>#2</td>
            <td class="red--text">
              Failed
            </td>
            <td>feature</td>
            <td>Merge branch 'master'</td>
            <td>18 days</td>
          </tr>
          <tr>
            <td>#1</td>
            <td class="green--text">
              Success
            </td>
            <td>master</td>
            <td>Use alpine python</td>
            <td>1 month</td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <div class="py-3" />

    <!--
    <base-material-card
      color="success"
      dark
      icon="mdi-clipboard-plus"
      title="Table on Dark Background"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>City</th>
            <th class="text-right">
              Salary
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Dakota Rice</td>
            <td>Niger</td>
            <td>Oud-Turnhout</td>
            <td class="text-right">
              $36,738
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Minverva Hooper</td>
            <td>Curaçao</td>
            <td>Sinaas-Waas</td>
            <td class="text-right">
              $23,789
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Sage Rodriguez</td>
            <td>Netherlands</td>
            <td>Baileux</td>
            <td class="text-right">
              $56,142
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Philip Chaney</td>
            <td>Korea, South</td>
            <td>Overland Park</td>
            <td class="text-right">
              $38,735
            </td>
          </tr>

          <tr>
            <td>5</td>
            <td>Doris Greene</td>
            <td>Malawi</td>
            <td>Feldkirchen in Kärnten</td>
            <td class="text-right">
              $63,542
            </td>
          </tr>

          <tr>
            <td>6</td>
            <td>Mason Porter</td>
            <td>Chile</td>
            <td>Gloucester</td>
            <td class="text-right">
              $78,615
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
    -->
  </v-container>
</template>
