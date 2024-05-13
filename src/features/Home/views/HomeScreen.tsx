import HomePrivateContent from './HomePrivateContent';
import HomePublicContent from './HomePublicContent';

export interface IHomeScreenProps {
  isPrivate: boolean;
}

export default function HomeScreen({ isPrivate }: IHomeScreenProps) {
  if (isPrivate) {
    return <HomePrivateContent />;
  }
  return <HomePublicContent />;
}
