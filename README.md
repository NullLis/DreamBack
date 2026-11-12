# 仙冢 DreamBack

《仙冢》游戏项目网站。首页、导航、卡片、按钮、渐变背景、下载页和更新日志页采用与 [PullNail](https://nulllis.github.io/PullNail/) 一致的页面布局与视觉设计。

## 页面

- `index.html`：项目介绍、快速链接、核心玩法占位、下载入口与项目信息。
- `html/download.html`：客户端发布状态与平台下载卡片。
- `html/update.html`：更新日志及 GitHub 项目记录。
- `css/style.css`：与 PullNail 一致的橙色渐变、玻璃质感卡片和响应式布局。
- `js/components.js`：所有页面共用的导航、社区菜单和页脚。

> **内容状态：**仓库目前没有公开的客户端 Release、远程配置和完整玩法信息，因此页面只使用可核实的信息。正式版本、玩法文案、配置文件、联系方式、服务协议与隐私政策应在内容确定后独立补充，不直接复用 PullNail 的游戏资料或法律文件。

## GitHub Pages 发布

1. 将本目录内文件（不要连同外层 `dreamback_site` 文件夹）上传至 `NullLis/DreamBack` 的发布分支根目录。
2. 在仓库 `Settings → Pages` 中选择 `Deploy from a branch`，使用 `main` 分支、`/(root)` 目录，保存。
3. 待 GitHub Pages 成功部署后，可访问 `https://nulllis.github.io/DreamBack/`。

如 Pages 已配置其他发布方式，应保留原有配置并按实际情况部署。相对路径已经兼容 `/DreamBack/` 仓库子路径。
