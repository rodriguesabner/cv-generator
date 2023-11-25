import update from 'immutability-helper'
import { useCallback, useEffect, useState } from 'react'
import { Card } from './Card'
import { Layout } from './styles'

interface ListCardProps {
  list: any[];
  handleChangeList: (list: any[]) => void;
  type: string;
  data: (item: any, index: number) => JSX.Element;
}

const ListCards = (props: ListCardProps) => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    setList(props.list)
  }, [props.list])

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setList((prevItem: any[]) =>{
      const newList = update(prevItem, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevItem[dragIndex] as Item],
        ],
      });

      props.handleChangeList(newList);
      return newList;
    })
  }, [])
 
  const sanitizeData = (item: any) => {
    if(props.type === 'skills') {
      return {
        label: item
      };
    }

    if(props.type === 'languages') {
      return {
        ...item,
        label: item.language,
      };
    }

    if(props.type === 'websites') {
      return {
        ...item,
        label: item.title,
      };
    }

    if(props.type === 'professionalHistory') {
      return {
        ...item,
        label: item.company,
      };
    }

    return item;
  }

  const renderCard = useCallback((card: any, index: number) => {
    const sanitizedCard = sanitizeData(card);
    return (
      <Card
        index={index}
        card={sanitizedCard}
        id={sanitizedCard.label}
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