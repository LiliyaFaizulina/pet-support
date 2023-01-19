import { nanoid } from 'nanoid'
import { TimeList, TimeItem, Text } from "./FriendsItem.styled";

export const TimeTable = ({ shedule }) => {
    return (<TimeList>
        {shedule.map(item => <TimeItem key={nanoid()}>
            {(item.isOpen)
            ? <Text>{item.day}:{item.from}-{item.to}</Text>
            : <Text>{item.day}:Closed</Text>}
        </TimeItem>)}
        </TimeList>
    )
}