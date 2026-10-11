"use strict";

const titleTemplates = {
  knowledge: [
    { style: "科普切入", makeTitle: (topic) => `认识「${topic}」：从基础信息说起` },
    { style: "信息辨析", makeTitle: (topic) => `聊「${topic}」：资料事实与个人感受分开看` },
    { style: "来源意识", makeTitle: (topic) => `了解「${topic}」，也别忽略信息来自哪里` },
    { style: "问题梳理", makeTitle: (topic) => `关于「${topic}」，把想了解的问题列出来` },
    { style: "家属视角", makeTitle: (topic) => `和家人一起了解「${topic}」：一份科普阅读提纲` },
  ],
  product: [
    { style: "资料概览", makeTitle: (topic) => `「${topic}」资料概览：名称、来源与阅读要点` },
    { style: "说明书视角", makeTitle: (topic) => `「${topic}」内容准备：从说明书资料整理开始` },
    { style: "信息记录", makeTitle: (topic) => `整理「${topic}」：把资料名称和版本记下来` },
    { style: "原文核对", makeTitle: (topic) => `分享「${topic}」之前，先核对资料原文` },
    { style: "清晰呈现", makeTitle: (topic) => `「${topic}」信息怎么呈现？让来源和要点更清楚` },
  ],
  tutorial: [
    { style: "内容提纲", makeTitle: (topic) => `「${topic}」科普怎么写？先列内容提纲` },
    { style: "资料分类", makeTitle: (topic) => `整理「${topic}」资料：主题、来源、要点分开记` },
    { style: "沟通准备", makeTitle: (topic) => `关于「${topic}」，把想咨询医生的问题整理好` },
    { style: "表达检查", makeTitle: (topic) => `「${topic}」科普草稿：检查措辞是否清楚准确` },
    { style: "发布清单", makeTitle: (topic) => `发布「${topic}」内容前，核对引用与标题` },
  ],
  emotion: [
    { style: "感受交流", makeTitle: (topic) => `聊起「${topic}」，也想听听你真实的感受` },
    { style: "家人陪伴", makeTitle: (topic) => `关于「${topic}」，想和家人好好聊一聊` },
    { style: "患者关怀", makeTitle: (topic) => `「${topic}」之外，那些需要被倾听的心情` },
    { style: "照护心声", makeTitle: (topic) => `记录「${topic}」话题中的陪伴与沟通` },
    { style: "温柔表达", makeTitle: (topic) => `谈「${topic}」时，也给彼此多一点理解` },
  ],
};

const form = document.querySelector("#title-form");
const contentInput = document.querySelector("#content");
const characterCount = document.querySelector("#character-count");
const inputError = document.querySelector("#input-error");
const emptyState = document.querySelector("#empty-state");
const resultsList = document.querySelector("#title-results");
const resultsBadge = document.querySelector("#results-badge");
const resultStatus = document.querySelector("#result-status");

/** Keep topic extraction transparent: templates do not summarize or understand drafts. */
function extractTopic(content) {
  const firstSentence = content.split(/[\n\r。！？!?；;]/u).find((part) => part.trim());
  const topic = (firstSentence || content).trim().replace(/\s+/gu, " ");
  const characters = Array.from(topic);
  return characters.length > 18 ? `${characters.slice(0, 18).join("")}…` : topic;
}

/** Render all user-derived strings as text to prevent HTML interpretation. */
function renderTitles(titles) {
  const fragment = document.createDocumentFragment();

  titles.forEach(({ style, title }, index) => {
    const card = document.createElement("li");
    card.className = "title-card";

    const number = document.createElement("span");
    number.className = "title-number";
    number.textContent = String(index + 1).padStart(2, "0");
    number.setAttribute("aria-hidden", "true");

    const body = document.createElement("div");
    const label = document.createElement("span");
    label.className = "title-style";
    label.textContent = style;

    const text = document.createElement("p");
    text.className = "title-text";
    text.textContent = title;

    body.append(label, text);
    card.append(number, body);
    fragment.append(card);
  });

  resultsList.replaceChildren(fragment);
  emptyState.hidden = true;
  resultsList.hidden = false;
  resultsBadge.textContent = "5 个标题灵感";
  resultsBadge.classList.add("is-ready");
  resultStatus.textContent = "已生成 5 个模拟标题。药品资料未被核实，请核对来源后使用。";
}

function showError(message) {
  inputError.textContent = message;
  inputError.hidden = false;
  contentInput.setAttribute("aria-invalid", "true");
  contentInput.focus();
}

contentInput.addEventListener("input", () => {
  characterCount.textContent = `${contentInput.value.length} / 1000`;
  contentInput.removeAttribute("aria-invalid");
  inputError.hidden = true;
  inputError.textContent = "";
});

document.querySelector("#clear-input").addEventListener("click", () => {
  contentInput.value = "";
  contentInput.dispatchEvent(new Event("input", { bubbles: true }));
  contentInput.focus();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const content = contentInput.value.trim();
  const category = new FormData(form).get("contentType");

  if (!content) {
    showError("先写下你的主题或内容，再生成标题吧。");
    return;
  }
  if (contentInput.value.length > 1000) {
    showError("内容请控制在 1000 字以内。");
    return;
  }
  if (!Object.hasOwn(titleTemplates, category)) {
    showError("请选择一个有效的内容类型。");
    return;
  }

  contentInput.removeAttribute("aria-invalid");
  inputError.hidden = true;
  const topic = extractTopic(content);
  const titles = titleTemplates[category].map(({ style, makeTitle }) => ({ style, title: makeTitle(topic) }));
  renderTitles(titles);

  // On phones the results sit below the form, outside the initial viewport.
  if (window.matchMedia("(max-width: 760px)").matches) {
    document.querySelector(".results-panel").scrollIntoView({ block: "start" });
  }
});
