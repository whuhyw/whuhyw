<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <div class="logo">
        <a href="#home">Your Logo</a>
      </div>
      
      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <!-- <a href="#home" @click="closeMenu">首页</a>
        <a href="#landmarks" @click="closeMenu">地标</a>
        <a href="#culture" @click="closeMenu">文化</a>
        <a href="#about" @click="closeMenu">关于</a> -->
      </div>

      <div class="menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
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
/* --- 核心：移除固定定位，让导航栏回归文档流 --- */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  z-index: 1000; /* z-index 保留，确保在内容之上 */
  height: 60px;
}

/* scrolled 类现在只负责改变视觉效果，不再影响布局定位 */
.navbar.scrolled {
  padding: 0.5rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
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
  color: #007bff;
}

/* 移动端菜单按钮 */
.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: #333;
  margin: 3px 0;
  transition: 0.3s;
}

/* 响应式设计 */
@media screen and (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  /* 
    注意：移动端菜单本身仍然是 fixed 的，因为它需要覆盖整个屏幕。
    因为导航栏现在是正常流元素且位于顶部，所以 top: 60px 可以安全地
    将菜单定位在导航栏正下方。
  */
  .nav-links {
    position: fixed;
    top: 60px; /* 这个值现在与 navbar 的 height 完美对应 */
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
}
</style>
