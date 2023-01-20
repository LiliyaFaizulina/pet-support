import {
  Item,
  CardTitle,
  Description,
  Addition,
  Time,
  Link,
  Line,
} from './NewsCard.styled';

const dateToShow = date => {
  if (date) {
    const dateArray = date.split('-');
    return `${dateArray[0]}/${dateArray[1]}/${dateArray[2]}`;
  }
};

export const NewsCard = news => {
  const { date, description, title, url } = news.news;
  return (
    <Item>
      <Line> </Line>
      <CardTitle>{title}</CardTitle>
      <Description>{description}</Description>
      <Addition>
        <Time dateTime={date}>{dateToShow(date)}</Time>
        <Link href={url} target="_blank">
          Read more
        </Link>
      </Addition>
    </Item>
  );
};
