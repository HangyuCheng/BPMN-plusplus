import CustomPalette from './Custompalette'
import CustomRenderer from './CustomRenderer'
import CustomContextPad from './CustomContextPad'
import MagicPropertiesProvider from './MagicPropertiesProvider'
import NewElement1 from './NewElement1'

export default {
    __init__: ['custompalette', 'customRenderer', 'customContextPad', 'propertiesProvider','newElement1'],
    custompalette: ['type', Custompalette],
    newElement1:['type',NewElement1],
    customRenderer: ['type', CustomRenderer],
    customContextPad: ['type', CustomContextPad],
    propertiesProvider: ['type', MagicPropertiesProvider]
}
