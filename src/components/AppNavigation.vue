<template>
  <nav class="app-navbar" :class="{ 'scrolled': isScrolled }">
    <div class="navbar-container">
      <div class="navbar-left">
        <transition name="back-button-fade">
          <button v-if="showBackButton" class="navbar-back-button" @click="goBack">
            <svg class="back-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </transition>
        <router-link class="navbar-title" :class="{ 'no-back-button': !showBackButton }" to="/">方寸屏间，万里河山</router-link>
      </div>

      <div class="navbar-links" :class="{ 'active': isMenuOpen }">
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
.app-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  padding: 1rem 0;
  background: var(--navbar-bg);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  z-index: 100;
  height: 60px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.app-navbar.scrolled {
  padding: 0.5rem 0;
  background: var(--navbar-bg-scrolled);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-left {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.navbar-back-button {
  position: absolute;
  left: 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-back-button:hover {
  color: var(--navbar-text-hover);
  transform: translateX(-3px);
}

.back-icon {
  width: 24px;
  height: 24px;
  color: var(--navbar-text);
}

.back-button-fade-enter-active {
  transition: all 0.3s ease;
}

.back-button-fade-leave-active {
  transition: all 0.3s ease;
}

.back-button-fade-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.back-button-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.navbar-title {
  margin-top: 5px;
  position: absolute;
  left: 44px;
  right: 0;
  white-space: nowrap;
  transition: left 0.3s ease, color 0.3s ease;
  font-family: 'rtsxt';
  font-size: 40px;
  color: var(--navbar-text);
}

.navbar-title.no-back-button {
  left: 0;
}

.navbar-title:hover {
  color: var(--navbar-text-hover);
}

.navbar-links {
  display: flex;
  gap: 2rem;
}

.navbar-links a {
  text-decoration: none;
  color: var(--navbar-text);
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar-links a:hover {
  color: var(--navbar-text-hover);
}

</style>
