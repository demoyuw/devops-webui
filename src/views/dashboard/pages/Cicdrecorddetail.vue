<template>
  <v-container
    id="Cicd-record-detail"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12">
        <h1>#8 root/devops-flask master</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-timeline
          align-top
          dense
        >
          <v-timeline-item
            v-for="(timeline, i) in timelines"
            :key="i"
            :color="timeline.color"
            :icon="timeline.icon"
            fill-dot
            large
          >
            <v-card class="pa-6">
              <v-chip
                :color="timeline.color"
                class="overline mb-3"
                small
              >
                {{ timeline.chip }}
              </v-chip>

              <p
                class="subtitle-1 font-weight-light"
                v-html="timeline.text"
              />
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardPagesTimeline',

    data: () => ({
      menu: false,
      timelines: [
        {
          chip: 'Clone',
          color: 'teal',
          icon: 'mdi-numeric-1-box',
          text: "<span class='timestamp'><b>08:26:06</b> </span>Cloning the remote Git repository <br>" +
            "<span class='timestamp'><b>08:26:06</b> </span>Cloning repository <a href='http://10.50.0.20/root/devops-flask'>http://10.50.0.20/root/devops-flask</a> <br>" +
            "<span class='timestamp'><b>08:26:06</b> </span> &gt; git init /home/jenkins/workspace/pipeline_p-5g8vm-14 # timeout=10 <br>" +
            "<span class='timestamp'><b>08:26:06</b> </span>Fetching upstream changes from <a href='http://10.50.0.20/root/devops-flask'>http://10.50.0.20/root/devops-flask</a> <br>" +
            "<span class='timestamp'><b>08:26:06</b> </span> &gt; git --version # timeout=10 <br>" +
            "<span class='timestamp'><b>08:26:07</b> </span>using GIT_ASKPASS to set credentials <br>" +
            "<span class='timestamp'><b>08:26:07</b> </span> &gt; git fetch --tags --progress <a href='http://10.50.0.20/root/devops-flask'>http://10.50.0.20/root/devops-flask</a> +refs/heads/*:refs/remotes/origin/*<br>" +
            "<span class='timestamp'><b>08:26:07</b> </span> &gt; git config remote.origin.url <a href='http://10.50.0.20/root/devops-flask'>http://10.50.0.20/root/devops-flask</a> # timeout=10<br>" +
            "<span class='timestamp'><b>08:26:07</b> </span> &gt; git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10<br>" +
            "<span class='timestamp'><b>08:26:07</b> </span> &gt; git config remote.origin.url <a href='http://10.50.0.20/root/devops-flask'>http://10.50.0.20/root/devops-flask</a> # timeout=10<br>" +
            "<span class='timestamp'><b>08:26:07</b> </span>Fetching upstream changes from <a href='http://10.50.0.20/root/devops-flask'>http://10.50.0.20/root/devops-flask</a><br>" +
            "<span class='timestamp'><b>08:26:07</b> </span>using GIT_ASKPASS to set credentials<br>" +
            "<span class='timestamp'><b>08:26:07</b> </span> &gt; git fetch --tags --progress <a href='http://10.50.0.20/root/devops-flask'>http://10.50.0.20/root/devops-flask</a> +refs/heads/master:refs/remotes/local/temp<br>" +
            "<span class='timestamp'><b>08:26:07</b> </span> &gt; git rev-parse local/temp^{commit} # timeout=10<br>" +
            "<span class='timestamp'><b>08:26:07</b> </span> &gt; git rev-parse refs/remotes/origin/local/temp^{commit} # timeout=10<br>" +
            "<span class='timestamp'><b>08:26:07</b> </span>Checking out Revision e6baa69b157107658f31b813e9091d421ee92ef0 (local/temp)<br>" +
            "<span class='timestamp'><b>08:26:08</b> </span> &gt; git config core.sparsecheckout # timeout=10<br>" +
            "<span class='timestamp'><b>08:26:08</b> </span> &gt; git checkout -f e6baa69b157107658f31b813e9091d421ee92ef0<br>" +
            "<span class='timestamp'><b>08:26:19</b> </span>Commit message: 'Build devops web ui container by VueJS and k8s deployment yaml.' <br>" +
            "<span class='timestamp'><b>08:26:19</b> </span>First time build. Skipping changelog.' <br>"
          ,
        },
        {
          chip: 'run sonarqube runner',
          color: 'teal',
          icon: 'mdi-numeric-2-box',
          text: '<span class="timestamp"><b>08:30:34</b> </span>[pipeline_p-5g8vm-14] Running shell script <br>' +
            '<span class="timestamp"><b>08:30:37</b> </span>+ kube-apply <br>' +
            '<span class="timestamp"><b>08:30:37</b> </span>perform env var substitution <br>' +
            '<span class="timestamp"><b>08:30:42</b> </span>deployment.apps/sonarqube-runner-14 created <br>'
          ,
        },
        {
          chip: 'Public flask image',
          color: 'error',
          icon: 'mdi-numeric-3-box',
          text: '<span class="timestamp"><b>08:33:21</b> </span>Digest: sha256:d235ef613d6f8f2e313cb2e8bfc281a5680f4f7cb38329abb24815a0350484a7 <br>' +
            '<span class="timestamp"><b>08:33:21</b> </span>Status: Downloaded newer image for python:3.6 <br>' +
            '<span class="timestamp"><b>08:33:21</b> </span> ---&gt; 114ae8bdb954 <br>' +
            '<span class="timestamp"><b>08:33:21</b> </span>Step 2/7 : LABEL version="0.1" <br>' +
            '<span class="timestamp"><b>08:33:22</b> </span> ---&gt; Running in b63adbafb37c <br>' +
            '<span class="timestamp"><b>08:33:27</b> </span>Removing intermediate container b63adbafb37c <br>' +
            '<span class="timestamp"><b>08:33:27</b> </span> ---&gt; 0b0f895406ce <br>' +
            '<span class="timestamp"><b>08:33:27</b> </span>Step 3/7 : WORKDIR /usr/src/app <br>' +
            '<span class="timestamp"><b>08:33:32</b> </span>Removing intermediate container 738f82f98f76 <br>' +
            '<span class="timestamp"><b>08:33:32</b> </span> ---&gt; 176fa2f919fe <br>' +
            '<span class="timestamp"><b>08:33:32</b> </span>Step 4/7 : COPY ./sample/flask/dockerfile/* /usr/src/app/ <br>' +
            '<span class="timestamp"><b>08:33:36</b> </span> ---&gt; b199c3fe0f3c <br>' +
            '<span class="timestamp"><b>08:33:36</b> </span>Step 5/7 : RUN pip install --no-cache-dir -r requirements.txt <br>' +
            '<span class="timestamp"><b>08:33:36</b> </span> ---&gt; Running in 74b918b5b56e <br>'
          ,
        },
        {
          chip: 'deploy production flask environment',
          color: 'grey',
          icon: 'mdi-numeric-4-box',
          text: '',
        },
      ],
    }),
  }
</script>
