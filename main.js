<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Will You Be My Valentine? 💖</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Will You Be My Valentine? 💕</h1>
    <p>You make my world brighter every day! 🌸</p>
    
    <div class="button-container">
      <button class="yes-button" onclick="showMessage('yes')">Yes! ❤️</button>
      <button class="no-button" onclick="showMessage('no')">No 😢</button>
    </div>

    <div id="message"></div>
  </div>

  <script>
    function showMessage(answer) {
      const message = document.getElementById('message');
      if (answer === 'yes') {
        message.innerHTML = "<p>Yay! Can't wait to spend Valentine's Day with you! 🎉💕</p>";
      } else {
        message.innerHTML = "<p>That's okay! You're still amazing! 😊</p>";
      }
    }
  </script>
</body>
</html>
