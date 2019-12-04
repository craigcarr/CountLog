import React from "react";
import ReceiverCreateContent from "../../ReceiverCreatePage/ReceiverCreateContent/ReceiverCreateContent";
import { useParams } from "react-router";

export default function ReceiverEditContent() {
  const params = useParams<any>();

  let counterId = parseInt(params['receiverId'], 10);

  return (
    <ReceiverCreateContent id={counterId}></ReceiverCreateContent>
  )
}
