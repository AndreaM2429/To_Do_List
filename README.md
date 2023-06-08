# To Do List

<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)


# 📖 "To Do List" <a name="about-project"></a>

**To Do List** 

"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>HTML</summary>
  <ul>
    <li>This project use <a href="https://github.com/microverseinc/curriculum-html-css/blob/main/html5.md">HTML.</a></li>
  </ul>
</details>

<details>
  <summary>CSS</summary>
  <ul>
    <li>The <a href="https://github.com/microverseinc/curriculum-html-css/blob/main/html5.md">CSS</a> is used to provide the design in the whole page.</li>
  </ul>
</details>

<details>
  <summary>Linters</summary>
  <ul>
    <li>The <a href="https://github.com/microverseinc/linters-config">Linters</a> are tools that help us to check and solve the errors in the code</li>
    This project count with three linters: 
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </ul>
</details>

<details>
  <summary>Webpack</summary>
  <ul>
      <li>HTML Webpack Plugin</li>
      <li>Webpack Style/CSS Loader</li>
      <li>Local dev Server</li>
    </ul>
</details>


### Key Features <a name="key-features"></a>

> In this section there are some features that you can notice in the project

- **Single page**
- **Simple interface**
- **Add and remove task function**
- **Mark task as completed and deleted all completed**
- **Data saved in LocalStorage**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Live Demo <a name="live-demo"></a>

[Here](https://andream2429.github.io/To_Do_List/) you can see and test the app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
- **To have a Git in your device** : this is in order to clone and modify this project.
- **To have a code editor** :  such as VS code, Atom or another that you would like to use.
- **To have a web local server such as XAMPP** : this is in with the purpose of you will be able to watch the changes you make in the project.
- **Have basic knowledge about HTML, CSS and JS** in order to understand the code and be able to modify the elements you want.
- **Count with Node.js in your device** due to it is a tool needed to run the linters


### Setup

Clone this repository to your desired folder:

- Clone this repo on your local device you need to open Git Bash and paste the link with the command
```sh
  cd my-folder-name
  $ git clone https://github.com/AndreaM2429/Capstone_project_Conference_page
```


### Install

In order can run the linters tools you need use the following commands in your local work environment:

```sh
  npm install --save-dev hint@7.x
  npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
  npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```
**Note:** About the webpack server you need to run the following command inside the directory `webpack-demo`. You can check the documentation [here](https://webpack.js.org/guides/development/#using-webpack-dev-server)
```
npm start
```

### Usage

Now you are able to modify the files in the `webpack-demo/src`, but be careful just modify the **HTML, CSS and JS** the rest of them are for the funcionality of webpack so **NOT MODIFY THEM**.


### Run tests

To see the linter errors run the following codes for:

- HTML

```sh
 npx hint .
```

- CSS

```sh
 npx stylelint "**/*.{css,scss}"
  
 To fix the errors add --fix
```

- JS

```sh
 npx eslint .
  
 To fix the errors add --fix filename.js
```


### Deployment

To deploy this project by someone who isn't the owner is prohibit.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Author <a name="authors"></a>

👤 **Andrea Manuel**

- GitHub: [@AndreaM2429](https://github.com/AndreaM2429)
- Twitter: [@twitter](https://twitter.com/AndreaManuelOr1)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/andrea-manuel-2b075026a/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🔭 Future Features <a name="future-features"></a>

- [ ] **Add events to move the list elements**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/) and add your thoughts

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>

If you like this project you could clone the repo and work with it or do the changes in a new branch. Also you could let a message with your thoughts

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for provided the necessary resources for this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
