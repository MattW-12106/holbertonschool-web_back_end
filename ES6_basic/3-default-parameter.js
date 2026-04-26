export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
    const totalHoods = initialNumber + (expansion1989 || 89) + (expansion2019 || 19);
    return totalHoods;
}