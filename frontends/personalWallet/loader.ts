export const loader = function () {
// 1. Показывать определенное количество элементов на каждой странице.  paginationLimit
// 2. Отображать номера страниц в зависимости от того, сколько раз был разбит общий список элементов. pageCount
// 3. При клике на номер страницы изменять отображение на эту страницу.
// 4. Разрешить переход к предыдущим и следующим страницам.
    this.Static.data =[
        {
            img: 'transaction_newmember_bonus',
            type: 'Awards1',
            date: '2023-07-20',
            transaction: 'Bonus',
            sum: '0,5',
            status: 'done'
        },
        {
            type: 'Awards2',
            date: '2023-07-20',
            transaction: 'Bonus',
            sum: '0,5',
            status: 'done'
        },
        {
            type: 'Awards3',
            date: '2023-07-20',
            transaction: 'Bonus',
            sum: '0,5',
            status: 'done'
        },
        {
            type: 'Awards4',
            date: '2023-07-20',
            transaction: 'Bonus',
            sum: '0,5',
            status: 'done'
        },
        {
            type: 'Awards5',
            date: '2023-07-20',
            transaction: 'Bonus',
            sum: '0,5',
            status: 'done'
        },
        {
            type: 'Awards6',
            date: '2023-07-20',
            transaction: 'Bonus',
            sum: '0,5',
            status: 'done'
        },
        {
            type: 'Awards6',
            date: '2023-07-20',
            transaction: 'Bonus',
            sum: '0,5',
            status: 'done'
        },
        {
            type: 'Awards6',
            date: '2023-07-20',
            transaction: 'Bonus',
            sum: '0,5',
            status: 'done'
        },
        {
            type: 'Awards6',
            date: '2023-07-20',
            transaction: 'Bonus',
            sum: '0,5',
            status: 'done'
        },
        {
            type: 'Awards6',
            date: '2023-07-20',
            transaction: 'Bonus',
            sum: '0,5',
            status: 'done'
        },
        {
            type: 'Awards6',
            date: '2023-07-20',
            transaction: 'Bonus',
            sum: '0,5',
            status: 'done'
        },
        {
            type: 'Awards6',
            date: '2023-07-20',
            transaction: 'Bonus',
            sum: '0,5',
            status: 'done'
        },
        {
            type: 'Awards6',
            date: '2023-07-20',
            transaction: 'Bonus',
            sum: '0,5',
            status: 'done'
        },
        {
            type: 'Awards6',
            date: '2023-07-20',
            transaction: 'Bonus',
            sum: '0,5',
            status: 'done'
        },
        {
            type: 'Awards9',
            date: '2023-07-20',
            transaction: 'Bonus',
            sum: '0,5',
            status: 'done'
        },
    ]
    
    this.Static.paginationLimit = 10;
    this.Static.pageCount = Math.ceil(this.Static.data.length / this.Static.paginationLimit);
    // this.Static.currentPage = 1;
    this.Static.limitArray = []

    
    

}