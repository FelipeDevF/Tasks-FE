import { useEffect, useState } from 'react'
import { isExpired } from 'react-jwt'

export const useToken = () => {
  const [token, setToken] = useState(false)

  const tokenLs = localStorage.getItem('TOKEN_TASKS') || ''
  const _isExpired = isExpired(tokenLs)

  useEffect(() => {
    if (tokenLs) {
      if (_isExpired) {
        setToken(false)

        return
      }
      setToken(true)

      return
    }

    setToken(false)
  }, [_isExpired, tokenLs])

  return token
}












