import WaiterOrderView from '@/components/WaiterOrderView'
import SEO from '@/components/SEO'

export default function WaiterPage() {
  return (
    <>
      <SEO 
        title="Garson Paneli - Kaburgacı Aybaz"
        description="Sipariş yönetim paneli"
      />
      <WaiterOrderView />
    </>
  )
}