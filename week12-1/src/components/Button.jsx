export const Button = ({
    disabled,
    children,
    onClick
}) => {
    //clsx, sx
    return <span onClick={onClick} className={`!px-36 py-4 text-2xl text-white cursor-pointer rounded-lg ${disabled ? "bg-blue-200" : "bg-green-300"}`}>
        {children}
    </span>
}