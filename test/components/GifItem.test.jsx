import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas sobre el componente GifItem', () => {
    
    const title = 'Hola';
    const url = 'cualquierurl';
    
    test('Debe hacer match con el snapshot', () => {
        
        const { container } = render(<GifItem title={title} url={url} />);
        
        expect(container).toMatchSnapshot();

    })
 })