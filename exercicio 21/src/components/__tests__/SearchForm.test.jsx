import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest'; // Substituir por 'jest' se não utilizar Vitest
import { SearchForm } from '../SearchForm';

describe('SearchForm Component', () => {
  // Configuração inicial comum (setup)
  const setup = () => {
    const mockOnSearchSubmit = vi.fn();
    const utils = render(<SearchForm onSearchSubmit={mockOnSearchSubmit} />);
    
    // Captura dos nós do DOM através de queries semânticas
    const input = screen.getByPlaceholderText(/digite o nome do filme/i);
    const button = screen.getByRole('button', { name: /buscar/i });
    
    return {
      input,
      button,
      mockOnSearchSubmit,
      ...utils,
    };
  };

  it('deve renderizar a infraestrutura do formulário corretamente', () => {
    const { input, button } = setup();
    
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('deve atualizar o estado do input ao receber dados de entrada', async () => {
    const { input } = setup();
    const user = userEvent.setup();

    await user.type(input, 'Spirited Away');
    
    expect(input).toHaveValue('Spirited Away');
  });

  it('deve invocar o callback onSearchSubmit com o termo sanitizado e submeter via clique no botão', async () => {
    const { input, button, mockOnSearchSubmit } = setup();
    const user = userEvent.setup();

    await user.type(input, '   Ponyo   ');
    await user.click(button);

    // Valida a passagem de parâmetros e a sanitização (.trim())
    expect(mockOnSearchSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSearchSubmit).toHaveBeenCalledWith('Ponyo');
  });

  it('deve invocar o callback onSearchSubmit submetendo via tecla Enter', async () => {
    const { input, mockOnSearchSubmit } = setup();
    const user = userEvent.setup();

    // Simula a digitação seguida do pressionamento da tecla Enter dentro do input
    await user.type(input, 'Totoro{enter}');

    expect(mockOnSearchSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSearchSubmit).toHaveBeenCalledWith('Totoro');
  });

  it('deve aplicar um reset ao valor do input após uma submissão bem-sucedida', async () => {
    const { input, button } = setup();
    const user = userEvent.setup();

    await user.type(input, 'Princesa Mononoke');
    expect(input).toHaveValue('Princesa Mononoke');

    await user.click(button);

    // Valida a política de UX de purga do campo
    expect(input).toHaveValue('');
  });
});
