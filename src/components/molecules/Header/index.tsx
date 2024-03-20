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
  signOut: () => Promise<void>;
};

const UserProfile = (props: UserProfileProps) => {
  const { user, signOut } = props;
  const UserProfileContainer = styled.div``;
  const UserName = styled.span`
    font-size: 14px
    color: #212121;
  `;

  const SignOutButton = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: blue;
    cursor: pointer;
    border-bottom: 1px solid blue;
  `;

  return (
    <UserProfileContainer>
      Hi!
      <UserName>{user.username}</UserName>
      <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
    </UserProfileContainer>
  );
};

export const Header = () => {
  const { user, signOut } = useAuthenticator();
  const handleSignOut = async () => {
    signOut();
  };
  return (
    <Container>
      <h1>Logo</h1>
      <Container>
        {user && <UserProfile user={user} signOut={handleSignOut} />}
      </Container>
    </Container>
  );
};
