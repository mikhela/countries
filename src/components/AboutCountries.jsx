import { useParams } from "react-router-dom"

export default function AboutCountries() {
    const {id} = useParams();
    return (
    <div>{id}</div>
  )
}
