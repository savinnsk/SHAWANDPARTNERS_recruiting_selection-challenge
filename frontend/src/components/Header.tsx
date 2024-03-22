import s from "./header.module.css"
import logo from "../../public/logo.png"

export function Header() {


    return (
      <header className={s.header}>
        <img src={logo} className="logo" alt="logo" width={50} height={50} /> <p>CSV MANAGER</p>
        <input type="text" placeholder="search"/>
      </header>
    )
  }
  