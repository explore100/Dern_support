import React from 'react'
import { useState } from 'react'
import HelpSearch from '../Components/ui/HelpSearch'
import KnowledgeBase from '../Components/ui/Knowledge'
import ProblemDiagnoser from '../Components/ui/ProblemDiagnoser'
import HowToGuides from '../Components/ui/HowToGuide'
import SparePartsInfo from '../Components/ui/SparePartsInfo'
import ContactSupport from '../Components/ui/ContactSupport'
import HelpTips from '../Components/ui/HelpTips'

const Help = () => {
  const [ query, setQuery ] = useState('');

  return (
  <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">🛠 Help Center</h1>

        <HelpSearch query={query} setQuery={setQuery} />
        <KnowledgeBase />
        <ProblemDiagnoser />
        <HowToGuides />
        <SparePartsInfo />
        <ContactSupport />
        <HelpTips />
       
      </div>
    </div>
  )
}

export default Help