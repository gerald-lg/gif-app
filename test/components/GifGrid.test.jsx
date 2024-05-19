import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas sobre el componente GifGrid', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue(
            {
                images: [],
                isLoading: true
            }
        );

        const { container } = render( <GifGrid category={ category } />);
        const loading = container.querySelector('.loader');
        
        expect(loading).toBeTruthy();

    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => { 

        //arrange
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.png'
            },
            {
                id: 'DFG',
                title: 'Rayas',
                url: 'https://localhost/rayas.png'
            }
        ];

        //act
        useFetchGifs.mockReturnValue(
            {
                images: gifs,
                isLoading: false
            }
        );

        render(<GifGrid category={ category } />);

        //assert
        expect(screen.getAllByRole('img').length).toBe(2);

    });

});