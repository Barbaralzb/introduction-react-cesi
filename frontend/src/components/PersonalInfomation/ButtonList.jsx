import Button from "../Basics/Button";

function ButtonList(props) {
    return (
        <Button title={props.title} onClick={props.onClick} />
    );
}

export default ButtonList;
