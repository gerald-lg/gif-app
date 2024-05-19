import getGifs from "../../src/helpers/getGifs";

describe('pruebas en getGifs()', () => {

    test('debe de retornar un arreglo de gifs', async () => { 

        const gifs = await getGifs('One Punch');
        // console.log(gifs);

        //prueba que el arreglo de los gifs tenga un largo mayor a cero
        expect(gifs.length).toBeGreaterThan( 0 );
        //prueba que el arreglo de los gifs tengan una estructura especifica para que mi componente siga funcionando

        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });

     });

 })