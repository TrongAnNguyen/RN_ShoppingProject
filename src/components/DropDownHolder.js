const DropDownHolder = {
    dropDown: null,
    setDropDown(dropDown) {
        this.dropDown = dropDown;
    },
    alert(type, title, message) {
        this.dropDown.alertWithType(type, title, message);
    }
};

export default DropDownHolder;
