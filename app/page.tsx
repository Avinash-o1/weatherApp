'use client'
import CityPicker from '@/Componets/CityPicker'
import {Card, Divider,Subtitle, Text} from '@tremor/react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#475565] to-[#041532] p-10 flex flex-col justify-center items-center">
      <Card className='max-w-4xl mx-auto'>
        <Text className='text-6xl font-bold text-center mb-10'>Weather AI</Text>
        <Subtitle className='text-xl text-center'>Check the weather of cities you are interested in</Subtitle>
        <Divider className='my-10' />
        <Card className='bg-gradient-to-br from-[#445568] to-[#0c254f]'>
          {<CityPicker/>}
        </Card>
      </Card>
    </main>
  )
}
