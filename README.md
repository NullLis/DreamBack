# DreamBack《仙冢》服务协议与隐私政策（穿山甲 + 虚幻引擎版本）

## 已确认

- 游戏名称：DreamBack《仙冢》
- 开发引擎：Unreal Engine（虚幻引擎）
- 第三方广告 SDK：穿山甲广告 SDK（提供方：北京巨量引擎网络技术有限公司）
- 现有网站样式与导航：继续依赖 `../css/style.css` 和 `../js/components.js`
- 开发者与联系邮箱：按《拔钉子》现有公开材料暂沿用深圳市梦新技术工作室（个人独资）与 `316697487@qq.com`，上线前请确认

## 文件放置位置

将压缩包内以下文件上传到 `NullLis/DreamBack` 仓库的 `html/` 目录：

- `html/agreement.html`
- `html/privacy.html`

无需修改现有的 `index.html`、`js/components.js` 或 `css/style.css`。现有页脚引用的两条相对链接会自动打开新增页面。

## 发布前必须核实

这些文件是基于已经确认的引擎和 SDK 事实制作的详细草案；**不是已经通过隐私合规审核的结论**。上线前应核实：

1. 当前 APK/AAB 实际集成的穿山甲 SDK **准确版本**、是否启用个性化广告、是否接入 Gromore 聚合或其他 SDK。
2. 实际采集的信息类别、Android Manifest 权限、设备标识调用与运行时网络数据流；部分历史 SDK 版本可能涉及的字段不得误写为当前版必采。
3. SDK 初始化和个人信息处理是否在履行必要告知、同意等程序之后进行；游戏内是否具备实际可用的退出、撤回等机制。
4. 是否另行使用 Epic Online Services、Unreal Crash Reporter、Epic 账号或其他会处理玩家数据的在线服务；仅使用虚幻引擎不等于自动向 Epic 上传数据。
5. 游戏是否真的提供本地存档、云同步、付费、账号、上传或其他特殊功能，并据此核实条款。

官方参考：

- 穿山甲广告 SDK 隐私政策： https://www.csjplatform.com/privacy/partner
- 穿山甲广告 SDK 合规使用说明： https://www.csjplatform.com/terms/compliance-guide
- GitHub 隐私声明： https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement

文档更新日期：2026-11-13。
