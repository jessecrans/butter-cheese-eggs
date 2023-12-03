import React from 'react'

const CreateGame = () => {
  const handleCreateGame = () => {
    console.log('create game')
  }

  return (
    <button
      className='p-2 rounded bg-blue-500 hover:bg-blue-600 text-white'
      onClick={handleCreateGame}
    >
      Create Game
    </button>
  )
}

export default CreateGame