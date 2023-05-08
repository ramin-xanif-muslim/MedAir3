import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function useNavigateOnRefresh() {

    const navigate = useNavigate()

    useEffect(() => {
        // navigate('/calendar')
    }, [])

    return ''
}
