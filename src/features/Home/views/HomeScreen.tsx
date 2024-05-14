import HomePrivateContent from './HomePrivateContent';

export interface IHomeScreenProps {
  isPrivate: boolean;
}

export default function HomeScreen({ isPrivate }: IHomeScreenProps) {
  return <HomePrivateContent />;
}
