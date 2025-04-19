import type { Meta, StoryFn } from '@storybook/react';
import Accordion from '../components/Accordian';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `

---

### Description:
The ***Accordion*** component displays collapsible content areas for presenting information in a compact, expandable format. It supports smooth animations and is responsive by default.

---

### Use Cases:
- FAQs (Frequently Asked Questions)
- Displaying detailed information under headings
- Progressive disclosure of UI content

---

### Anatomy / Structure:
- A clickable \`div\` for the header (title)
- A content container that slides down/up using Tailwind transitions
- Wrapped inside a parent container for layout control

---

### States & Variants:
- \`isOpen\`: Controls if the accordion is expanded or collapsed (can be internal or external)
- (If added) \`variant\`: Could style the accordion differently (e.g. success, error)

---

### Interaction Behavior:
- Clicking the header toggles the content
- Uses Tailwind’s \`transition\`, \`max-height\`, \`translate-y\`, and \`opacity\` for smooth animation

---

### Accessibility Notes:
- Add \`aria-expanded\` to header for screen readers (can be added later)
- Add keyboard interaction (Enter/Space) for accessibility (optional enhancement)

---

### Theming / Responsiveness:
- Uses Tailwind CSS for responsive behavior
- Easily themeable by extending Tailwind color classes or adding variants

---

### Do’s and Dont's:
- ✅ Use for toggleable content like questions, sections, info  
- ✅ Keep content short and scannable  
- ❌ Don’t overload with heavy, nested components  
- ❌ Avoid placing forms inside unless necessary,
`
            },
        },
    },
    args: {
        title: 'Click to Expand',
        content: 'This is the content inside the accordion. It slides down smoothly when opened.',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'success', 'error', 'warning'],
            description: 'Defines the style of the badge',
        },
        title: { control: 'text' },
        content: { control: 'text' },
    },
};

export default meta;

const Template: StoryFn<typeof Accordion> = (args) => <Accordion {...args} />;


export const Default = Template.bind({});
Default.args = {
    title: 'Hello Accordion',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    variant: 'default'
};


export const Primary = Template.bind({});
Primary.args = {
    title: 'Hello Accordion',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    variant: 'primary'
};


export const Success = Template.bind({});
Success.args = {
    title: 'Hello Accordion',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    variant: 'success'
};


export const Error = Template.bind({});
Error.args = {
    title: 'Hello Accordion',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    variant: 'error'
};


export const Warning = Template.bind({});
Warning.args = {
    title: 'Hello Accordion',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    variant: 'warning'
};