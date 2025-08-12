"use client"

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function ReservationForm() {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique de réservation à implémenter
    console.log('Réservation soumise:', { startDate, endDate, email })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-[#f9f7f2] p-6 border border-[#020b46] rounded-none text-[#020b46]">
      <h2 className="text-2xl font-semibold mb-4">Réservez votre séjour</h2>
      
      <label className="block mb-2">Date d'arrivée</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Sélectionnez une date"
        className="w-full p-2 border border-[#020b46] rounded-none mb-4"
      />
      
      <label className="block mb-2">Date de départ</label>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="Sélectionnez une date"
        className="w-full p-2 border border-[#020b46] rounded-none mb-4"
      />
      
      <label className="block mb-2">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border border-[#020b46] rounded-none mb-6"
        placeholder="votre email"
      />
      
      <button
        type="submit"
        className="w-full py-2 border border-[#020b46] text-[#020b46] bg-transparent hover:bg-white transition-colors duration-200 rounded-none"
      >
        Réserver
      </button>
    </form>
  )
}
