import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
    const fullBudget = getBudgetObject(income, gdp, capita);
    return {
        ...fullBudget,
        income: income,
        gdp: gdp,
        capita: capita
    };
}