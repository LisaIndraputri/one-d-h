 export default function formatMoney (money) {
  if (!money || !money.amount) {
    return ''
  }
  return (money.currency || 'Rp') + money.amount
}
