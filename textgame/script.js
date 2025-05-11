const story = {
    start: {
      text: "你醒来发现自己在一个陌生的房间。",
      choices: [
        { text: "环顾四周", next: "look_around" },
        { text: "继续睡觉", next: "sleep_again" }
      ]
    },
    look_around: {
      text: "房间里空荡荡的，只有一扇门。",
      choices: [
        { text: "打开门", next: "open_door" },
        { text: "不动", next: "stay" }
      ]
    },
    sleep_again: {
      text: "你再次进入梦乡……游戏结束。",
      choices: []
    },
    open_door: {
      text: "你打开门，看见外面是阳光灿烂的森林。",
      choices: []
    },
    stay: {
      text: "你站在原地，什么也没有发生。",
      choices: []
    }
  };
  
  function showNode(key) {
    const node = story[key];
    const textEl = document.getElementById("text");
    const choicesEl = document.getElementById("choices");
  
    textEl.textContent = node.text;
    choicesEl.innerHTML = "";
  
    node.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = choice.text;
      btn.className = "choice-button";
      btn.onclick = () => showNode(choice.next);
      choicesEl.appendChild(btn);
    });
  }
  
  showNode("start");
  