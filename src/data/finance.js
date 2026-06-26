export const finance2025 = {
  period: '01.01.2025 — 31.12.2025', income: 1799592.17, expense: 1432808.11, balance: 366784.06,
  previousBalance: 325999.69, bankBalance: 208559.90, cashBalance: 158224.16,
  debtBoxes: 57, debtPerBox: 8500, debtTotal: 484500,
  reportFile: './docs/Финансы_ГСК_Березка-2_2025_расшифровка.xlsx',
  expenses: [
    { name: 'Заработная плата', value: 596118.00 },
    { name: 'Взносы на обязательное страхование от несчастных случаев', value: 1512.60 },
    { name: 'Единый налоговый платеж', value: 183677.00 },
    { name: 'Оплата электроэнергии', value: 470000.00 },
    { name: 'Комиссия банка', value: 17050.00 },
    { name: 'Оформление экологического паспорта', value: 2000.00 },
    { name: 'Земельный налог', value: 105940.00 },
    { name: 'Под отчет Балакину П.Д.', value: 3605.00 },
    { name: 'Вывоз ТБО', value: 45605.51 },
    { name: 'Продление лицензии 1С', value: 6800.00 },
    { name: 'Представительские расходы', value: 500.00 }
  ]
};
export const expenseGroups = [
  { name: 'Заработная плата', value: 596118.00, color: '#52c45b' },
  { name: 'Электроэнергия', value: 470000.00, color: '#3478d8' },
  { name: 'Налоги', value: 289617.00, color: '#ffbd2e' },
  { name: 'Прочие расходы', value: 45605.51, color: '#ff4d4f' },
  { name: 'Мелкие расходы', value: 31467.60, color: '#55c7d8' }
];
