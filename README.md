# Daily Streak

A simple and intuitive habit tracking application built using **TypeScript**, **Zustand**, and **Material UI**. This application helps you monitor your habits, maintain streaks, and stay consistent with your goals.

## Features

- **Add and Remove Habits**: Seamlessly add or delete habits.
- **Track Completion**: Mark habits as done for the current day.
- **Streak Monitoring**: Automatically calculates and displays your current streak.
- **Progress Visualization**: View your progress through a visual bar chart.
- **Persistent Data**: Data is stored locally using `localStorage`.
- **Responsive Design**: Built with Material UI for a modern and responsive interface.

## Tech Stack

- **TypeScript**: For type safety and scalability.
- **Zustand**: A lightweight state management library for managing application state.
- **Material UI**: A popular React UI framework for responsive and accessible design.

## How it Works

-Add your habits by specifying their names and frequency.
-Mark habits as completed for the current day.

![image](https://github.com/user-attachments/assets/65223069-5f57-4ddd-b392-1b75e32b5ac2)

-View your progress, streak, and completion status in the dashboard.
-Remove habits as needed.

## Folder Structure

src/
├── components/
│   └── HabitList.tsx        # Main component to display and manage habits
├── store/
│   └── store.ts             # Zustand store for state management
├── styles/
│   └── theme.ts             # Material UI theme (optional)
└── App.tsx                  # Main application entry point

