const listener = {
    "start": function (data, name) {
        
    },
    "finish": function (data, name, t) {
        this.fn('getPaginationNumbers');
        document.querySelectorAll(".pagination-number").forEach((button) => {
            const pageIndex = Number(button.getAttribute("page-index"));
            if (pageIndex) {
            button.addEventListener("click", () => {
                this.fn('setCurrentPage',pageIndex);
            });
            }
  });
    },
    "keyupAny": function (e) {
        // console.log('=e4aacc=', "keyup")
    },
}

export { listener }