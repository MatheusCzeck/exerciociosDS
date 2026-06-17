// Ficheiro: GifGrid.jsx
import { GifItem } from './GifItem';

export function GifGrid({ gifs = [] }) {
  return (
    <div className="gif-grid">
      {gifs.map((gif) => (
        /* A regra de ouro: A key é declarada AQUI, no escopo do .map() */
        <GifItem key={gif.id} gif={gif} />
      ))}
    </div>
  );
}