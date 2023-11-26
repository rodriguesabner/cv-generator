import update from 'immutability-helper'
import { useCallback, useEffect, useState } from 'react'
import { Card } from './Card'
import { Layout } from './styles'
import { CVProps } from '../../store/reducers/cv.reducer';

interface ListCardProps<T> {
  list: Array<T>;
  handleChangeList: (list: Array<T>) => void;
  type: string;
  data: (item: T, index: number) => JSX.Element;
}

const ListCards = <T,>(props: ListCardProps<T>) => {
  const [list, setList] = useState<T[]>([]);

  useEffect(() => {
    setList(props.list)
  }, [props.list])

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setList((prevItem) => {
      const newList = update(prevItem, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevItem[dragIndex]],
        ],
      });

      props.handleChangeList(newList);
      return newList;
    })
  }, [])

  const sanitizeData = (item: T) => {
    if (props.type === 'skills') {
      return {
        label: item
      };
    }

    if (props.type === 'languages') {
      const itemLang = item as CVProps['languages'][0];

      return {
        ...itemLang,
        label: itemLang.language,
      };
    }

    if (props.type === 'websites') {
      const itemWebsites = item as CVProps['websites'][0];

      return {
        ...item,
        label: itemWebsites.title,
      };
    }

    if (props.type === 'professionalHistory') {
      const itemCompany = item as CVProps['professionalHistory'][0];

      return {
        ...item,
        label: itemCompany.company,
      };
    }

    return item;
  }

  const renderCard = useCallback((card: T, index: number) => {
    const sanitizedCard = sanitizeData(card);
    return (
      <Card
        index={index}
        card={sanitizedCard as T}
        id={(sanitizedCard as { label: string }).label}
        moveCard={moveCard}
        data={props.data}
      />
    )
  }, [])

  return (
    <Layout>{list.map((item, i) => renderCard(item, i))}</Layout>
  )
}

export default ListCards;