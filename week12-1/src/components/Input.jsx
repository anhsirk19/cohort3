export const Input = ({
    onClick,
    type,
    placeholder
}) => {
    //clsx, sx
    return <span onClick={onClick} className="!px-24 py-6 text-2xl text-white cursor-pointer rounded-lg bg-blue-700">
        <input type={type} placeholder={placeholder} className="outline-0"></input>
    </span>
}