<template>
  <v-container
    id="Jobtables"
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
      color="light-blue"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="light-blue--text">
              工作單號
            </th>
            <th class="light-blue--text">
              工作類型
            </th>
            <th class="light-blue--text">
              優先級別
            </th>
            <th class="light-blue--text">
              狀態
            </th>
            <th class="light-blue--text">
              專案
            </th>
            <th class="light-blue--text">
              工作名稱
            </th>
            <th class="light-blue--text">
              工作啟始日期
            </th>
            <th class="light-blue--text">
              工作結束日期
            </th>
            <th class="light-blue--text">
              最近一次測試結果
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>3519</td>
            <td>Feature</td>
            <td>特急</td>
            <td>Assigned</td>
            <td>iServCloud UI開發</td>
            <td>[ClientUI] 使用boot from iso 掛載volume問題</td>
            <td>2020-04-10</td>
            <td>2020-06-30</td>
            <td class="green--text">
              Successful
            </td>
          </tr>
          <tr>
            <td>4308</td>
            <td>Bug</td>
            <td>急</td>
            <td>Active</td>
            <td>iServCloud UI開發</td>
            <td>[雲碼] 蒐集各實體機上的iServCloud component service 的 "ERROR" message，並寫入DB。</td>
            <td>2020-01-12</td>
            <td>2020-01-16</td>
            <td class="red--text">
              Failed
            </td>
          </tr>
          <tr>
            <td>4295</td>
            <td>Bug</td>
            <td>高</td>
            <td>Solved</td>
            <td>ERP專案API開發</td>
            <td>自動化後端API開發作業流程</td>
            <td>2020-03-15</td>
            <td>2020-05-14</td>
            <td class="green--text">
              Successful
            </td>
          </tr>
          <tr>
            <td>4003</td>
            <td>Feature</td>
            <td>正常</td>
            <td>Responsed</td>
            <td>iServCloud UI開發</td>
            <td>Auto Live migraion功能</td>
            <td>2020-03-01</td>
            <td>2020-04-30</td>
            <td class="red--text">
              Failed
            </td>
          </tr>
          <tr>
            <td>3325</td>
            <td>Bug</td>
            <td>低</td>
            <td>Active</td>
            <td>ERP專案API開發</td>
            <td>Backup node install </td>
            <td>2020-01-20</td>
            <td>2020-02-19</td>
            <td class="green--text">
              Successful
            </td>
          </tr>
          <tr>
            <td>4101</td>
            <td>Document</td>
            <td>正常</td>
            <td>Finished</td>
            <td>機器學習專案</td>
            <td>完成TensorFlow教學文件</td>
            <td>2020-05-01</td>
            <td>2020-05-15</td>
            <td />
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
    <div class="py-3" />
  </v-container>
</template>
