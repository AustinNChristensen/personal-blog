import React from 'react'
import Figure from './Figure'
import Code from './Code'

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: Code
  }
}

export default serializers
