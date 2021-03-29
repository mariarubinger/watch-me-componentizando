import { Button } from "./Button";

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

// criada no desafio
interface SideBarProps {
  genres: Genre[];
  selectedGenreId: number;
  onClickCategory: (id: number) => void;
}

export function SideBar({ genres, selectedGenreId, onClickCategory}: SideBarProps) {
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => onClickCategory(genre.id)} // mudei de handleClickButton para onClickCategory
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
    </nav>
  )
}