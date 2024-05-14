type Props = {
    placeholder: string
}

export const Input = ({placeholder}: Props) => {

    return (
        <input
            type="number"
            placeholder={placeholder}
            className="w-44 outline-none px-1 bg-gray-100 border border-gray-300"
        />
    )
}