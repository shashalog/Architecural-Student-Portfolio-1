import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

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
    <title>Your Website</title>
    <style>
        /* Reset some default styles */
        body {
            margin: 0;
            padding: 0;
            font-family: 'Orbitron', sans-serif;  /* Futuristic font */
            background-color: ##1a24ab;  
            color: #fff;  /* White text for contrast */
        }

        /* Section style */
        #projects {
            width: 100%;
            padding: 0;
            margin: 0;
        }

        /* Center the large image and make it responsive */
        #project-row {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 0;
            padding: 0;
        }

        /* Style for the large image */
        .three-model img {
            width: auto;
            max-width: 100%;   /* Ensures image is never wider than the viewport */
            height: auto;
            object-fit: cover; /* Ensures the image is displayed properly */
            transform: scale(1.2);  /* Blow up the image */
            margin-top: 20px;
        }

        /* Styling for the project title */
        h2 {
            font-size: 2rem; /* Large title font */
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 5px;
            color: #0ff; /* Cyan color for a futuristic look */
            text-shadow: 0px 0px 10px rgba(0, 255, 255, 0.7), 0px 0px 20px rgba(0, 255, 255, 0.5);
            margin-top: 20px;
            margin-bottom: 20px;
        }

        /* Styling for the description section */
        #images-description {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
        }

        /* Cube image container style */
        #images {
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        #images img {
            max-width: 100px;
            height: auto;
            border: 2px solid #0ff; /* Border around each cube image */
            border-radius: 10px;
            transition: transform 0.3s ease;
        }

        #images img:hover {
            transform: scale(1.1);  /* Slight zoom effect on hover */
        }

        /* Styling for the description text */
        #description {
            font-size: 1.2rem;
            color: #bbb;
            margin-top: 20px;
            line-height: 1.8;
            font-family: 'Silkscreen', Regular 400; 
        }

        h4 {
            font-size: 3rem;
            color: #fa00ff;
            text-align: center;
            letter-spacing: 5px;
            text-shadow: #a7ffe2 2px 2px 4px; /* Fix text-shadow for better clarity */
            margin-bottom: 50px;
        }

        h5 {
            font-size: 1rem;
            color: ##fa00ff;
            text-transform: lowercase;
            text-align: left;
            letter-spacing: 2px;
            text-shadow: 0px 0px 10px rgba(255, 0, 217, 0.6);
            margin-bottom: 200px;
        }

         h6 {
            font-size: 1.5rem;
            color: #fff;
            text-align: right;
            letter-spacing: 3px;
            text-shadow: 0px 10px 10px rgba(255, 0, 217, 0.6);
            margin-bottom: 20px;
        }

    </style>
    <!-- Link to Google Fonts for futuristic fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=Roboto:wght@300&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">

</head>
<body>

<h2>01 - Cadavre Exquis (Exquisite Corpse)</h2>

<!-- Display your GIF here (full-width) without being a link -->
<img src="./2.gif" alt="Your Animated GIF" style="width: 100%; height: auto; object-fit: cover;" />

<!-- Main Section for Projects -->
<section id="projects">
    <div id="project-row">
        <!-- Project Title -->
        <h3 style="text-align: center;">Imaginative Hedonism: A World Within</h3>
        
        <div class="three-model">
            <!-- This image opens in a new tab -->
            <a href="./imaginative hedonism.jpg" target="_blank">
                <img src="./imaginative hedonism.jpg" id="model1" alt="Imaginative Hedonism Image" style="margin-top: 50px; display: block; margin-left: auto; margin-right: auto;" />
            </a>
        </div>

        <!-- Description Section and Cube Images -->
        <div id="images-description">
            <div id="images">
                <!-- Each image wrapped in an anchor tag to open in a new tab -->
                <a href="canva export/1.jpg" target="_blank">
                    <img src="canva export/1.jpg" alt="1" />
                </a>
                <a href="canva export/3.jpg" target="_blank">
                    <img src="canva export/3.jpg" alt="2" />
                </a>
                <a href="canva export/4.jpg" target="_blank">
                    <img src="canva export/4.jpg" alt="3" />
                </a>
                <a href="canva export/5.jpg" target="_blank">
                    <img src="canva export/5.jpg" alt="4" />
                </a>
                <a href="canva export/6.jpg" target="_blank">
                    <img src="canva export/6.jpg" alt="5" />
                </a>
                <a href="canva export/7.jpg" target="_blank">
                    <img src="canva export/7.jpg" alt="6" />
                </a>
                <a href="canva export/8.jpg" target="_blank">
                    <img src="canva export/8.jpg" alt="7" />
                </a>
    </div>

          <h4 id="description1">
              I think...</h4>
              </div> 
              <h6 id="description1">the imagination is a</h4>
              </div>
              <h6 id="description1">silver lining in reality :D</h4>
    </div>
</section>

<a href="./9.jpg">
<img src="./9.jpg" style="display: block; margin-left: auto; margin-right: auto; margin-top:50px; margin-bottom:0px">
</a>

<!-- Link for sources -->
<h5 style="text-align: center;"></h5>
<a href="https://pin.it/5iHPEf3QX" target="_blank" style="display: block; text-align: center; margin-bottom: 100px;">Click here to visit my sources</a>

</body>
</html>

    ${/* section commented out 
      <section id="projects">
      <div id="project-row">
      Cadavre Exquis - Exquisite Corpse
        <div class="three-model">
          <img src="./imaginative hedonism.jpg" id=model1 alt="Model 1 Image"/>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A cubic 3D model is a geometric representation of a cube, consisting of six equal square faces joined at right angles. Each edge of the cube is of equal length, forming a symmetrical, rigid structure. The model can be textured, colored, or transparent, and it may include variations such as beveled edges or hollow interiors, depending on its intended purpose in design, animation, or engineering.</h4>
        </div>
      </div>
      */''}

      ${/* Model 2 commented out
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
*/""}

${/* Model 3 commented out
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => `<img src="${house}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}
    </section>

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

// Create three.js scenes for each
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
//createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
