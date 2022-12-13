import ButtonList from "./ButtonList";

function ContainerButton({ count, onClick }) {

    return (
        <ButtonList title={count} onClick={onClick} />
    );
}

export default ContainerButton;
