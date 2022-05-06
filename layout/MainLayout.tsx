import Navbar from "../components/Navbar"
import { FC } from "react"

interface Props {
    children: JSX.Element | JSX.Element[]
}

const MainLayout: FC<Props> = ({children}) => {
  return (
   <>
   <Navbar />
   <main>
       {children}
   </main>
   </>
  )
}

export default MainLayout