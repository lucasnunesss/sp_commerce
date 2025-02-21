"use client"

import { Provider } from "react-redux"
import store from "../store"

type Children = {
  children: React.ReactNode
}

const ProviderPage = ({children}: Children) => {
 

  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ProviderPage