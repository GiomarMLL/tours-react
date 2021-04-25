import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, fetchTours, removeTour }) => {
  return (
    <section>
      {tours.length === 0 ? (
        <div className='title'>
          <h2>No tours left</h2>
          <button className='btn' onClick={fetchTours}>
            Refresh
          </button>
        </div>
      ) : (
        <>
          <div className='title'>
            <h2>Our tours</h2>
            <div className='underline'></div>
          </div>
          <div>
            {tours.map(tour => (
              <Tour key={tour.id} {...tour} removeTour={removeTour} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default Tours
