import { useState } from 'react';

import {
  SponsorLink,
  FriendCard,
  Time,
  Text,
  ContactLink,
  Img,
  SponsorItem,
  TextWrapper,
  List,
} from './FriendsItem.styled';
import { TimeTable } from './TimeTable';
import defaultFriendImage from '../../images/defaultFriendImage.jpg';

export const FriendsItem = ({
  title,
  siteUrl,
  mapUrl,
  imageUrl = defaultFriendImage,
  adress,
  workDays,
  phone,
  email,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const week = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const newWorkDays =
    workDays &&
    workDays.map((day, index) => {
      return { day: week[index], ...day };
    });

  return (
    <SponsorItem>
      <SponsorLink href={siteUrl} target="_blank">
        {title}
      </SponsorLink>
      <FriendCard>
        <Img src={imageUrl ?? defaultFriendImage} alt={title} />
        <List>
          <TextWrapper
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                setIsVisible(true);
              }, 1000);
            }}
          >
            {workDays === null || workDays === undefined ? (
              <>
                <Text>Time: </Text>
                <Text>------------</Text>
              </>
            ) : (
              <>
                {' '}
                {workDays[0]?.isOpen ? (
                  <>
                    <Text>Time:</Text>
                    <Time>
                      {workDays[0].from}-{workDays[0].to}
                    </Time>
                  </>
                ) : (
                  <>
                    <Text>Time:</Text>
                    <Time>Closed</Time>
                  </>
                )}
                {isVisible || <TimeTable shedule={newWorkDays} />}
              </>
            )}
          </TextWrapper>
          <TextWrapper>
            <Text>Adress:</Text>
            {mapUrl ? (
              <ContactLink href={mapUrl} target="_blank">
                {adress}
              </ContactLink>
            ) : (
              <Text>дані відсутні</Text>
            )}
          </TextWrapper>
          <TextWrapper>
            <Text>Email:</Text>
            {email ? (
              <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
            ) : (
              <Text>дані відсутні</Text>
            )}
          </TextWrapper>
          <TextWrapper>
            <Text>Phone:</Text>
            {phone ? (
              <ContactLink href={`tel:${phone}`}>{phone}</ContactLink>
            ) : (
              <Text>дані відсутні</Text>
            )}
          </TextWrapper>
        </List>
      </FriendCard>
    </SponsorItem>
  );
};
