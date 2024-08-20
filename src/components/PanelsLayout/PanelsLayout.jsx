import Sortbar from "../Sortbar/Sortbar"



const PanelsLayout = ({children, totalProducts}) => {
  
  return (
    <>
        <Sortbar totalProducts={totalProducts} />
        {children}
    </>
  )
}

export default PanelsLayout