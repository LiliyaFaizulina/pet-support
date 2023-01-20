import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TfiClose } from 'react-icons/tfi';
import { AiFillHeart } from 'react-icons/ai';
import { getNotice } from 'redux/notices/noticesOperations';
import { selectCurrentNotice } from 'redux/notices/noticesSelectors';
import { transformCategoryName } from 'helpers/transformCategoryName';
import { transformDate } from 'helpers/transformDate';
import {
  Card,
  CloseBtn,
  Wrapper,
  Overlay,
  Image,
  NoticeTitle,
  NoticeInfoItem,
  ContactLink,
  ToggleFavoriteBtn,
  Comment,
  FlexContainer,
  BtnContainer,
} from './NoticeModal.styled';

export const NoticeModal = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const notice = useSelector(selectCurrentNotice);

  useEffect(() => {
    dispatch(getNotice(id));
  }, [dispatch, id]);

  return (
    notice && (
      <Card>
        <CloseBtn type="button" onClick={closeModal}>
          <TfiClose />
        </CloseBtn>
        <FlexContainer>
          <Wrapper>
            <Image src={notice.image} alt="pet" />
            <Overlay>{transformCategoryName(notice.category)}</Overlay>
          </Wrapper>
          <div>
            <NoticeTitle>{notice.title}</NoticeTitle>
            <ul>
              <NoticeInfoItem>
                Name: <span>{notice.petName}</span>
              </NoticeInfoItem>
              <NoticeInfoItem>
                Birthday: <span>{transformDate(notice.dateOfBirth)}</span>
              </NoticeInfoItem>
              <NoticeInfoItem>
                Breed: <span>{notice.breed}</span>
              </NoticeInfoItem>
              <NoticeInfoItem>
                Location: <span>{notice.location}</span>
              </NoticeInfoItem>
              <NoticeInfoItem>
                The sex: <span>{notice.sex}</span>
              </NoticeInfoItem>
              <NoticeInfoItem>
                Email: <span>{notice.owner.email}</span>
              </NoticeInfoItem>
              <NoticeInfoItem>
                Phone: <span>{notice.owner.phone}</span>
              </NoticeInfoItem>
              {notice.category === 'sell' && (
                <NoticeInfoItem>
                  Price: <span>{notice.price}&#36;</span>
                </NoticeInfoItem>
              )}
            </ul>
          </div>
        </FlexContainer>
        <Comment>
          Comments: <span>{notice.comments}</span>
        </Comment>
        <BtnContainer>
          <ContactLink href={`tel:${notice.owner.phone}`}>Contact</ContactLink>
          <ToggleFavoriteBtn type="button">
            Add to <AiFillHeart />
          </ToggleFavoriteBtn>
        </BtnContainer>
      </Card>
    )
  );
};
