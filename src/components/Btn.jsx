const Btn = ({onClick, children}) =>{
    const isChild = (children === 'Add' || children === 'Delete' || children === 'Reset');
    return (
        <button 
            type="button" 
            onClick={() => onClick(children)} 
            style={
                isChild ? 
                {color: 'inherit'} : 
                {backgroundColor: `${children}`}
            }>
                {children}
        </button>
    )
}

export default Btn;