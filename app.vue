<script setup lang="ts">
const videos = ref([])
const videosObj = ref({})
function changeVideos(event: Event) {
  const target = event.target as HTMLInputElement
  const files = target.files
  videos.value = []
  if (!files) return

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const url = URL.createObjectURL(file)
    videos.value.push({name: file.name.split(' ').slice(0,5).join(' '), url: url})
  }
  videosObj.value = useGroupBy(videos.value, 'name')
  console.log(videosObj.value)
}
</script>

<template>

    <input type="file" multiple accept=".mp4" @change="changeVideos">

    <div>
      </input>
      <div v-for="(videos,key) in videosObj" :key="key" >
        <div class="grid cols-4">
          <video v-for="(video,i) of videos" :key="video.url" :src="video.url" autoplay controls class="border rd-md"></video>
        </div>

        <div class="h8 bg-red"></div>
      </div>
    </div>
</template>
