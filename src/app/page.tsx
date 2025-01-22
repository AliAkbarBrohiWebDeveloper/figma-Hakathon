
import Hero from '@/components/widjets/hero'
import Icon from '@/components/widjets/icon'
import Miss from '@/components/widjets/miss'
import React from 'react'

import Feature from '@/components/widjets/feature'
import BacImg from '@/components/widjets/BacImg'
import FeatureImg from '@/components/widjets/FeatureImg'


const page = () => {
  return (
    <div>
<BacImg/>
<Hero />
<FeatureImg/>

<Feature/>

<Miss/>
<Icon/>
      
    </div>
  )
}

export default page