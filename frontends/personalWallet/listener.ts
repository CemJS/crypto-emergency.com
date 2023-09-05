const listener = {
    "start": function (data, name) {
        
    },
    "finish": function (data, name, t) {
        this.fn('getPaginationNumbers');
//         document.querySele   ctorAll(".pagination-number").forEach((button) => {
//             const pageIndex = Number(button.getAttribute("page-index"));
//             if (pageIndex) {``
//             button.addEventListener("click", () => {
//                 console.log('=50c695=',"Нажатие кнопки")
//                 this.fn('setCurrentPage',pageIndex);
//   this.init()

            // });
            // }
//   });
    },
}

export { listener }