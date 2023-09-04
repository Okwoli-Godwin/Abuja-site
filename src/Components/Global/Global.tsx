import React, {createContext, useState} from "react"

interface User {
    email: "",
    name: ""
}

interface contextData {
    showDetail: boolean,
    toggleshow: () => void,
    currentUser: User,
    setCurrentUser: React.Dispatch<React.SetStateAction<User>>
}

export const GlobalContext = createContext<contextData> ({
    showDetail: false,
    toggleshow: () => {},
    currentUser: {
        email: "",
        name: ""
    },
    setCurrentUser: (currentUser: {}) => {}
})

export const MainContext: React.FC<React.PropsWithChildren> = ({
    children
}) => {
    const [showDetail, setShowDetail] = useState(false)
    const [currentUser, setCurrentUser] = useState<User>({} as User)
    const toggleshow = () => {
        setShowDetail(!showDetail)
    }

    React.useEffect(() => {
        if(window.localStorage.getItem("UserData")) {
            let MyData = JSON.parse(window.localStorage.getItem("UserData") || "")
        }
    })

    return (
        <GlobalContext.Provider
            value={{
                showDetail,
                toggleshow,
                currentUser,
                setCurrentUser
            }}
        >

        </GlobalContext.Provider>
    )
}