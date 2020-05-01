<template>
  <v-container
    id="Projecttables"
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
      color="blue-grey"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="blue-grey--text">
              專案名稱
            </th>
            <th class="blue-grey--text">
              被分派工作項目
            </th>
            <th class="blue-grey--text">
              工作期限
            </th>
            <th class="blue-grey--text">
              專案分支數量
            </th>
            <th class="blue-grey--text">
              最近一次測試時間
            </th>
            <th class="blue-grey--text">
              最近一次測試結果
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>iServCloud UI開發</td>
            <td>3</td>
            <td>1 day</td>
            <td>3</td>
            <td>24 mins ago</td>
            <td>
              <v-icon
                color="error"
              >
                mdi-cancel
              </v-icon>
              (10/25)
            </td>
          </tr>
          <tr>
            <td>ERP專案API開發</td>
            <td>1</td>
            <td>1 month</td>
            <td>5</td>
            <td>1 day ago</td>
            <td>
              <v-icon
                color="success"
              >
                mdi-checkbox-marked-circle
              </v-icon>
              (10/10)
            </td>
          </tr>
          <tr>
            <td>VueJS開發專案</td>
            <td>2</td>
            <td>1 day</td>
            <td>2</td>
            <td>2 hours ago</td>
            <td>
              <v-icon
                color="error"
              >
                mdi-cancel
              </v-icon>
              (5/15)
            </td>
          </tr>
          <tr>
            <td>機器學習專案</td>
            <td>4</td>
            <td>2 weeks</td>
            <td>2</td>
            <td>3 day ago</td>
            <td>
              <v-icon
                color="success"
              >
                mdi-checkbox-marked-circle
              </v-icon>
              (5/5)
            </td>
          </tr>
          <tr>
            <td>DevOps-ReactJs.git</td>
            <td>1</td>
            <td>1 day</td>
            <td>7</td>
            <td>7 hours ago</td>
            <td>
              <v-icon
                color="success"
              >
                mdi-checkbox-marked-circle
              </v-icon>
              (9/9)
            </td>
          </tr>
          <tr>
            <td>DevOps-Python-Flask.git</td>
            <td>1</td>
            <td>2 weeks</td>
            <td>6</td>
            <td>1 day ago</td>
            <td>
              <v-icon
                color="success"
              >
                mdi-checkbox-marked-circle
              </v-icon>
              (13/13)
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
    <div class="py-3" />
  </v-container>
</template>
