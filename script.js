function runExperiment(type) {
  const resultBox = document.getElementById("experiment-result");

  if (type === "snack") {
    resultBox.textContent =
      "實驗結果：投餵成功！星貓發出滿足呼嚕聲｜幸福感 98%｜焦慮值 2%";
  } else if (type === "hug") {
    resultBox.textContent =
      "實驗結果：偵測到六月抱抱！黏人依賴需求獲得高度滿足｜幸福感 100%｜焦慮值 0%";
  } else if (type === "ignore") {
    resultBox.textContent =
      "警告：超過 10 分鐘未獲回應！星貓正在角落觀察六月動向｜幸福感 45%｜焦慮值 75%（建議立即投餵或抱抱）";
  }
}
