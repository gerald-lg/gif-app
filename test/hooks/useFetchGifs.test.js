import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('pruebas en el hook useFetchGif', () => { 

    test('debe de retornar el estado inicial', () => { 

        const { result : { current : { images, isLoading } } } = renderHook(() => useFetchGifs('Haikyuu'));

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe de retornar un arreglo de imagenes y el isLoading en false', async () => { 

        const { result } = renderHook(() => useFetchGifs('Haikyuu'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
 });