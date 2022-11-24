import { createContext, useState } from "react"

export const SidebarContext = createContext({})

export const SidebarProvider = (props)=>{
    const [sidebar, setSidebar] = useState(false)

    return(
        <SidebarContext.Provider value={{sidebar, setSidebar}}>
            {props.children}
        </SidebarContext.Provider>
    )
}