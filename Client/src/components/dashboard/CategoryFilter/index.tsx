import * as S from './styles';

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ 
  categories, 
  selectedCategories, 
  onCategoryChange 
}: CategoryFilterProps) => {
  return (
    <S.Container>
      {categories.map((category) => (
        <S.FilterButton
          key={category}
          $isActive={selectedCategories.includes(category)}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </S.FilterButton>
      ))}
    </S.Container>
  );
}; 