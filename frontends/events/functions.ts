

const fn = {
    
    "getUniqueArray": function (Array, field) {
        const uniqueArray = new Set();
        Array.forEach(item => {
            uniqueArray.add(item[field])
        });
        
        return Array.from(uniqueArray);
        }
}

export { fn }