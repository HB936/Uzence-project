type BadgeProps = {
    label: string;
    variant?: 'primary' | 'success' | 'error' | 'warning' | 'default';
};

const Badge = ({ label, variant='primary'}: BadgeProps) => {
    const variantClasses: Record<string, string> = {
        primary: 'bg-primary text-white',
        success: 'bg-success text-white',
        error: 'bg-error text-white',
        warning: 'bg-warning text-black',
        default: 'bg-default text-black',
    };
    

    const classes = variantClasses[variant];

    return (
        <div className="m-5 flex justify-center">
            <span className={`${classes} px-3 py-2 md:px-7 md:py-3 ${variant=='default' ? 'border-2' : ''} rounded-full text-xs font-semibold`}>
                {label}
            </span>
        </div>
    );
};

export default Badge;
