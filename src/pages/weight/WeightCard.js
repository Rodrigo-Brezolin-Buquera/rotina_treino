import React from 'react'
import { Text } from '../../theme/components'

export const WeightCard = ({weight, waist }) => {
  return (
    <section>
        <div><Text>Peso:</Text> <Text>{weight}</Text> </div>
        <div><Text>Cintura:</Text> <Text>{waist}</Text> </div>
    </section>
  )
}

