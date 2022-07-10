export const validate = (formData, setmessage) => {
    if (formData.user === undefined) {
        setmessage(
            'User is required'
        );
        return false;
    } else if (formData.user.length < 3) {
        setmessage(
            'User is too short'
        );

        return false;
    } else if (formData.password !== formData.confirmPassword) {
        setmessage("Your password and confirmation password do not match")

    } else if (!/(?=.*[0-9])/.test(formData.password)) {
        setmessage("Your password should contain at least one number")
        return false;
    }
    else if (formData.password.length < 6) {
        setmessage("Your password should be at least 6 characters long")
        return false;
    }
    return true;
};