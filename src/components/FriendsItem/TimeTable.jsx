import { nanoid } from 'nanoid';
import { TimeList, TimeItem, Text } from './FriendsItem.styled';

export const TimeTable = ({ shedule }) => {
  return (
    <TimeList>
      {shedule.map(item => (
        <TimeItem key={nanoid()}>
          {item?.isOpen ? (
            <Text>
              <span>{item.day}</span> {item.from}-{item.to}
            </Text>
          ) : (
            <Text>
              <span>{item.day}</span> Closed
            </Text>
          )}
        </TimeItem>
      ))}
    </TimeList>
  );
};
