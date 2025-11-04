<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <div style="display: flex;flex-direction: row;">
        <button v-if="showBackButton" class="back-button" @click="goBack">
          ←
        </button>
        <div class="logo">
          <router-link to="/" style="font-family: '宋体';">方寸屏间，万里河山</router-link>
        </div>
      </div>

      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <router-link to="/about" @click="closeMenu">关于</router-link>
      </div>

    </div>
  </nav>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'NavigationBar',
  setup() {
    const route = useRoute()
    const router = useRouter()

    // 判断是否显示返回按钮
    const showBackButton = computed(() => route.path !== '/')

    const goBack = () => {
      router.back()
    }

    return {
      showBackButton,
      goBack
    }
  },
  props: {
    isScrolled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}

</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  z-index: 100;
  height: 60px;
}

.navbar.scrolled {
  padding: 0.5rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #333;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.back-button:hover {
  color: #888888;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}


.logo a:hover {
  color: #888888;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #888888;
}

/* 响应式设计 */
/* @media screen and (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 60px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 60px);
    background: rgba(255, 255, 255, 0.98);
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 2rem;
    transition: 0.3s;
  }

  .nav-links.active {
    left: 0;
  }

  .nav-links a {
    font-size: 1.2rem;
    margin: 1rem 0;
  }
} */
</style>
