"use client"

export default function TextContourTest() {
  const contourStyles = [
    // 1. Contour simple bleu
    { name: "Contour simple bleu", style: { textShadow: '2px 2px 0 #020b46, -2px -2px 0 #020b46, 2px -2px 0 #020b46, -2px 2px 0 #020b46' }},
    
    // 2. Contour épais bleu
    { name: "Contour épais bleu", style: { textShadow: '3px 3px 0 #020b46, -3px -3px 0 #020b46, 3px -3px 0 #020b46, -3px 3px 0 #020b46, 4px 4px 0 #020b46, -4px -4px 0 #020b46' }},
    
    // 3. Contour fin bleu
    { name: "Contour fin bleu", style: { textShadow: '1px 1px 0 #020b46, -1px -1px 0 #020b46, 1px -1px 0 #020b46, -1px 1px 0 #020b46' }},
    
    // 4. Contour avec glow bleu
    { name: "Contour avec glow bleu", style: { textShadow: '0 0 10px #020b46, 0 0 20px #020b46, 0 0 30px #020b46, 2px 2px 0 #020b46' }},
    
    // 5. Contour double bleu
    { name: "Contour double bleu", style: { textShadow: '2px 2px 0 #020b46, 4px 4px 0 #1e3a8a, -2px -2px 0 #020b46, -4px -4px 0 #1e3a8a' }},
    
    // 6. Contour avec ombre portée
    { name: "Contour avec ombre portée", style: { textShadow: '2px 2px 0 #020b46, 4px 4px 8px rgba(0,0,0,0.5)' }},
    
    // 7. Contour beige puis bleu
    { name: "Contour beige puis bleu", style: { textShadow: '2px 2px 0 #f9f7f2, 4px 4px 0 #020b46, -2px -2px 0 #f9f7f2, -4px -4px 0 #020b46' }},
    
    // 8. Contour beige épais
    { name: "Contour beige épais", style: { textShadow: '3px 3px 0 #f9f7f2, -3px -3px 0 #f9f7f2, 3px -3px 0 #f9f7f2, -3px 3px 0 #f9f7f2, 4px 4px 0 #f9f7f2, -4px -4px 0 #f9f7f2' }},
    
    // 9. Contour beige fin
    { name: "Contour beige fin", style: { textShadow: '1px 1px 0 #f9f7f2, -1px -1px 0 #f9f7f2, 1px -1px 0 #f9f7f2, -1px 1px 0 #f9f7f2' }},
    
    // 10. Contour avec glow beige
    { name: "Contour avec glow beige", style: { textShadow: '0 0 5px #f9f7f2, 0 0 10px #f9f7f2, 0 0 15px #f9f7f2, 0 0 20px #f9f7f2, 2px 2px 0 #f9f7f2' }},
    
    // 11. Contour dégradé beige-bleu
    { name: "Contour dégradé beige-bleu", style: { textShadow: '2px 2px 0 #f9f7f2, 4px 4px 0 #1e3a8a, 6px 6px 0 #1e3a8a, 8px 8px 0 #020b46' }},
    
    // 12. Contour effet 3D beige-bleu
    { name: "Contour effet 3D beige-bleu", style: { textShadow: '1px 1px 0 #f9f7f2, 2px 2px 0 #1e3a8a, 3px 3px 0 #1e3a8a, 4px 4px 0 #020b46, 5px 5px 0 #020b46' }},
    
    // 13. Contour beige avec ombre bleue
    { name: "Contour beige avec ombre bleue", style: { textShadow: '2px 2px 0 #f9f7f2, 4px 4px 0 #020b46, 6px 6px 0 #020b46, 8px 8px 0 #020b46' }},
    
    // 14. Contour cristal beige-bleu
    { name: "Contour cristal beige-bleu", style: { textShadow: '0 0 5px #f9f7f2, 0 0 10px #e0e7ff, 0 0 15px #c7d2fe, 2px 2px 0 #020b46' }},
    
    // 15. Contour beige avec glow bleu
    { name: "Contour beige avec glow bleu", style: { textShadow: '2px 2px 0 #f9f7f2, 0 0 10px #020b46, 0 0 20px #020b46, 0 0 30px #020b46' }},
    
    // 16. Contour bleu avec glow beige
    { name: "Contour bleu avec glow beige", style: { textShadow: '2px 2px 0 #020b46, 0 0 10px #f9f7f2, 0 0 20px #f9f7f2, 0 0 30px #f9f7f2' }},
    
    // 17. Contour double beige-bleu
    { name: "Contour double beige-bleu", style: { textShadow: '2px 2px 0 #f9f7f2, 4px 4px 0 #020b46, -2px -2px 0 #f9f7f2, -4px -4px 0 #020b46, 6px 6px 0 #f9f7f2, -6px -6px 0 #020b46' }},
    
    // 18. Contour beige avec ombre portée bleue
    { name: "Contour beige avec ombre portée bleue", style: { textShadow: '2px 2px 0 #f9f7f2, 4px 4px 8px #020b46' }},
    
    // 19. Contour bleu avec ombre portée beige
    { name: "Contour bleu avec ombre portée beige", style: { textShadow: '2px 2px 0 #020b46, 4px 4px 8px #f9f7f2' }},
    
    // 20. Contour alterné beige-bleu
    { name: "Contour alterné beige-bleu", style: { textShadow: '2px 2px 0 #f9f7f2, -2px -2px 0 #020b46, 2px -2px 0 #f9f7f2, -2px 2px 0 #020b46, 4px 4px 0 #f9f7f2, -4px -4px 0 #020b46' }}
  ]

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Test des Contours de Texte</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contourStyles.map((contour, index) => (
          <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-600">
            <h3 className="text-white text-sm mb-4 font-semibold">{contour.name}</h3>
            <div className="flex items-center justify-center h-32 bg-gradient-to-br from-blue-900 to-purple-900 rounded">
              <h2 
                className="text-3xl font-bold text-white uppercase"
                style={contour.style}
              >
                Casa Azul
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
