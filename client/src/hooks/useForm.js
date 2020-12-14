import React, { useState } from "react";


const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
};

export const useForm = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    // usually a clear form would go here but it seems we don't need this functionality

    return [showSuccessMessage, values, handleChanges, handleSubmit]
}
export default useForm;