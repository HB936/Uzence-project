# React + TailwindCSS Component Showcase

This is a simple, responsive UI component showcase built using **React**, **TypeScript**, **Tailwind CSS**, and **Storybook**. The project includes reusable components like **Badge** and **Accordion**, along with comprehensive Storybook documentation and examples.

---

## Features

- Reusable and maintainable component structure  
- Tailwind CSS utility-first styling  
- TypeScript for type safety  
- Fully responsive layout  
- Storybook for isolated component development and documentation  
- Smooth animations for interactive components  

---

## Components Included

### 1. Badge
A small, contextual label to indicate statuses or categories.

**Variants supported:**
- `primary`
- `success`
- `error`
- `warning`
- `default`

**Use Cases:**
- Displaying status tags like "New", "Active", "Beta"
- Indicating success, error, or warning messages

### 2. Accordion
A collapsible section to show and hide content dynamically.

**Features:**
- Smooth transition using `max-height`, `translate-y`, and `opacity`
- Internally controlled state (`isOpen`)
- Responsive layout and animation

**Use Cases:**
- Frequently Asked Questions (FAQs)
- Toggleable content sections
- Progressive disclosure of UI

---

## Project Structure

project-root/
├── components/
│   ├── Badge.tsx
│   └── Accordion.tsx
│   └── Layout.tsx
├── stories/
│   ├── Badge.stories.tsx
│   └── Accordion.stories.tsx
├── App.tsx
├── index.css
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
