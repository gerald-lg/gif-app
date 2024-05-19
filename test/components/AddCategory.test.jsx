import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en el componente AddCategory', () => { 
 
   test('debe de cambiar el valor de la caja de texto', () => { 

        //sujeto de pruebas
        render( <AddCategory onNewCategory={ () => {} } />);
        
        //tomamos nuestro input que lo obtenemos mediante un getByRole textbox, ya que es el unico input que hay
        const input = screen.getByRole('textbox');
        //luego enviamos el evento para poder cambiar nuestro estado del inputValue
        fireEvent.input( input, { target: { value: 'Saitama' } } );
        // screen.debug();
        
        expect(input.value).toBe('Saitama');

    }); 

    test('debe de llamar onNewCategory si el input tiene algun valor', () => { 
        const inputValue = 'Saitama';

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        
        fireEvent.input( input, { target: { value: inputValue } } );
        expect(input.value).toBe(inputValue);
        
        fireEvent.submit( form );
        expect(input.value).toBe('');
        
        //comprueba que la funcion ha sido llamada
        expect( onNewCategory ).toHaveBeenCalled();
        
        //comprueba que la funcion ha sido llamada una vez
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        
        //comprueba que la funcion fue llamada con el valor de la caja de texto
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    test('la funcion onNewCategory no debe ser llamada si el input no tiene valor', () => { 
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } />);
        
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
     });

 });