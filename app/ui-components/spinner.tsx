import {Spinner} from "@nextui-org/react";



function SpinnerX() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner label="Cargando..." color="primary" labelColor="primary" />
    </div>
  )
}

export default SpinnerX