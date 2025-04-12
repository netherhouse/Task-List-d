# Task Manager with Priority

A modern, animated task management application built with React and Vite.  
Современное приложение для управления задачами, построенное с использованием React и Vite.

---

## Table of Contents

- [Task Manager with Priority](#task-manager-with-priority)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
  - [Customization](#customization)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

---

## Overview

This project is a task management application that allows users to:

- Add tasks with a title, priority level, and deadline.
- View active and completed tasks separately.
- Sort tasks by date or priority.
- Toggle between dark and light themes.
- Enjoy smooth animations with Framer Motion.

Проект представляет собой приложение для управления задачами, которое позволяет:

- Добавлять задачи с заголовком, уровнем приоритета и дедлайном.
- Просматривать активные и выполненные задачи отдельно.
- Сортировать задачи по дате или приоритету.
- Переключаться между темной и светлой темами.
- Наслаждаться плавными анимациями с использованием Framer Motion.

---

## Features

- **Task Management**: Add, complete, and delete tasks.
- **Priority Handling**: Set and view tasks by High, Medium, or Low priority.
- **Sorting**: Dynamic sorting options by date and priority.
- **Theme Toggle**: Switch between dark and light themes with live updates.
- **Animated UI**: Engaging animations to enhance user experience.
- **Responsive Design**: Fully responsive layout optimized for various devices.

---

## Tech Stack

- **Framework & Library**: React, Vite
- **Animation**: Framer Motion
- **Icons**: FontAwesome
- **Styling**: CSS with custom variables for theming
- **Language**: JavaScript (ES6+)

---

## Project Structure

```
Task List d/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx         // Form component to add new tasks / Компонент формы для добавления задач
│   │   ├── TaskItem.jsx         // Single task item with action buttons / Отдельный элемент задачи с кнопками действий
│   │   ├── TaskList.jsx         // List of active tasks / Список активных задач
│   │   ├── CompletedTaskList.jsx// List of completed tasks / Список выполненных задач
│   │   ├── SortControls.jsx     // Sorting controls for tasks / Элементы управления сортировкой задач
│   │   ├── ThemeToggle.jsx      // Toggle for dark/light mode / Переключатель темы (темная/светлая)
│   │   └── Footer.jsx           // Application footer with additional info / Футер с информацией о приложении
│   ├── App.jsx                  // Main application component / Главный компонент приложения
│   ├── index.css                // Global styling and CSS variables / Основные стили и переменные темы
│   └── main.jsx                 // Entry point for React application / Точка входа для React приложения
├── .gitignore
├── package.json
├── README.md                    // (This file) / (Этот файл)
└── vite.config.js
```

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 14 or higher
- A package manager such as **npm** or **yarn**

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/netherhouse/Task-List-d
   cd task-manager-with-priority
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

   or using yarn:

   ```bash
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   or using yarn:

   ```bash
   yarn dev
   ```

4. **Open your browser:**
   Visit `http://localhost:3000` (or the port mentioned in the terminal) to view the app.

---

## Usage

1. **Adding a Task:**  
   Use the provided form to add a new task by entering a title, selecting a priority level, and choosing a deadline.

2. **Sorting Tasks:**  
   Click on the sorting buttons to order tasks by date or by priority. The active sort field is visually highlighted.

3. **Completing and Deleting Tasks:**

   - Mark tasks as completed with the "Complete" button.
   - Remove tasks using the "Delete" button.

4. **Theme Toggle:**  
   Use the theme toggle button at the top to switch between dark and light modes instantly.

---

## Customization

- **Styling:**  
  Modify `src/index.css` to adjust colors, fonts, and animations. CSS variables make theme adjustments simple.

- **Components:**  
  Each component under `src/components/` is modular and can be extended or styled further as per project requirements.

- **Animations:**  
  Framer Motion is used for animations. Customize animation properties in each component to suit your design preferences.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a Pull Request.

Please follow the established code style and add comments/documentation for any new features.

---

## License

This project is open-source under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/).
- UI animations powered by [Framer Motion](https://www.framer.com/motion/).
- Icons provided by [FontAwesome](https://fontawesome.com/).
- Inspiration from various task management apps and online tutorials.

---

Happy task managing!  
Успешного управления задачами!
