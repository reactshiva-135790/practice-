const Button = ({onClick,children}) =>{
    return (
        <button className="btn-stye"
        onClick={onClick}>
            {children}
        </button>
    )
}

export default Button


