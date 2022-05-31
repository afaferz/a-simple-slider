
export function generateRandomColor() {
    const random = Math.floor(Math.random() * 16777215).toString(16);
    const color = "#" + ("000000" + random).slice(-6);
    return color
}
