import React from "react";
import ReceiverCreateContent from "../../ReceiverCreatePage/ReceiverCreateContent/ReceiverCreateContent";
import { useParams } from "react-router";

interface IParams {
  receiverId: string;
}

export default function ReceiverEditContent() {
  const params = useParams<IParams>();

  const receiverId = parseInt(params.receiverId, 10);

  return (
    <ReceiverCreateContent id={receiverId}></ReceiverCreateContent>
  )
}
