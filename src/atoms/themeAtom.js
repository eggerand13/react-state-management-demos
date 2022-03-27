import { atom } from 'jotai'

const tAtom = atom("light")

const themeAtom = atom(
    (get) => get(tAtom),
    (get, set, _arg) =>  set(tAtom, get(tAtom) === "light" ? "dark" : "light"),
  )
  

export default themeAtom