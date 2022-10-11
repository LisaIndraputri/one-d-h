import formatMoney from '../../utils/formatMoney'

describe('Common Utils: formatMoney', () => {
  test('Methods: formatMoney null value', async () => {
    const moneyAmount = undefined
    expect(formatMoney(moneyAmount)).toBe('')
  })

  test('Methods: formatMoney empty object', async () => {
    const moneyAmount = {}
    expect(formatMoney(moneyAmount)).toBe('')
  })

  test('Methods: formatMoney not null', async () => {
    const moneyAmount = {
      amount: '1000',
      currency: 'IDR',
    }
    expect(formatMoney(moneyAmount)).toBe('IDR1000')
  })

  test('Methods: formatMoney currency null', async () => {
    const moneyAmount = {
      amount: '1000',
      currency: '',
    }
    expect(formatMoney(moneyAmount)).toBe('Rp1000')
  })
})
