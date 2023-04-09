import { useRouter } from 'next/router'

const CustomerDetails = () => {
  const router = useRouter()
  const { customerId, customerName, customerEmail, customerTotalSpent } = router.query

  return (
    <>
      <p>Customer Details: {customerId}</p>
      <p>Customer Name: {customerName}</p>
      <p>Customer Email: {customerEmail}</p>
      <p>Customer Total Spent: {customerTotalSpent}</p>
    </>

  )
}

export default CustomerDetails