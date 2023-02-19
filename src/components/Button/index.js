import "./Button.css";

const Button = (props) => {
    return(
        <>
            <button type="submit" className="btn btn-success">{props.text}</button>
        </>
    )

}

export default Button;