import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('display company name', () => {
    render(MainNav)
    const companyName = screen.getByText('Honey Jobs')
    expect(companyName).toBeInTheDocument()
  })
})
