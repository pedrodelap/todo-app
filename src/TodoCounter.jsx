import React from 'react'

export const TodoCounter = ({completed, total}) => {
    return (
        <div>Has completado {completed} de {total} TO-DOs</div>
    )
}
