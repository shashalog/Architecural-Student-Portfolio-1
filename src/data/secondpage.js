import data from "./data/data";
import { createThreeScene } from "./threeScene";

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading" style="margin-bottom: 100px;">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Themed Page</title>
    <link href="https://fonts.googleapis.com/css2?family=Chivo:wght@700;900&family=Nourd&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Chivo', sans-serif;
            background-color: #3d3d3d;
            color: #ffffff;
            margin: 0;
            padding: 0;
        }

        h1, h2 {
            color: #e4d9cb;
        }

        .content {
            padding: 20px;
        }

        .image-gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .image-item {
            background-color: #9faf99;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .image-item img {
            max-width: 300px;
            border-radius: 8px;
        }

        .button-container {
            text-align: center;
            margin-top: 20px;
        }

        #nextButton {
            background-color: #e4d9cb;
            color: #3d3d3d;
            font-family: 'Chivo', sans-serif;
            font-weight: bold;
            border: none;
            padding: 15px 30px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        #nextButton:hover {
            background-color: #9faf99;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to the Next Page</h1>
        <h2>Explore the Images Below</h2>
    </header>
    <div class="content">
        <div class="image-gallery">
            <div class="image-item">
                <img src="image1.jpg" alt="Image 1">
            </div>
            <div class="image-item">
                <img src="image2.jpg" alt="Image 2">
            </div>
            <div class="image-item">
                <img src="image3.jpg" alt="Image 3">
            </div>
            <!-- Add more images as necessary -->
        </div>
    </div>

    <div class="button-container">
        <button id="nextButton">Next</button>
    </div>

    <script>
        document.getElementById("nextButton").addEventListener("click", function() {
            window.location.href = "nextPage.html"; // Link to the next page
        });
    </script>
</body>
</html>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;
