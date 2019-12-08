import React from 'react';
import CounterCreateContent from '../../CounterCreatePage/CounterCreateContent/CounterCreateContent';
import { useParams } from 'react-router';

export default function CounterEditContent() {
  const params = useParams<any>();

  const counterId = parseInt(params['counterId'], 10);

  return (
    <CounterCreateContent id={counterId}></CounterCreateContent>
  )
}
