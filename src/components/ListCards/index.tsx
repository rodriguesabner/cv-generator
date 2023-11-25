import update from 'immutability-helper'
import { useCallback, useEffect, useState } from 'react'
import { Card } from './Card'
import { Layout } from './styles'

interface ListCardProps {
  data: any[];
  handleChangeList: (list: any[]) => void;
  type: string;
}

const ListCards = (props: ListCardProps) => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    setList(props.data)
  }, [props.data])

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
        text: item
      };
    }

    if(props.type === 'languages') {
      return {
        ...item,
        text: item.language,
      };
    }

    if(props.type === 'websites') {
      return {
        ...item,
        text: item.title,
      };
    }

    if(props.type === 'professionalHistory') {
      return {
        ...item,
        text: item.company,
      };
    }

    return item;
  }

  const renderCard = useCallback((card: any, index: number) => {
    const sanitizedCard = sanitizeData(card);
    return (
      <Card
        index={index}
        id={sanitizedCard.text}
        text={sanitizedCard.text}
        moveCard={moveCard}
      />
    )
  }, [])

  return (
    <Layout>{list.map((item, i) => renderCard(item, i))}</Layout>
  )
}

export default ListCards;