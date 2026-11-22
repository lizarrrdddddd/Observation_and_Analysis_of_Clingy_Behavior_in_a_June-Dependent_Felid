const expMessages = {
  en: {
    snack: "Result: Feeding successful! Katstelo purrs contentedly · Well-being 98% · Anxiety 2%",
    hug: "Result: June hug detected! Clingy attachment needs highly satisfied · Well-being 100% · Anxiety 0%",
    ignore: "Warning: No response for 10+ minutes! Katstelo monitoring June from the corner · Well-being 45% · Anxiety 75% (Immediate feeding or hug advised)"
  },
  zh: {
    snack: "實驗結果：投餵成功！星貓發出滿足呼嚕聲｜幸福感 98%｜焦慮值 2%",
    hug: "實驗結果：偵測到六月抱抱！黏人依賴需求獲得高度滿足｜幸福感 100%｜焦慮值 0%",
    ignore: "警告：超過 10 分鐘未獲回應！星貓正在角落觀察六月動向｜幸福感 45%｜焦慮值 75%（建議立即投餵或抱抱）"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const isZh = (document.documentElement.lang || "").toLowerCase().startsWith("zh");
  const langKey = isZh ? "zh" : "en";
  const resultBox = document.getElementById("experiment-result");

  document.querySelectorAll("[data-exp]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-exp");
      if (resultBox && expMessages[langKey] && expMessages[langKey][type]) {
        resultBox.textContent = expMessages[langKey][type];
      }
    });
  });
});
