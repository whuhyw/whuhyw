<template>
  <div class="about-page">
    <h1>关于我们四个</h1>
    
    <!-- GitHub仓库卡片 -->
    <div class="repo-card-container">
      <div class="repo-card">
        <div class="repo-header">
          <a href="https://github.com/whuhyw/whuhyw" target="_blank" class="repo-name">whuhyw/whuhyw</a>
          <span class="repo-visibility">Public</span>
        </div>
        <div class="repo-description">
          {{ repoData.description }}
        </div>
        <div class="repo-stats">
          <div class="stat">
            <svg height="16" class="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
              <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
            </svg>
            <span id="repo-stars">{{ repoData.stars }}</span>
          </div>
          <div class="stat">
            <svg height="16" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
            </svg>
            <span id="repo-forks">{{ repoData.forks }}</span>
          </div>
          <div class="stat">
            <svg height="16" class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
              <path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
            <span id="repo-watchers">{{ repoData.watchers }}</span>
          </div>
          <div class="stat">
            <svg height="16" class="octicon octicon-issue-opened" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
              <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              <path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
            </svg>
            <span>{{ repoData.openIssues }}</span>
          </div>
        </div>
        <div class="repo-dates">
          <div class="date-info">
            <span class="date-label">创建于:</span>
            <span class="date-value">{{ repoData.createdAt }}</span>
          </div>
          <div class="date-info">
            <span class="date-label">更新于:</span>
            <span class="date-value">{{ repoData.updatedAt }}</span>
          </div>
        </div>
        <div class="repo-languages">
          <div class="language-bar">
            <div class="language" style="background-color: #3572A5; width: 80%;"></div>
            <div class="language" style="background-color: #e34c26; width: 20%;"></div>
          </div>
          <div class="language-list">
            <span class="language-item"><span class="color" style="background-color: #3572A5;"></span>Python</span>
            <span class="language-item"><span class="color" style="background-color: #e34c26;"></span>HTML</span>
          </div>
        </div>
      </div>
    </div>
    
    <p>
      队长：□□□□□□<br>
      <br>

      参与者：□□□<br>
      <br>

      参与者：□□□<br>
      任务分工：网页设计<br>
      <br>

      参与者：□□□<br>
      任务分工：图片收集及文案撰写<br>
    </p>
    <h1>
      WHUHYW Present
    </h1>
  </div>
</template>

<style scoped>
.about-page {
  background-color: var(--bg-color);
  min-height: 100vh;
  padding-top: 60px;
  padding-left: 6vw;
  padding-bottom: 60px;
}

.about-page h1 {
  font-family: 'rtsxt', '宋体', sans-serif;
  font-size: 3.5rem;
  font-weight: 500;
  color: var(--h1-color);
  margin-top: 2vw;
  margin-bottom: 2rem;
}

.about-page h2 {
  font-family: '宋体';
  font-size: 2rem;
  font-weight: 500;
  margin-top: 2vw;
  margin-bottom: 2rem;
}

.about-page p {
  font-family: '宋体';
  margin-left: 25px;
  font-size: 24px;
}

/* GitHub仓库卡片样式 */
.repo-card-container {
  margin: 1.5rem 0 1.5rem 25px;
  max-width: 600px;
}

.repo-card {
  background-color: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.repo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.repo-name {
  font-size: 18px;
  font-weight: 600;
  color: #0366d6;
  text-decoration: none;
}

.repo-name:hover {
  text-decoration: underline;
}

.repo-visibility {
  font-size: 12px;
  color: #586069;
  background-color: #f1f3f4;
  padding: 2px 6px;
  border-radius: 12px;
}

.repo-description {
  margin-bottom: 12px;
  font-size: 13px;
  color: #24292e;
}

.repo-stats {
  display: flex;
  gap: 14px;
  margin-bottom: 12px;
}

.stat {
  display: flex;
  align-items: center;
  gap: 3px;
  color: #586069;
  font-size: 11px;
}

.stat svg {
  fill: #586069;
  width: 14px;
  height: 14px;
}

.repo-languages {
  margin-top: 6px;
}

.language-bar {
  height: 6px;
  background-color: #e1e4e8;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  margin-bottom: 6px;
}

.language {
  height: 100%;
}

.language-list {
  display: flex;
  gap: 7px;
  font-size: 11px;
}

.language-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.repo-dates {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 6px;
  margin-bottom: 12px;
  font-size: 11px;
  color: #586069;
}

.date-info {
  display: flex;
  align-items: center;
  gap: 4px;
}

.date-label {
  font-weight: 500;
}
</style>

<script>
export default {
  name: 'About',
  data() {
    return {
      repoData: {
        name: 'whuhyw/whuhyw',
        description: '加载中...',
        stars: 0,
        forks: 0,
        watchers: 0,
        languages: [],
        createdAt: '',
        updatedAt: '',
        openIssues: 0
      }
    };
  },
  mounted() {
    // 获取GitHub仓库数据
    this.fetchRepoData();
  },
  methods: {
    async fetchRepoData() {
      try {
        // 获取仓库基本信息
        const repoResponse = await fetch('https://api.github.com/repos/whuhyw/whuhyw');
        if (!repoResponse.ok) {
          throw new Error('仓库数据获取失败');
        }
        const repoData = await repoResponse.json();
        
        // 获取仓库语言信息
        const languagesResponse = await fetch('https://api.github.com/repos/whuhyw/whuhyw/languages');
        let languagesData = {};
        if (languagesResponse.ok) {
          languagesData = await languagesResponse.json();
        }
        
        // 更新数据
        this.repoData = {
          name: repoData.full_name,
          description: repoData.description || '武汉大学学生项目仓库',
          stars: repoData.stargazers_count,
          forks: repoData.forks_count,
          watchers: repoData.watchers_count,
          languages: this.processLanguages(languagesData),
          createdAt: new Date(repoData.created_at).toLocaleDateString(),
          updatedAt: new Date(repoData.updated_at).toLocaleDateString(),
          openIssues: repoData.open_issues_count
        };
        
        // 更新DOM元素
        document.getElementById('repo-stars').textContent = this.repoData.stars;
        document.getElementById('repo-forks').textContent = this.repoData.forks;
        document.getElementById('repo-watchers').textContent = this.repoData.watchers;
        
        // 更新语言分布
        this.updateLanguageBar();
        
      } catch (error) {
        console.error('获取仓库数据失败:', error);
        // 使用默认值
        document.getElementById('repo-stars').textContent = '0';
        document.getElementById('repo-forks').textContent = '0';
        document.getElementById('repo-watchers').textContent = '0';
      }
    },
    
    processLanguages(languagesData) {
      const total = Object.values(languagesData).reduce((sum, bytes) => sum + bytes, 0);
      return Object.entries(languagesData).map(([name, bytes]) => ({
        name,
        percentage: Math.round((bytes / total) * 100),
        color: this.getLanguageColor(name)
      }));
    },
    
    getLanguageColor(language) {
      const colors = {
        'Python': '#3572A5',
        'HTML': '#e34c26',
        'JavaScript': '#f1e05a',
        'CSS': '#563d7c',
        'Vue': '#41b883',
        'TypeScript': '#2b7489',
        'Java': '#b07219',
        'C++': '#f34b7d',
        'C': '#555555',
        'Go': '#00ADD8',
        'Rust': '#dea584',
        'Ruby': '#701516',
        'PHP': '#4F5D95',
        'Swift': '#ffac45',
        'Kotlin': '#F18E33',
        'Dart': '#00B4AB',
        'Shell': '#89e051',
        'Dockerfile': '#384d54',
        'Makefile': '#427819'
      };
      return colors[language] || '#cccccc';
    },
    
    updateLanguageBar() {
      const languageBar = document.querySelector('.language-bar');
      const languageList = document.querySelector('.language-list');
      
      // 清空现有内容
      languageBar.innerHTML = '';
      languageList.innerHTML = '';
      
      // 添加新的语言条目
      this.repoData.languages.forEach(lang => {
        // 添加到条形图
        const langBar = document.createElement('div');
        langBar.className = 'language';
        langBar.style.backgroundColor = lang.color;
        langBar.style.width = `${lang.percentage}%`;
        languageBar.appendChild(langBar);
        
        // 添加到语言列表
        const langItem = document.createElement('span');
        langItem.className = 'language-item';
        langItem.innerHTML = `<span class="color" style="background-color: ${lang.color};"></span>${lang.name}`;
        languageList.appendChild(langItem);
      });
    }
  }
}
</script>