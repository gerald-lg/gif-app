import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../../src/GifExpertApp"

describe('Pruebas en el componente GifExpertApp', () => { 
    
    test('Snapshot del componente', () => { 

        const { container } = render(<GifExpertApp />)
        expect(container).toMatchSnapshot();
    });

    test('Debe retornar mas de una categoria', () => { 

        render(<GifExpertApp />);

        const onAddCategory = jest.fn();
        console.log(onAddCategory);
        screen.debug();

    });

 });