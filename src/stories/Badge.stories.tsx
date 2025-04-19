import type { Meta, StoryFn } from '@storybook/react';
import Badge from '../components/Badge';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',  // Centers the component in Storybook’s preview area.
        docs: {
            description: {
                component: `

---

### Description:
The **Badge** component displays small, contextual labels with different visual styles. It helps highlight statuses, types, or important metadata using Tailwind-based styling.

---

### Use Cases:
- Indicate status: \`New\`, \`Active\`, \`Beta\`
- Show types: \`Success\`, \`Error\`, \`Warning\`
- Label UI elements contextually (e.g., in buttons, cards, or lists)

---

### Anatomy / Structure:
- Outer \`div\` with margin
- Inner \`span\`:
  - Padding
  - Rounded corners
  - Font styles
  - Color classes based on \`variant\`

---

### States & Variants:
- \`primary\` (default): Blue background, white text
- \`success\`: Green background, white text
- \`error\`: Red background, white text
- \`warning\`: Yellow background, black text

---

### Interaction Behavior:
- This is a static component (not interactive)
- Used purely for visual context

---

### Accessibility Notes:
- No ARIA roles required
- Maintain good color contrast for visibility
- Should be readable with screen readers as regular text

---

### Theming / Responsiveness:
- Styled using Tailwind utility classes
- Fully responsive by default
- Easily themeable with Tailwind config or custom classes

---

### Do’s and Don’ts:
- ✅ Use to highlight important UI elements or statuses
- ✅ Keep text short and clear
- ✅ Be consistent in using variants across app
- ❌ Don’t overload badges with long messages
- ❌ Don’t use it as a button or interactive element

      
                    `,
            },
        },
    },
    args: {
        label: 'Sample Badge',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'success', 'error', 'warning', 'default'],
            description: 'Defines the style of the badge',
        },
    },
};

export default meta;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary', //text displayed in the badge
    label: 'Primary Badge', //the color variant of the badge
};

export const Success = Template.bind({});
Success.args = {
    variant: 'success',
    label: 'Success Badge',
};

export const Error = Template.bind({});
Error.args = {
    variant: 'error',
    label: 'Error Badge',
};

export const Warning = Template.bind({});
Warning.args = {
    variant: 'warning',
    label: 'Warning Badge',
};
export const Default = Template.bind({});
Default.args = {
    variant: 'default',
    label: 'Default Badge',
};
