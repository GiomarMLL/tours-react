import React from 'react'

import Error from './Error'
import Loading from './Loading'
import Tours from './Tours'

const URL = 'https://course-api.com/react-tours-project'

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [isError, setIsError] = React.useState(false)
  const [tours, setTours] = React.useState([])

  console.log(tours)

  const removeTour = id => setTours(tours.filter(tour => tour.id !== id))

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(URL)

      if (response.status === 200) {
        const data = await response.json()
        setTours(data)
      } else {
        setIsError(true)
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  React.useEffect(() => {
    fetchTours()
  }, [])

  return (
    <main>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loading />
      ) : (
        <Tours tours={tours} fetchTours={fetchTours} removeTour={removeTour} />
      )}
    </main>
  )
}

export default App
