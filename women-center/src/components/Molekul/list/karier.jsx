import CheckBox from "../../Atom/checkbox/checkBox"
import Searching from "../../Atom/inputan/inputanSearch"
import ModalHapus from "../Modal/modalHapus"
import React, { useState } from "react"

const Karier = ({checkboxKarier, onCheckBoxChange}) => {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchValue(value);
    };

    const filteredCheckboxKarier = checkboxKarier.filter((item) =>
        item.label.toLowerCase().includes(searchValue.toLowerCase())
    );

    return(
        <>
        <div className="col-4 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">Karier</p>
                  <ModalHapus />
            </div>
            <div className="mt-2">
                <Searching 
                    value={searchValue}
                    onChange={handleSearchChange}
                     />
            </div>
            <div className="mt-2">
                {filteredCheckboxKarier.map((item) => (
                <CheckBox
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    value={item.value}
                    checked={item.checked}
                    onChange={() =>  onCheckBoxChange(item.id)}
                />
                ))}
            </div>
        </div>
    </>
    )
}
export default Karier