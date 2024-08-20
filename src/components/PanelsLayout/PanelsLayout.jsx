import Sortbar from "../Sortbar/Sortbar"



const PanelsLayout = ({children}) => {
  return (
    <>
        <Sortbar />
        {children}
    </>
  )
}

export default PanelsLayout