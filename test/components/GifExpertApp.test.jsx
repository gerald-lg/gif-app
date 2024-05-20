import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../../src/GifExpertApp"

describe('Pruebas en el componente GifExpertApp', () => { 
    
    test('Snapshot del componente', () => { 

        const { container } = render(<GifExpertApp />)
        expect(container).toMatchSnapshot();
    });

 });