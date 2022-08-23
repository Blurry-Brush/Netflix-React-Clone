import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  if(!user){
    return navigate("/")
  }
  else{
    return children;
  }
}

export default ProtectedRoute