import useStore from "../../hook/store"
import s from "./notification.module.css"

export function Notification(){

    const store = useStore()

    return (
        <div 
        className={store?.error ? s.notificationContainerError : s.notificationContainer} 
        style={store?.notificationMessage ? {top : 20} : {top : -100} }
        >
            {store?.notificationMessage}
        </div>
    )
}