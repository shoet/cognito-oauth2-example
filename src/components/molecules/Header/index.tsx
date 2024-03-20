import { useAuthenticator } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type UserProfileProps = {
  user: AuthUser;
};

const UserProfile = (props: UserProfileProps) => {
  const { user } = props;
  const UserProfileContainer = styled.div``;
  const UserName = styled.span`
    font-size: 14px
    font-weight: bold;
    color: #212121;
  `;

  return (
    <UserProfileContainer>
      <UserName>{user.username}</UserName>
    </UserProfileContainer>
  );
};

export const Header = () => {
  const { user } = useAuthenticator();
  return (
    <Container>
      <h1>Logo</h1>
      <Container>{user && <UserProfile user={user} />}</Container>
    </Container>
  );
};
