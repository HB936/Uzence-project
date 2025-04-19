import { useState } from "react";

type AccordianProps={
    title: string;
    content: string;
    variant?: 'primary' | 'success' | 'error' | 'warning' | 'default';
}


const Accordion = ({title, content, variant = 'default'}: AccordianProps) => {

    const variantClasses: Record<string, string> = {
        primary: 'bg-primary text-white',
        success: 'bg-success text-white',
        error: 'bg-error text-white',
        warning: 'bg-warning text-black',
        default: 'bg-default text-black',
    };
    

    const classes = variantClasses[variant];


    const [isOpen, setIsOpen] = useState(false)
    

    const toggleHandler = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="w-full bg-gray-200 h-lvw">
                <div className={`w-full ${classes}`}>
                    <div onClick={toggleHandler} className="w-full border-b-2 p-5 cursor-pointer">{title}</div>
                    <div className={`w-full overflow-hidden transition-all ease-in-out px-5 ${isOpen ? 'opacity-100 translate-y-0 max-h-96 p-9' : 'opacity-0 -translate-y-4 max-h-0'}`}><p>{content}</p></div>
                </div>
            </div>
        </>
    )
}

export default Accordion