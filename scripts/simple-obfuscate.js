// 简单混淆密码
const encodedPassword = btoa('20051021'); // 加密存储

function checkPassword(input) {
  return btoa(input) === encodedPassword;
}

// 文章内容也混淆
const encodedContent = btoa('这是私人日记内容...');

function decodeContent() {
  return atob(encodedContent);
}
