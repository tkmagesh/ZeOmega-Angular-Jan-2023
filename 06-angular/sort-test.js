var bugs = [
    { id: 4, name: "Server communication failure", isClosed: false, createdAt: new Date(2023, 1, 11) },
    { id: 3, name: "Data integrity checks failed", isClosed: true, createdAt: new Date(2023, 1, 10) },
    { id: 1, name: "User access denied", isClosed: true, createdAt: new Date(2023, 1, 9) },
    { id: 2, name: "Application not responding", isClosed: false, createdAt: new Date(2023, 1, 7) }

]

console.table(bugs)

console.table(bugs.sort((b1, b2) => {
    return b1.id < b2.id ? -1 : b1.id > b2.id ? 1 : 0
}))

console.table(bugs.sort((b1, b2) => {
    return b1.name < b2.name ? -1 : b1.name > b2.name ? 1 : 0
}))

console.table(bugs.sort((b1, b2) => {
    return b1.isClosed < b2.isClosed ? -1 : b1.isClosed > b2.isClosed ? 1 : 0
}))

console.table(bugs.sort((b1, b2) => {
    return b1.createdAt < b2.createdAt ? -1 : b1.createdAt > b2.createdAt ? 1 : 0
}))