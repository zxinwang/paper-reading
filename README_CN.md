# paper-reading

**有证据的学术论文精读、批判性分析与交互式 HTML 报告生成。**

[English](README.md) · 简体中文

[快速开始](#快速开始) · [真实案例](#真实案例) · [13个研究环节](#13个研究环节) · [常见问题](#常见问题) · [贡献指南](CONTRIBUTING.md)

面向 Codex 和兼容 Agent 的通用 Skill：从论文原文出发，理解研究逻辑、方法与证据，最后生成可以导航、检索和探索的真实报告。它不预设读者的专业，也不限定学科。

## 真实案例

### Omni-LIVO：从论文到交互式中文教程

[![Omni-LIVO 报告真实截图](examples/omni-livo/preview.png)](https://zxinwang.github.io/paper-reading/examples/omni-livo/)

**[在线打开完整报告 →](https://zxinwang.github.io/paper-reading/examples/omni-livo/)** · [下载 HTML](https://github.com/zxinwang/paper-reading/raw/refs/heads/main/examples/omni-livo/index.html) · [案例与验证说明](examples/omni-livo/README.md)

论文完整名称：*Omni-LIVO: Robust RGB-Colored Multi-Camera Visual-Inertial-LiDAR Odometry via Photometric Migration and ESIKF Fusion*。

案例包含完整13环节、可点击的方法流程、展开式推导、27条序列的实验对比、明确标注的参数教学模型，以及可搜索、拖动、停靠和复位的初学者词典。

| 探索方法流程 | 随时查阅专业术语 |
| --- | --- |
| ![方法流程实际截图](examples/omni-livo/method.png) | ![可拖动词典实际截图](examples/omni-livo/glossary.png) |

它由实际调用 `paper-reading` 生成，并在桌面浏览器验收，原始生成轮次63项检查通过。**这证明的是报告功能，不是SLAM算法复现成功。** 公开副本不分发论文PDF，仅将原本地来源链接转向出版页面，保留分析与交互。机器人论文只是一个案例，技能本身不限于此。

## 核心能力

| 能力 | 具体产物 |
| --- | --- |
| 理解研究 | 研究问题、前序工作、直觉、模块、假设和失败传播 |
| 学习专业内容 | 术语首用解释、具体例子、关键数学推导和可搜索词典 |
| 核查证据 | 原文定位、数值复算、公平性分析和不确定性标记 |
| 设计下一步 | 七天最小复现、反例、可证伪候选研究思路 |
| 探索报告 | 完整原名、左侧导航、图表、有效控件与可拖动词典 |
| 理解发表背景 | 核实发表版本，分别说明期刊指标年度、分类与来源 |

正文区分 `[Paper]` 原文、`[Prior work]` 其他研究、`[Inference]` 合理推断和 `[Hypothesis]` 未验证假设。教学模型不写成论文实测，推断不写成作者事实。

## 快速开始

### 1. 安装到 Codex

当前官方文档使用用户目录 `~/.agents/skills`。安装前确认目标不存在，避免覆盖或重复安装同名技能。

macOS / Linux：

```bash
mkdir -p ~/.agents/skills
git clone https://github.com/zxinwang/paper-reading.git ~/.agents/skills/paper-reading
```

Windows PowerShell：

```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\.agents\skills" | Out-Null
git clone https://github.com/zxinwang/paper-reading.git "$env:USERPROFILE\.agents\skills\paper-reading"
```

单个项目可安装至 `<项目>/.agents/skills/paper-reading`。Codex会检测本地技能变化；未出现时可重启。旧版本可能使用不同目录，应遵循对应版本说明。参考 [OpenAI官方文档](https://learn.chatgpt.com/docs/build-skills) 与 [Agent Skills规范](https://agentskills.io/specification)。

### 2. 提供论文

```text
使用 $paper-reading 深度精读这篇论文：<PDF路径、DOI或论文链接>。
面向初学者解释背景、直觉、方法、数学推导、实验、局限与后续研究，
并生成完整的交互式中文 HTML 报告。
```

```text
使用 $paper-reading 为这篇论文设计七天最小复现：<DOI>。
我只有一台普通电脑。选择一个核心主张，说明材料、步骤、指标、
成功判据，以及缩小后的实验不能验证什么。
```

### 3. 打开结果

完整精读通常生成实际HTML文件，用浏览器打开即可。Agent应说明实际执行了哪些核查。若只问一个公式，或明确要求其他格式，则按对应范围完成。

## 输入与输出

**输入：** 本地PDF、DOI、论文标题或可访问的链接。附录、补充材料、官方代码与数据可以改善覆盖；可注明输出语言、阅读背景、重点及复现资源。

**输出：** 有来源的完整教程、交互HTML与真实验证说明。按论文内容调整：定性研究不强造公式，无法读取的表格不补写数字。

通用模板包含深绿封面、薄荷色强调、桌面左侧导航、易读卡片及可拖动/停靠词典。正文、SVG、公式与脚本优先嵌入，核心阅读尽量离线运行；外部引用可能需要网络。参数演示解释明确假设，不预测真实实验性能。

## 13个研究环节

| 环节 | 要回答的问题 |
| --- | --- |
| 01 研究问题与价值 | 解决什么，为什么重要？ |
| 02 前序工作与缺口 | 已经解决什么，还缺什么？ |
| 03 合理研究路径重建 | 什么推理可能引出候选思路？ |
| 04 核心直觉 | 技术细节背后的机制是什么？ |
| 05 方法Pipeline | 各模块输入、操作、输出与失败传播？ |
| 06 数学原理与推导 | 哪些公式重要，成立条件是什么？ |
| 07 实验与证据 | 测了什么、与谁比较、还没证明什么？ |
| 08 核心收获 | 哪些结论有证据支持？ |
| 09 最脆弱假设 | 什么条件失效会动摇方法？ |
| 10 七天最小复现 | 哪个小实验能够区分核心主张？ |
| 11 反例与证伪 | 什么结果会削弱或推翻主张？ |
| 12 后续研究 | 有哪些独立、后续、替代或矛盾证据？ |
| 13 候选研究构想 | 什么下一步经得起检索与可证伪检验？ |

## 适用场景

- 准备组会、读书会、学术讨论或陌生领域入门。
- 审视方法、数学、实验设计与结论边界。
- 制定小规模复现与反例测试。
- 调研后续工作并形成可检验的研究候选。

## 常见问题

**只适合AI或机器人论文吗？** 不。方法、术语、数学与评价都按实际学科和论文调整。

**需要固定模型或付费API吗？** 仓库是一套指令与资源，不是托管读论文服务。它使用运行Agent已有的模型和工具；全文提取、外部检索和浏览器检查需要相应工具可用。

**每篇论文交互都一样吗？** 不。内容支持时要求至少三个有解释价值的交互；不能用虚构数据、无依据模拟或装饰按钮凑数。

**保证正确、新颖或复现成功吗？** 不。缺失材料、公式歧义、检索边界和未执行实验都必须说明。期刊指标不能证明单篇文章质量，重要结论仍需核查。

**会自动把论文和报告公开吗？** 不。生成本地报告与发布是两件事；只应上传用户明确授权的材料。

## 项目结构

```text
paper-reading/
├── SKILL.md
├── README.md / README_CN.md
├── CONTRIBUTING.md
├── .gitignore / .nojekyll
├── index.html
├── references/report-workflow.md
├── assets/
│   ├── report-shell.html
│   ├── report.css
│   ├── glossary-panel.css
│   └── glossary-interactions.js
├── scripts/validate_resources.py
└── examples/omni-livo/
    ├── index.html
    ├── README.md
    ├── numeric-audit.json / provenance.json / validation.json
    └── preview.png / method.png / glossary.png
```

只有一份作为入口的 `SKILL.md`。参考文档补充报告要求；资源提供可复用界面。案例是输出，不是另一份Skill。

## 反馈与贡献

参阅 [贡献指南](CONTRIBUTING.md)，通过 [Issues](https://github.com/zxinwang/paper-reading/issues) 报告可复现问题，或用Pull Request提议改进。请勿在公开反馈中上传私人论文、个人信息或凭据。

项目尚未选择许可证。公开可见本身不授予复用与再分发权利；案例论文及链接研究保留各自权利。
