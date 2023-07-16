const TextField = ({label,inputProps,onChange,value}) => {
    return (
        <div className="flex flex-col">
           <label className="lable-style" >{label}</label>
           <input className="input-style" {...inputProps} onChange={onChange} value={value} />
        </div>
    )
}

export default TextField;

















