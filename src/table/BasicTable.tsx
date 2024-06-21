import React from 'react'
import allData from './data';

type Props = {}

const BasicTable = (props: Props) => {

    const dataWithMemo = React.useMemo(()=> allData, [allData])
    console.log("dataWithMemo: ", dataWithMemo);


  return (
    <div>BasicTable</div>
  )
}

export default BasicTable