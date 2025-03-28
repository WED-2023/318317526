document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.getElementById("likeButton");
  const likeCount = document.getElementById("likeCount");
  let count = 0;

  likeBtn.addEventListener("click", () => {
    count++;
    likeCount.textContent = count;

    likeBtn.classList.remove("clicked");
    void likeBtn.offsetWidth;
    likeBtn.classList.add("clicked");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const emojis = document.querySelectorAll(".emoji");
  const textarea = document.getElementById("message");

  emojis.forEach((emoji) => {
    emoji.addEventListener("click", () => {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;

      const before = text.substring(0, start);
      const after = text.substring(end);

      textarea.value = before + emoji.textContent + after;

      textarea.selectionStart = textarea.selectionEnd =
        start + emoji.textContent.length;
      textarea.focus();
    });
  });
});
