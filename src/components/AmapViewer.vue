<!-- Usage

<AMap 
  :marker="[121.499809, 31.239663]" 
  :zoom="1" marker-title="东方明珠塔" 
  info-content="<h3>东方明珠塔</h3><p>上海的标志性建筑。</p>" /> 

-->


<template>
  <div class="amap-container" ref="mapContainer"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  marker: {
    type: Array,
    required: true,
    default: () => [121.499809, 31.239663]
  },
  zoom: {
    type: Number,
    default: 1
  },
  markerTitle: {
    type: String,
    default: '默认标记'
  },
})

const mapContainer = ref(null)

// 动态加载高德地图
const loadAMap = () => {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
      return
    }

    window._AMapSecurityConfig = {
      securityJsCode: '59e5805c0e19257f1bd42bf710416d0d'
    }

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://webapi.amap.com/maps?v=2.0&key=ad768f25db9eb67e3883c2a16f59295b'
    script.onerror = reject
    script.onload = () => resolve(window.AMap)
    document.head.appendChild(script)
  })
}

// 初始化地图
const initMap = async () => {
  try {
    await loadAMap()
    const map = new AMap.Map(mapContainer.value, {
      zoom: props.zoom,
      center: [106.515756, 33.908469],
      viewMode: '3D'
    })

    const marker = new AMap.Marker({
      position: props.marker,
      title: props.markerTitle
    })

    map.add(marker)

  } catch (error) {
    console.error('地图加载失败:', error)
  }
}

onMounted(() => {
  initMap()
})
</script>

<style scoped>
.amap-container {
  width: 200px;
  /* 固定宽度 */
  height: 150px;
  /* 固定高度 */
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>