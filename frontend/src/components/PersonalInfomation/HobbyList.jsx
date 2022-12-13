import { useState } from "react";
import Hobby from "./LayoutUI/Hobby";
import { HobbyListData } from "../../datas/HobbyListData"
import ContainerButton from "./ContainerButton";
import Modal from "../Basics/Modal";
import Button from "../Basics/Button";


function HobbyList() {

    const [count, setCount] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const countIncrement = (x) => {
        setCount( count + x)
    }

    return (
        <>
        <div className="flex flex-col grow gap-6">
            {HobbyListData.map((hobby, index) =>  <Hobby name={hobby.name} icon={hobby.icon} key={index} />)}
        </div>
        <p>{count}</p>
        <ContainerButton count={count} onClick={() => countIncrement(1)} />
        <Button title={"Add Hobby"} onClick={() => openModal()}/>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />
        </>

    );
}

export default HobbyList;
