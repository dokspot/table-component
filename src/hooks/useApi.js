import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useApi(url) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async() => {
      const result = await axios.get(url)
      setData(result.data)
      setLoading(false)
    }
    loadData()
  }, [url])
  return [data, isLoading]
}
