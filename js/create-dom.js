const createDomElemFromString = (str = ``) => {
    const elem = document.createElement(`div`);
    str = typeof str === `string` ? str : ``;
    elem.innerHTML = str;
    return elem;
};

export default createDomElemFromString;
