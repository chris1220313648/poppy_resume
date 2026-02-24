const imageBase = "assets/portfolio";

const portfolioItems = [
  {
    title: "《让我坚持下去的是热爱》",
    category: "叙事与内容表达",
    meta: "竖屏创意短片｜2022｜策划/编剧/导演/拍摄/剪辑",
    desc: "一位影视创作者在质疑与压力中的动摇时刻，在回望初心之后，重新选择与热爱站在一起。",
    highlights: ["获奖：长三角大学生短视频大赛三等奖"],
    images: ["短片1.png"]
  },
  {
    title: "《瞒天过海》大失败？如何站在巨人的肩膀上讲故事",
    category: "叙事与内容表达",
    meta: "视频类影评｜2024｜策划/编剧/导演/拍摄/剪辑",
    desc: "以轻松犀利的方式解析《瞒天过海》翻拍遇冷的背后逻辑，并探讨国产翻拍片的创作突破路径。",
    highlights: ["获奖：第三届泰山·大学生影评大赛银奖"],
    images: ["短片2.png"]
  },
  {
    title: "《吟游诗人》",
    category: "叙事与内容表达",
    meta: "纪录片｜2024｜制片",
    desc: "记录繁忙都市中一个让艺术与诗歌静静生长的角落。",
    highlights: ["获奖：北京师范大学第七届学院影视奖"],
    images: ["短片3.png"]
  },
  {
    title: "《湾区十二时辰》",
    category: "叙事与内容表达",
    meta: "纪录片｜2023｜剪辑",
    desc: "以十二时辰的方式记录独属于湾区人民的生活百态。",
    highlights: ["获奖：第二届华语纪录电影大会“印象珠海”短视频征集入围奖"],
    images: ["短片4.png"]
  },
  {
    title: "《Move Your Body, Chase Your Dream》",
    category: "叙事与内容表达",
    meta: "公司宣传片｜2022｜策划/导演/拍摄/剪辑",
    desc: "上海域动数字科技公司实习期间制作的公司宣传视频。",
    highlights: [],
    images: ["短片5.png"]
  },
  {
    title: "“拾忆”平台项目宣传片",
    category: "叙事与内容表达",
    meta: "项目宣传片｜2022｜策划/导演/拍摄/剪辑",
    desc: "介绍平台创设背景、技术架构、内容涵盖与团队构成等信息。",
    highlights: [],
    images: ["短片6.png"]
  },
  {
    title: "同济大学心理中心官方公众号",
    category: "叙事与内容表达",
    meta: "公众号内容｜25+ 篇原创｜累计阅读量 30,000+",
    desc: "独立负责选题策划、内容撰写与版式设计，打造稳定更新的心理科普栏目体系。",
    highlights: [],
    images: ["公众号1.png", "公众号2.png", "公众号3.png"]
  },
  {
    title: "《白玉兰奖纪录片评委：有的片子创意、想法、技巧都不错，但不真实》",
    category: "叙事与内容表达",
    meta: "文字报道｜中国青年报",
    desc: "围绕纪录片评委观点做深度报道。",
    highlights: [],
    images: ["新闻1.png"]
  },
  {
    title: "《数说传染病后遗症：新冠后遗症真的可怕吗？》",
    category: "叙事与内容表达",
    meta: "数据新闻",
    desc: "以数据新闻形式解析公众关注的健康议题。",
    highlights: ["获奖：大学生校园媒体大赛三等奖"],
    images: ["新闻2.png"]
  },
  {
    title: "同济大学心理中心心理图书馆读书电台",
    category: "叙事与内容表达",
    meta: "电台节目｜14 期",
    desc: "参与策划、录制与剪辑，打造稳定更新的读书电台节目。",
    highlights: [],
    images: ["电台1.png", "电台2.png", "电台3.png"]
  },
  {
    title: "晨曦向暖GZ公众号",
    category: "叙事与内容表达",
    meta: "海报策划｜10+ 张",
    desc: "围绕节日/节气主题输出海报视觉方案。",
    highlights: [],
    images: ["海报1.png", "海报2.png", "海报3.png", "海报4.png"]
  },
  {
    title: "爱回收抖音账号冷启动项目",
    category: "项目策划与执行",
    meta: "账号 0-1 搭建｜办公室轻喜剧内容方向",
    desc: "以办公室日常为核心场景，结合娱乐圈与社会热点进行剧情化改编，打造职场轻喜剧内容风格。",
    highlights: [
      "负责选题方向与内容结构设计，拆解热点转化为可拍摄脚本，完成拍摄、剪辑与发布节奏管理。",
      "项目成果：3 个月粉丝 0→3300+，平均完播率约 40%"
    ],
    images: ["抖音账号1.png", "抖音账号2.png", "抖音账号3.png", "抖音账号4.png"]
  },
  {
    title: "“拾忆”积极老龄与认知健康志愿服务平台",
    category: "项目策划与执行",
    meta: "品牌传播与内容矩阵搭建",
    desc: "围绕老龄认知健康议题，构建“线上内容传播 + 线下志愿活动”双轨运行的公益服务平台。",
    highlights: [
      "负责品牌传播与内容矩阵搭建（10+ 视频 / 30+ 文章），建立小程序视觉与物料体系。",
      "运营 200+ 志愿者社群，落地 6 场社区活动。",
      "项目成果：内容产出效率提升 40%，活动反馈均分 9.8+"
    ],
    images: ["项目logo.png", "项目小程序.png", "项目活动.png"]
  },
  {
    title: "生命故事咖啡馆",
    category: "项目策划与执行",
    meta: "同济大学心理中心线下主题工作坊",
    desc: "以“咖啡对话”形式打造生命议题讨论空间，围绕成长、意义、孤独等主题构建系列化线下内容 IP。",
    highlights: [
      "统筹 5 期活动全流程策划与落地，完成主题设计、讲者对接、报名转化与社群运营。",
      "建立主视觉与宣传模板体系，实现物料标准化输出。",
      "项目成果：累计吸引 50+ 人次参与，公众号新增关注近 200 人"
    ],
    images: ["工作坊1.png", "工作坊2.png", "工作坊3.png", "工作坊4.png"]
  },
  {
    title: "第 29 届中国纪录片学术盛典暨第 16 届深圳青年影像节",
    category: "项目策划与执行",
    meta: "论坛策划与宣传执行",
    desc: "负责论坛议题策划与传播路径设计，统筹预热、嘉宾释出、现场传播及会后内容输出。",
    highlights: [
      "15+ 篇宣传内容，媒体转载（CETV 等），总曝光 100,000+",
      "吸引 2000+ 行业关注"
    ],
    images: ["影像节宣发1.png", "影像节宣发2.png"]
  }
];

const grid = document.getElementById("portfolio-grid");
const modal = document.getElementById("portfolio-modal");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalMeta = document.getElementById("modal-meta");
const modalDesc = document.getElementById("modal-desc");
const modalList = document.getElementById("modal-list");
const modalHero = document.getElementById("modal-hero");

const imagePath = (file) => `${imageBase}/${file}`;

function renderCards() {
  portfolioItems.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "portfolio-card";
    card.setAttribute("data-index", index.toString());

    const images = item.images || [];
    const thumb = images.length ? imagePath(images[0]) : "";

    card.innerHTML = `
      ${thumb ? `<img class="portfolio-thumb" src="${thumb}" alt="${item.title}" data-image>` : `<div class="portfolio-thumb"></div>`}
      <div class="portfolio-content">
        <div class="portfolio-tag">${item.category}</div>
        <div class="portfolio-title">${item.title}</div>
        <div class="portfolio-meta">${item.meta}</div>
      </div>
    `;

    card.addEventListener("click", () => openModal(item));
    grid.appendChild(card);

    const img = card.querySelector("[data-image]");
    if (img) {
      img.addEventListener("error", () => {
        img.replaceWith(createImageFallback(item.title));
      });
    }
  });
}

function openModal(item) {
  modalTitle.textContent = item.title;
  modalCategory.textContent = item.category;
  modalMeta.textContent = item.meta;
  modalDesc.textContent = item.desc || "";

  modalList.innerHTML = "";
  (item.highlights || []).forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    modalList.appendChild(li);
  });

  const heroImage = (item.images || [])[0];
  if (heroImage) {
    modalHero.src = imagePath(heroImage);
    modalHero.alt = item.title;
  } else {
    modalHero.removeAttribute("src");
    modalHero.alt = "";
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

modal.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

renderCards();

function createImageFallback(label) {
  const div = document.createElement("div");
  div.className = "image-fallback";
  div.textContent = label;
  return div;
}
